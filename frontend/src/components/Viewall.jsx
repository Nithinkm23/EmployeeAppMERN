import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Addform from './Addform'

const Viewall = () => {

  const [data, setData] = useState([])
  const [update, setUpdata] = useState(false);
  const [singleValue, setSingleValue] = useState([])

  const fetchDataFromApi = () => {
    axios.get('http://localhost:3000/api/viewall')
      .then((response) => {
        console.log(response.data)
        setData(response.data)
      }
      )
  }

  const deleteBlog = (id) => {
    console.log("Delete Clicked")
    console.log(id)
    axios.delete("http://localhost:3000/api/delete/" + id)
      .then((response) => {
        alert(response.data.message)
        window.location.reload(false)
      })
  }

  const updateBlog = (val) => {
    console.log("Update clicked", val)
    setUpdata(true);
    setSingleValue(val);
  }
  useEffect(() => {
    fetchDataFromApi()
  }, []);

  let finalJSX = <div className="container">
    <div className="row">
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12">

        <div className="row g-3" >

          {data.map(
            (value, index) => {
              return <div className="col col-12 col-sm-6 col-md-6 col-lg-6 ">

                <div class="card mb-3" >
                  <div class="row g-0">

                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">{value.name}</h5>
                        <p class="card-text">{value.position}</p>
                        <p class="card-text"><small class="text-body-secondary">{value.location}</small></p>
                        <p class="card-text"><small class="text-body-secondary">${value.salary}</small></p>
                        <p class="card-text"><small class="text-body-secondary">
                          <button className='btn btn-danger' onClick={() => deleteBlog(value._id)}>Delete</button></small>
                          &nbsp;
                          <small class="text-body-secondary">
                            <button className='btn btn-primary' onClick={() => updateBlog(value)}>Update</button></small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          )}
        </div>
      </div>
    </div>
  </div>
  if (update) finalJSX = <Addform method='put' data={singleValue} />

  return (
    finalJSX
  )
}

export default Viewall