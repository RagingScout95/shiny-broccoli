import React from "react";
import { Link } from "react-router-dom";
import "./AddProduct.css";
import { useState, useEffect } from 'react';


const AddProduct = () => {
    const [pname, setpname] = useState();
    const [pprice, setpprice] = useState();
    const [pdesc, setpdesc] = useState();
    const [pspec, setpspec] = useState();
    const [pcatg, setpcatg] = useState();
    const [pcolr ,setpcolr] = useState();
    const [pcountry, setpcountry] = useState();
    const [pbrand, setpbrand] = useState();
    const [pmanufacture, setpmanufacture] = useState();
    const [pDimension, setpDimension] = useState();

    function dataSubmission(e){
        e.preventDefault();
        console.log();
    }
// ----------------------------------------------
const [file, setFile] = useState();
function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
}
//-----------------------------------------------
  return (
    <div className="Allproduct_">
      <div className="box-a">
        <h1 className="ad">Admin Dashboard</h1>    

        <div className="box-1">
          <p className="dashNavItem">
            <Link to="/admin" className="dashNavLinks">Catalog</Link>
          </p>  
          <p className="dashNavItem">
            <Link to="/orders" className="dashNavLinks">Orders</Link>
          </p>
          <p className="dashNavItem">
            <Link to="/addproduct" className="dashNavLinks">Add Products</Link>
          </p>        
        </div> 
      </div>
        
      <div className="box-b">
        <h1 className="box-b-h1">Add Product</h1>
        <hr></hr>
        <form onSubmit={dataSubmission}>
{/* ---------------------------------------------- */}
        <div className="upload_image">
            <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <img src={file} />
  
        </div>
{/* ---------------------------------------------- */}
            <label>Product Name <span className="span_">   *</span></label>
            <input className="pinput" type="text" onChange={()=>setpname}/>

            <label>Price <span className="span_">   *</span></label>
            <input className="pinput" type="text" onChange={()=>setpprice}/>

            <label>Description <span className="span_">   *</span></label>
            <input className="pinput" type="text" onChange={()=>setpdesc}/>

            <label>Specification <span className="span_">   *</span></label>
            <input className="pinput" type="text" onChange={()=>setpspec}/>

            <label>Category <span className="span_">   *</span></label>
            <input className="pinput" type="text" onChange={()=>setpcatg}/>

            <label>Color <span className="span_">   *</span></label>
            <input className="pinput" type="text" onChange={()=>setpcolr}/>

            <label>Country of Origin <span className="span_">   *</span></label>
            <input className="pinput" type="text" onChange={()=>setpcountry}/>

            <label>Brand <span className="span_">   *</span></label>
            <input className="pinput" type="text" onChange={()=>setpbrand}/>

            <label>Dimension <span className="span_">   *</span></label>
            <input className="pinput" type="text" onChange={()=>setpmanufacture}/>

            <label>Manufacturer <span className="span_">   *</span></label>
            <input className="pinput" type="text" onChange={()=>setpDimension}/>

            <input type="button" value="Submit" />
        </form>
        <p>By clicking the Sign Up botton, you agree to our <br></br>
        <a className='term_condition' href="/">Term and Conditions</a> and <a className='term_condition' href="/">Policy Privacy</a>
        </p>
      </div >
    </div>
  );
};

export default AddProduct;
