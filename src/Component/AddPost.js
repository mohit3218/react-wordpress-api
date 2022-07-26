import React, { useState } from "react";

// import axios from "axios";

const AddPost = ({addPost}) => {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');

    // const onFileChange = event => {
    //     // Update the state.
    //     console.log(event.target);
    //     setImage(event.target.files[0]);
    // };

    const changeHandler = (event) => {
        event.preventDefault();
		setImage(event.target.files[0]);
	};

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !desc || !image) {
            alert("Title or Description or image cannot be blank");
        }
        else {
            addPost(title, desc, image);
            setTitle("");
            setDesc("");
            setImage("");
        }
    }
  

  return (
    <>
        <div className="container-sm my-5">
            <h3>Add a Post</h3>
            <div className="row">
                <div className="col-xl-4">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Post Title</label>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="desc" className="form-label">Post Description</label>
                            <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Featured Image</label>
                            <input type="file" onChange={changeHandler} className="form-control" id="image" />
                        </div>
                        <button type="submit" className="btn btn-sm btn-success">Add Post</button>
                    </form>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default AddPost
