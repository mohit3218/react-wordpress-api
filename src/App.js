import './App.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import AddPost from "./Component/AddPost";
import Posts from "./Component/Posts";
import PostSummary from "./Component/PostSummary";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  useEffect(() => {
    const loginData = {
      username: "admin@admin.com",
      password: "mohit*789"
    };
      axios.post('http://localhost/wordpressrestapi/wp-json/jwt-auth/v1/token', loginData)
      .then((res) => {
        // console.log(res.data);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user_nicename', res.data.user_nicename);
        localStorage.setItem('user_email', res.data.user_email);
        localStorage.setItem('user_display_name', res.data.user_display_name);
      })
    .catch((err) => {
      console.log(err);
    });
  },[])

  let initTodo;
  if (localStorage.getItem("posts") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("posts"));
  }

     //Delete Post
  const onDelete = (post) => {
      axios.delete('http://localhost/wordpressrestapi/wp-json/wp/v2/posts/' + post, {
        headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
              }
          })
          .then((res) => {
              console.log(res);
          })
          .catch((err) => {
              console.log(err);
      });
  
      
      setPosts(
        posts.filter((e) => {
          return e.id !== post;
        })
      );
      localStorage.setItem("posts", JSON.stringify(posts));

      console.log("deleted", posts);
    };
 
  //Add Post
  const addPost = (title, desc, image) => {
    
    let sno;
    if (posts.length === 0) {
      sno = 1;
    } else {
      sno = posts[0].id + 1;
    }
    const myPosts = {
      ID: sno,
      title: title,
      content: desc,
      status: 'publish'
    };

    axios.post('http://localhost/wordpressrestapi/wp-json/wp/v2/posts?_embed', myPosts, {
    headers: {
      'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
    })
    .then((res) => {setPosts([...posts, res.data]); })
    .catch((err) => {console.log(err)});

      var post_id = posts[0].id + 2;
      var form_data = new FormData();
      form_data.append('file', image);
      form_data.append( 'title', image.name );
      form_data.append('post', post_id);
      form_data.append('parent', post_id);
      form_data.append('type', 'revision');
      form_data.append('mime_type', 'image/jpeg');

      console.log(form_data);
      var uploadedMedia = axios.post("http://localhost/wordpressrestapi/wp-json/wp/v2/media/?featured=" + post_id,
      form_data, {
          headers: {
            "Content-Disposition": `form-data; filename=" ${image.name}"`,
            "Content-Type": "image/jpeg",
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
      });
      
      console.log(uploadedMedia);
  };

  
  //Get Post
  useEffect(() => {
      async function loadPosts() {
          axios.get('http://localhost/wordpressrestapi/wp-json/wp/v2/posts?_embed', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
                        }
            })
          .then((res) => res.data)
          .then(res => setPosts(res))
          .catch(err => console.log(err))
      }
      loadPosts();
  },[])

  const [posts, setPosts] = useState(initTodo);

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<><AddPost addPost = {addPost} /> <Posts posts = {posts} onDelete = {onDelete} /></>}></Route>
        <Route exact path="/post/:id" element={<PostSummary />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

