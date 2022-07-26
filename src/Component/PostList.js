import React from 'react'
import { Link } from "react-router-dom";

export const PostList = ({post, onDelete}) => {
    var desc = post.content.rendered;
    var div = document.createElement("div");
    div.innerHTML = desc;
  return (
    <>
    <tbody>
        <tr>
        <th>{post.id}</th>
        <td><p>{post.title.rendered.length > 10 ? post.title.rendered.substring(0,100) : post.title.rendered}</p></td>
        <td><p>{post.content.rendered.length > 10 ? div.innerText.substring(0,100) : div.innerText}</p></td>
        <td><img width="100" height="100" alt="" src={post && post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url} /></td>
        <td>
            <Link to={`/post/${post.id}`} ><button className="btn btn-sm btn-primary">View</button></Link>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(post.id)}}>Delete</button>
        </td>
        </tr>
    </tbody>
    </>
  )
}

export default PostList
