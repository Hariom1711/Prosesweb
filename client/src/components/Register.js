import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


const Register = () => {
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
const addinpdata=async(e)=>{

e.preventDefault();

const {name,email,username,Mobile,address,desc}=inpval;

const res= await fetch("/register",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    name,email,username,Mobile,address,desc

  })
})

const data=await res.json();
console.log(data);
if(res.status === 404 || !data){
  alert("error")
  console.log("error")
}
else{
  alert("data added")
  console.log("data added")
}
}

    return (
        <>

            <div className="container">

                <NavLink to={"/"} >Home </NavLink>

                <form className='mt-5'>
                    <div className='row'>

                    
  <div class="form-group mb-5 col-lg-6 col-md-6 col-12">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" name="name" onChange={setdata} value={inpval.name}  class="form-control mt-1.5" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
   
  </div>
  <div class="form-group mb-5 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1">Email</label>
    <input type="email"name='email' onChange={setdata} value={inpval.email}  class="form-control mt-1.5" id="exampleInputPassword1" placeholder="Email" />
  </div>
  <div class="form-group mb-5 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1">Username</label>
    <input type="text" name='username' onChange={setdata} value={inpval.username}  class="form-control mt-1.5" id="exampleInputPassword1" placeholder="Username" />
  </div>
  <div class="form-group mb-5 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1">Mobile</label>
    <input type="number" name='Mobile' onChange={setdata} value={inpval.Mobile}  class="form-control mt-1.5" id="exampleInputPassword1" placeholder="Mobile" />
  </div>
  
  <div class="form-group mb-5 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1">Address</label>
    <input type="text" name='address' onChange={setdata} value={inpval.address}  class="form-control mt-1.5" id="exampleInputPassword1" placeholder="Address" />
  
   

  </div>
  <div class="form-group mb-3 ">
    <label for="exampleInputPassword1">Description</label>
  <textarea name="desc" onChange={setdata} value={inpval.desc} className='form-control mt-1.5' id="" cols="10" rows="5"></textarea>
  </div>
 
  <button type="submit" onClick={addinpdata} class="btn btn-primary">Submit</button>
  </div>
</form>
            </div>

        </>
    )
}

export default Register