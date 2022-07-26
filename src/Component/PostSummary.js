import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';



export default function PostSummary() {
  const [pages, setPages] = useState([]);
  const { id } = useParams();
    //Get Post
    useEffect(() => {
      axios.get('http://localhost/wordpressrestapi/wp-json/wp/v2/posts/'+id + '?_embed', {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
                      }
          })
          .then((res) => {
            console.log(res.data);
            setPages(res.data);
          })
          .catch((err) => {
              console.log(err)
            });
  },[id])
  
  var desc = pages &&  pages.content && pages.content.rendered;
  var div = document.createElement("div");
  div.innerHTML = desc;
  //return;
  return (
    <div className="container-sm my-5">
            <h3>Post Summary</h3>
            <div className="row">
                <div className="row">
                  <div className="col-md-6">{pages && (<img width="500" alt="" src={pages && pages._embedded && pages._embedded['wp:featuredmedia'] && pages._embedded['wp:featuredmedia'][0].source_url} />)}</div>
                  <div className="col-6 col-md-4">{pages && (<div>{pages &&  pages.title && pages.title.rendered}</div>)}</div>
              </div>
              <div className="row my-5">
                  <div className="col-12">{div.innerText}</div>
              </div>
            </div>
        </div>
  )
}
