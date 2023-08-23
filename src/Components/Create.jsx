import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Create() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate()
  const handleuserInput = (e) => {
    e.preventDefault()
    axios.post("http://localhost:9192/api/v1/Create",
      {
        name: name,
        age: age,
        email: email

      })
      .then(() => {
        navigate('/');
      })
  }

  return (
    <div className='row'>
      <div className='col-md-4'>
        <Link to='/'>
          <div className=''>
            <button className='btn btn-primary'>Read</button>
          </div>
        </Link>
        <form onSubmit={handleuserInput}>
          <div className=''>
            <h1 className='bg-primary p-4 text-center mt-4 mb-4'>Create Data</h1>
          </div>
          <div className='form-group'>
            <label>Name:</label>
            <input type='text' placeholder='name' className='form-control' value={name} onChange={(e) => setName(e.target.value)}></input>
          </div>
          <div className='form-group'>
            <label>Age:</label>
            <input type='number' placeholder='age' className='form-control' value={age} onChange={(e) => setAge(e.target.value)}></input>
          </div>
          <div className='form-group'>
            <label>Email:</label>
            <input type='email' placeholder='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <br />
          <div className='d-grid'>
            <input type="submit" value='submit' className='btn btn-primary' />
          </div>

        </form>

      </div>
      {name}
      {age}
      {email}
    </div>
  )
}

export default Create

