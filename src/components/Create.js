import React from 'react'
import { Link } from 'react-router-dom'

const Create = () => {

    const handleInput = (e) => {
        console.log(e.target.value)
    }

    const handleSubmit = () => {
        console.log('submit');
    }

  return (
    <div className='container py-3'>
        <div className="card">
            <div className="card-body">
                <div className="header">
                    <div className="row px-2">
                        <div className="col text-start">
                            <h3>Create new user</h3>
                        </div>
                        <div className="col text-end">
                            <Link className='btn btn-md btn-primary' to="/">Back</Link>
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col-4 text-end">
                                            <label htmlFor="name" className="form-label">Name</label>
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" id="name" aria-describedby="Name" onChange={(e) => {handleInput(e)}} />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col-4 text-end">
                                            <label htmlFor="username" className="form-label">Username</label>
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" id="username" aria-describedby="Username" onChange={(e) => {handleInput(e)}} />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col-4 text-end">
                                            <label htmlFor="email" className="form-label">Email</label>
                                        </div>
                                        <div className="col">
                                            <input type="email" className="form-control" id="email" aria-describedby="Email" onChange={(e) => {handleInput(e)}} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4"></div>
                                    <div className="col-md">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Create