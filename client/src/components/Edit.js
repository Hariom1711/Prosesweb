import React, { useEffect, useState } from 'react'
import { NavLink,useParams,useHistory  } from 'react-router-dom'



const Edit = () => {

//     const [getuserdata,setUserdata]=useState([])
// console.log(getuserdata)

// const history=useHistory("")
    const [inpval,setInpval]=useState({
        name:" ",
        email:" ",
        username:"",
        Mobile:"",
        address:"",
        desc:""
        
        
        })
        
        const setdata=(e)=>{
        
            console.log(e.target.value)
        
            const {name,value}=e.target;
            setInpval((preval)=>{
        return {
          ...preval,
          [name]:value,
          
        }
            })
        }


        const {id}=useParams("")
console.log(id)
   


     const getdata=async(e)=>{
   
     
       
     
       
       const res= await fetch(`/getuser/${id}`,{
         method:"GET",
         headers:{
           "Content-Type":"application/json"
         },
        
       })
       
       const data=await res.json();
       console.log(data);
       if(res.status === 404 ||!data){
        
         console.log("error")
       }
       else{
      setInpval(data)
         console.log(" get data")
       }
       }

       useEffect(()=>{
           getdata();
       },[])
const updateuser=async(e)=>{
    e.preventDefault();

    const {name,email,username,address,desc,Mobile}=inpval

    const res2 =await fetch(`/updateuser/${id}`,{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,email,username,address,desc,Mobile
        })
    });
    const data2= await res2.json();
    console.log(data2);

    if(res2.status===404 ||!data2){
        alert("fill the data")
    }
    else{
        alert("data added")
        // history.push("/")
    }
}

  return (
   <>
   
   <div className="container">

<NavLink to={"/"} >Home </NavLink>

<form className='mt-5'>
    <div className='row'>

    
<div className="form-group mb-5 col-lg-6 col-md-6 col-12">
<label for="exampleInputEmail1">Name</label>
<input type="text" name="name" onChange={setdata} value={inpval.name}  className="form-control mt-1.5" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />

</div>
<div class="form-group mb-5 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1">Email</label>
    <input type="email"name='email' onChange={setdata} value={inpval.email}  class="form-control mt-1.5" id="exampleInputPassword1" placeholder="Email" />
  </div>
<div className="form-group mb-5 col-lg-6 col-md-6 col-12">
<label for="exampleInputPassword1">Username</label>
<input type="text" name='username' onChange={setdata} value={inpval.username}  className="form-control mt-1.5" id="exampleInputPassword1" placeholder="Username" />
</div>
<div className="form-group mb-5 col-lg-6 col-md-6 col-12">
<label for="exampleInputPassword1">Mobile</label>
<input type="number" name='Mobile' onChange={setdata} value={inpval.Mobile}  className="form-control mt-1.5" id="exampleInputPassword1" placeholder="Mobile" />
</div>



<div className="form-group mb-5 col-lg-6 col-md-6 col-12">
<label for="exampleInputPassword1">Address</label>
<input type="text" name='address' onChange={setdata} value={inpval.address}  className="form-control mt-1.5" id="exampleInputPassword1" placeholder="Address" />
</div>
<div class="form-group mb-3 ">
    <label for="exampleInputPassword1">Description</label>
  <textarea name="desc" onChange={setdata} value={inpval.desc} className='form-control mt-1.5' id="" cols="10" rows="5"></textarea>
  </div>

<button type="submit" onClick={updateuser} className="btn btn-primary">Submit</button>
</div>
</form>
</div>

   
   </>
  )
}

export default Edit