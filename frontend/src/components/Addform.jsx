import axios from   'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Addform = () => {
    const navigate = useNavigate();
    const [post, setPost] = useState({ name: "", location: "", position: "", salary: "" })
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setPost({
            ...post, [name]: value
        })
        console.log(post)
    }

    const addPost = () => {
        console.log("Clicked", post)
        axios.post("http://localhost:3000/api/addpost", post)
            .then((response) => {
                if (response.data.message === "Post added successfully!") {
                    alert(response.data.message)
                    navigate("/viewall")
                }
                else{
                    alert(response.data.message)
                }
            })
    }

    return (
        <div>

            <div className="container " >

                <div className="row">

                    <p class="fw-light fs-4">EMPLOYEE FORM</p>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 col-xs-12">
                        <div className="row g-3">

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 col-xs-6">
                                <div class="form-floating mb-3">
                                    <input name='name' value={post.name} onChange={inputHandler} type="text" class="form-control" id="floatingInput" placeholder="name" />
                                    <label for="floatingInput">Name</label>
                                </div>
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 col-xs-6">
                                <div class="form-floating mb-3">
                                    <input name='position' value={post.position} onChange={inputHandler} type="text" class="form-control" id="floatingInput" placeholder="designation" />
                                    <label for="floatingInput">Position</label>
                                </div>
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 col-xs-6">
                                <div class="form-floating mb-3">
                                    <input name='location' value={post.location} onChange={inputHandler} type="text" class="form-control" id="floatingInput" placeholder="location" />
                                    <label for="floatingInput">Location</label>
                                </div>
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 col-xs-6">
                                <div class="form-floating mb-3">
                                    <input name='salary' value={post.salary} onChange={inputHandler} type="text" class="form-control" id="floatingInput" placeholder="salary" />
                                    <label for="floatingInput">Salary</label>
                                </div>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 col-xs-12">
                                <a class="btn btn-primary" onClick={addPost} role="button">Submit</a>
                            </div>

                            <a href="/"> <button type="button" class="btn btn-light">Back to Home</button></a>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Addform