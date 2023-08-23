import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Edit() {
    const [id, setid] = useState('');
    const [name, setName] = useState('');
    const [age,setAge]=useState('');
    const [email, setEmail] = useState('');
    const Navigate=useNavigate();
 const handleupdate=(e)=>{
     e.preventDefault();
    axios.put(`https://6436bc093e4d2b4a12da49d4.mockapi.io/crud/${id}`,
    {
        e_name:name,
        e_age:age,
        e_email:email

    }).then((response)=>{
        console.log(response.data);
        Navigate('/')

    })
   .catch(error=>{
    console.error(error);
   })
}
    useEffect(() => {
     setid(localStorage.getItem('id'));
     setName (localStorage.getItem('name'));
     setAge(localStorage.getItem('age'));
     setEmail(localStorage.getItem('email'));
    }, [])
    
  return (
    <div className='row'>
        <div className='col-md-4'>
            <div className=''>
                <form onSubmit={handleupdate}>
                    <div className='bg-primary mb-4 mt-4'>
                        <h1>Update Data</h1>
                    </div>
                    <div  className='form-group'>
                     <label>Name:</label>
                     <input type='text' placeholder='name' className='form-control' value={name} onChange={(e)=>setName(e.target.value)}></input>
                    </div>
                    <div className='form-group' >
                     <label>Age:</label>
                     <input type='number' placeholder='age' className='form-control' value={age} onChange={(e)=>setAge(e.target.value)} ></input>
                    </div>
                    <div className='form-group'>
                     <label>Email:</label>
                     <input type='email' placeholder='email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                    </div>
                    <br/>
                    <input type='submit' value='submit' className='btn btn-primary'/>
                </form>

            </div>

        </div>
      
    </div>
  )
}

export default Edit


// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


// function Edit() {
//     const [id, setid] = useState(0);
//     const [name, setname] = useState('');
//     const [age, setAge] = useState('');
//     const [email, setEmail] = useState('');
//     const navigate=useNavigate();
//     const handleupdate=(e)=>{
//         e.preventDefault();
//         axios.put(`https://6436bc093e4d2b4a12da49d4.mockapi.io/crud/${id}`,{
//             e_name:name,
//             e_age:age,
//             e_email:email
//         })
//         .then(()=>{
//           navigate('/')
//         })
//     }
//     useEffect(() =>{
//         setid(localStorage.getItem('id'));
//         setname(localStorage.getItem('name'));
//         setAge(localStorage.getItem('age'));
//         setEmail(localStorage.getItem('email'))
//     },[])


//     return (
//         <div className='row'>
//             <div className='col-md-4'>
               
//                 <form onSubmit={handleupdate}>
//                 <div className=''>
//                     <h1 className='bg-primary p-4 text-center'>Update Data</h1>
//                 </div>
//                     <div className='form-group'>
//                         <label>Name:</label>
//                         <input type="text" placeholder='name' className='form-control' value={name} onChange={(e) => setname(e.target.value)}></input>
//                     </div>
//                     <div className='form-group'>
//                         <label>Age:</label>
//                         <input type="number" placeholder='age' className='form-control' value={age} onChange={(e) => setAge(e.target.value)}></input>
//                     </div>
//                     <div className='form-group'>
//                         <label>Email:</label>
//                         <input type="email" placeholder='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)}></input>
//                     </div>
//                     <br />
//                     <div className='btn btn-primary' >
//                         <input type="submit" value='submit' className='btn btn-primary' />

//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Edit
