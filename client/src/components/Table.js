import React, { useEffect, useState } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { NavLink} from 'react-router-dom';
const Table = () => {


const [getuserdata,setUserdata]=useState([])
console.log(getuserdata)


  const getdata=async(e)=>{

  
    
  
    
    const res= await fetch("/getdata",{
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
   setUserdata(data)
      console.log(" get data")
    }
    }



    useEffect(()=>{
      getdata()
    },[])


    const deleteuser=async(id)=>{

const res2=await fetch(`/deleteuser/${id}`,{
  method:"DELETE",
  headers:{
    "Content-Type":"application/json"
  },
})
const deletedata= await res2.json();
console.log(deletedata)

if(res2.status === 404 || !deletedata){
  console.log("error");
}
else{
  console.log("user deleted")
  getdata();
}
    }

  return (
  < >
  <div style={{marginTop:'100px'}}>

<div className="container">
<div className="add_btn"  >
    <NavLink to="/register" className='btn btn-primary' > <AddIcon /> Add data</NavLink>
</div>

<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Mobile</th>
      <th scope="col">Address</th>
      {/* <th scope="col">Product</th> */}
      <th scope="col">  </th>
    </tr>
  </thead>
  <tbody>
    {
      getuserdata.map((element,id)=>{

        return (
          <>
           <tr>
      <th scope="row">{id + 1}</th>
      <td>{element.name}</td>
      <td>{element.Mobile}</td>
      <td>{element.address}</td>
      {/* <td>{element.product}</td>  */}
      <td className='d-flex justify-content-between' >
        <NavLink to={`view/${element._id}`}>   <button className='btn btn-success'><RemoveRedEyeIcon /></button ></NavLink >
        
         <NavLink to={`edit/${element._id}`}> <button className='btn btn-primary'><EditIcon /> </button></NavLink>
          <button className=' btn btn-danger'  onClick={()=>deleteuser(element._id)}><DeleteSharpIcon /> </button>
      </td>
   
    </tr>
          </>
        )
      })
    }
   
   
  
  </tbody>
</table>
</div>

  
  
  </div>
 
  </>
  )
}

export default Table