import React, { useState } from "react";
import "./RecyclingPlant.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

function RecyclingPlant() {
  
  const [name, setName] = useState("");
  const [productImg, setProductImg] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  const productBtn = async () => {
    if (!name) {
      alert("name is required");
      return;
    }
    if (!productImg) {
      alert("image is required...");
      return;
    }
    if (!price) {
      alert("price is required...");
      return;
    }
    if (!description) {
      alert("description is required...");
      return;
    }
    if (!quantity) {
      alert("quantity is required...");
      return;
    }

    const response = await axios.post("/api/v1/createproduct", {
      name: name,
      productImg: productImg,
      price: price,
      description: description,
      quantity: quantity,
    });

    if (response?.data?.success) {
      alert(response.data.message);
      window.location.href = "/";
    } else {
      alert(response.data.message);
    }

    setName("");
    setProductImg("");
    setDescription("");
    setPrice("");
    setQuantity("");
  };

  return (
    <>
      <Navbar />
      <div className="mb-5">
        <h1 className="text-center pt-2 pb-2 fs-2 ">
          Welcome to Our E-Waste Recycling Plant
        </h1>

        <p className="heading-text">
          Our recycling plant is dedicated to environmentally responsible waste
          management and recycling. We offer a wide range of recycling services
          to help protect the environment and reduce waste.
        </p>
      </div>

      <form className='Product-form'>
            <h1>Product Send For Manufacturing</h1><br/>
            <div>
                <input 
                 type='text'
                  placeholder='Enter Product name' 
                  id='name'
                  className='form-control'
                  value={name}
                  onChange={(e)=>{
                    setName(e.target.value);
                  }}/>
            </div>
            <div>
                <input 
                 type='text'
                  placeholder='Enter Product Image' 
                  id='Image'
                  className='form-control'
                  value={productImg}
                  onChange={(e)=>{
                    setProductImg(e.target.value);
                  }}/>
            </div>
            <div>
                <input 
                 type='text'
                  placeholder='Enter Product price' 
                  id='price'
                  className='form-control'
                  value={price}
                  onChange={(e)=>{
                    setPrice(e.target.value);
                  }}/>
            </div>
            <div>
                <input 
                 type='text'
                  placeholder='Enter Product description' 
                  id='description'
                  className='form-control'
                  value={description}
                  onChange={(e)=>{
                    setDescription(e.target.value);
                  }}/>
            </div>

            <div>
                <input 
                 type='text'
                  placeholder='Enter Product quantity' 
                  id='quantity'
                  className='form-control'
                  value={quantity}
                  onChange={(e)=>{
                    setQuantity(e.target.value);
                  }}/>
            </div>

            <button
          type="button"
          onClick={productBtn}
          className="bg-slate-950 hover:bg-blue-800 w-5 btn py-2 px-5 mt-4 rounded-lg text-xl block mx-auto"
        >
        Send 
        </button>
             
        </form>

      <Footer />
    </>
  );
}

export default RecyclingPlant;
