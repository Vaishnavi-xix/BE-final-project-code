import React,{useState} from 'react';
import "./CreateProduct.css";
import axios from 'axios';
import { Link, resolvePath } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


export function CreateProduct() {
    const [name, setName]= useState("");
    const [productImg, setProductImg]= useState("");
    const [price,setPrice] = useState("");
    const [description, setDescription]= useState("");
    const [quantity, setQuantity] = useState("");

    const ProductBtn = async()=>{
        if(!name){
            alert("name is required");
            return;
        }
        if(!productImg){
            alert("image is required...")
            return;
        }
        if(!price){
            alert("price is required...");
            return;
        }
        if(!description){
            alert("descrition is required...")
            return;
        }
        if(!quantity){
            alert("quantity is required...")
            return;
        }

        const responce = await axios.post("/api/v1/createproduct",{
            name:name,
            productImg:productImg,
            price:price,
            description:description,
            quantity:quantity
        });

        if(responce?.data?.succcess){
            alert(responce.data.message);
            window.location.href = "/"
        }else{
            alert(responce.data.message)
        }

        setName("");
        setProductImg("");
        setDescription("");
        setPrice("");
        setQuantity("");

    }


  return (
    <div>
        <Navbar/>

        <form className='Product-form'>
            <h1>Create Product</h1>
            <div>
                <input 
                 type='text'
                  placeholder='Enter Product name' 
                  id='name'
                  className='form-controll'
                  value={name}
                  onChange={(e)=>{
                    setName(e.target.value);
                  }}/>
            </div>
             
        </form>
      
    </div>
  )
}

export default CreateProduct
