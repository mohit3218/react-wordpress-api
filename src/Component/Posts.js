import React from 'react'
import PostList	from './PostList'

const Posts = (props) => {

  return (
    <>
    <div className='container'>
        <h3 className="my-3">Posts List</h3>
        <table className="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Featured Image</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        {props['posts'].length===0? "No Posts to display":  
            props['posts'].map((post)=>{
                //console.log(post);
                return (
                <PostList post={post} key={post.id} onDelete={props.onDelete} />   
                )
            })
        }
        </table>
    </div>
    </>
  )
}

export default Posts
