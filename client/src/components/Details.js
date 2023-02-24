import React, { useState,useEffect } from 'react'
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';

import LocationOnIcon from '@mui/icons-material/LocationOn';

import { NavLink, useParams } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';






const Details = () => {

  
  const {id}=useParams("")
  console.log(id)
  
  const [getuserdata,setUserdata]=useState([])
  console.log(getuserdata)




     const getdata=async()=>{
   
     
       
     
       
       const res= await fetch(`/getuser/${id}`,{
         method:"GET",
         headers:{
           "Content-Type":"application/json"
         },
        
       })
       
       const data=await res.json();
       console.log(data,"OM");


       if(res.status === 422 ||!data){
        
         console.log("error")
       }
       else{
      setUserdata(data)
         console.log("get data")
       }
       }

       useEffect(()=>{
          getdata()
       },[])

    
  return (
   <>
<div className='container mt-3'>
<NavLink to={"/"} > Home </NavLink>
   <h1 style={{fontWeight:400}}> Welcome {getuserdata.name} </h1>

   <Card sx={{ minWidth: 275 ,maxWidth:600}}>
   <div className="add_btn mt-3" style={{justifyContent:'space-between'}}>
<NavLink to={`/edit/${getuserdata._id}`}><button className='btn btn-primary ' style={{marginLeft:10}}><EditIcon /> </button></NavLink>
{/* <NavLink><button className=' btn tn-danger'onClick={()=>deleteuser(getuserdata._id)}  style={{marginLeft:10}}><DeleteSharpIcon /> </button></NavLink> */}
</div>
   <CardContent>
       <div className="row">
       <div className="left_view col-lg-6 col-md-6 col-12">

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdV3ip1gxZ9bM13uZjWbiCpiETs2AVz3GS_Q&usqp=CAU" style={{width:50}} alt="" />
<h3 className='mt-3'> Name:<span style={{fontWeight:400}}>{getuserdata.name} </span> </h3>
<p className='mt-3'>Mobile:<span style={{fontWeight:400}}>{getuserdata.Mobile}</span> </p>
      <p className='mt-3'> Userame: <span>{getuserdata.username}</span></p>


     
       </div>

       <div className="right_view  col-lg-6 col-md-6 col-12">
       <p className='mt-3'> <EmailIcon /> Email: <span>{getuserdata.email}</span></p>
        <p className='mt-3'><LocationOnIcon /> Location:<span>{getuserdata.address}</span></p>
      <p className='mt-3'>Description: <span> {getuserdata.desc} </span></p>
      
       </div>
       </div>
       </CardContent>


       </Card>

</div>

   </>
  )
}

export default Details