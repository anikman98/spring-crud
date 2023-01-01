import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {

    const [data, setData] = useState([]);

    const fetchData = () => {
       axios.get("http://localhost:8080/users")
        .then((response) => {
            setData([...response.data])
        });

        console.log(data);
    }

    useEffect(()=>{
        fetchData();
    },[]);

  return (
    <div className='container py-3'>
        <div className="card">
            <div className="card-body">
                <div className="header ">
                    <div className="row px-2">
                        <div className="col text-start">
                            <h3>Users</h3>
                        </div>
                        <div className="col text-end">
                            <Link className='btn btn-md btn-primary' to="/create">Add New</Link>
                        </div>
                    </div>
                </div>
                <div className="data p-3">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            data.length > 0
                            ?   data.map((item, key) => {
                                return (
                                    <tr>
                                        <th scope="row" key={key}>{item.id}</th>
                                        <td>{item.name}</td>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <Link className='btn btn-sm btn-primary me-1' to={`/edit/${item.id}`} >Edit</Link>
                                            <button className='btn btn-sm btn-danger ms-1'>Delete</button>
                                        </td>
                                    </tr>
                                )
                                })
                            :   <tr>
                                    <td colspan="5">No users found!</td>
                                </tr>
                        }
                        
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default Home