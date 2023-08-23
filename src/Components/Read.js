import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Read() {
    const [apidata, setapidata] = useState([])
    function getallData() {
        axios.get("http://localhost:9192/api/v1/Read")
            .then((response) => {
                setapidata(response.data);
            })
    }
    function handledelete(id){
        axios.delete(`http://localhost:9192/api/v1/Delete/${id}`)
        .then(()=>{
            getallData()
        })
    }
    function setDatatoStorage(id,e_name,e_age,e_email){
        localStorage.setItem("id",id);
        localStorage.setItem("name",e_name);
        localStorage.setItem("age",e_age);
        localStorage.setItem("email",e_email);

    }
    
    useEffect(() => {
        getallData()
    }, [])

    return (
        <div className='row'>
            <div className='col-md-12'>
                <Link to='/Create'>
                <div className='mt-4 mb-4'>
                  <button className='btn btn-primary' >create New Data</button>
                </div>
                </Link>
                <table className='table table-bordered table-dark table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>AGE</th>
                            <th>EMAIL</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                          
                            apidata.map((item) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.age}</td>
                                            <td>{item.email}</td>
                                            <td>
                                            <Link to='/Edit'>
                                            <button className='btn btn-primary' onClick={()=>{setDatatoStorage(item.id,item.name,item.age,item.email)}}>Edit</button>
                                            </Link>
                                            </td>
                                            <td><button className='btn btn-danger' onClick={()=>{if(window.confirm("Are you sure to delete this"))handledelete(item.id)}}>Delete</button></td>
                                        </tr>
                                    </>
                                )
                            })


                        }


                    </tbody>
                </table>

            </div>

        </div>
    )
}

export default Read































































































// import React from 'react'
// import axios from 'axios';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';

// function Read() {
//     const [apidata, setapidata] = useState([])
//     function getData() {
//         axios.get("https://6436bc093e4d2b4a12da49d4.mockapi.io/crud")
//             .then((response) => {
//                 setapidata(response.data);
//             })
//     }
//     function handledelete(id) {
//         axios.delete(`https://6436bc093e4d2b4a12da49d4.mockapi.io/crud/${id}`)
//             .then(() => {
//                 getData()
//             })

//     }
//     function setDatatoStorage(id,e_name,e_age,e_email){
//         localStorage.setItem('id',id);
//         localStorage.setItem('name',e_name);
//         localStorage.setItem('age',e_age);
//         localStorage.setItem('email',e_email)
//     }
//     useEffect(() => {
//         getData()
//     }, [])
//     return (
//         <div className='row'>
//             <div className='col-md-12'>
//                 <Link to='/Create'>
//                     <div className='mb-2 mt-2 text-center d-grid'>
//                         <button className='btn btn-primary'>Create New Data</button>

//                     </div>
//                 </Link>

//                 <table className='table table-bordered table-striped table-dark table-hover'>
//                     <thead>
//                         <tr>
//                             <th>Id</th>
//                             <th>Name</th>
//                             <th>Age</th>
//                             <th>Email</th>
//                             <th>Edit</th>
//                             <th>Delete</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             apidata.map((item) => {
//                                 return (
//                                     <>
//                                         <tr>
//                                             <td>{item.id}</td>
//                                             <td>{item.e_name}</td>
//                                             <td>{item.e_age}</td>
//                                             <td>{item.e_email}</td>
//                                             <td>
//                                                 <Link to='/Edit'>
//                                                     <button className='btn btn-primary' onClick={()=>setDatatoStorage(item.id,item.e_name,item.e_email,item.e_age)}>Edit</button>
//                                                 </Link>
//                                             </td>
//                                             <td><button className='btn btn-danger' onClick={() => { if (window.confirm("Are you sure to delete data??")) handledelete(item.id) }}>Delete</button></td>
//                                         </tr>

//                                     </>
//                                 )

//                             })

//                         }
//                     </tbody>
//                 </table>

//             </div>

//         </div>
//     )
// }

// export default Read
