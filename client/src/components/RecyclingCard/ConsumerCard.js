import "./ConsumerCard.css"
import { Link } from "react-router-dom";

export default function consumerCard({ name, consumerproductimg, consumerproductprice, consumerproductDescription, consumerproductquantity }) {

  const manufacturing = ()=>{
    alert("successfully send product")
    window.location.href="/"
    return
  }
  
  return (
    
    <div className="consumer-card">
        
      <p><img  src={consumerproductimg} className="img-consumer" alt="" /></p>

      <h2>{name}</h2>

      <p className="card-text text-dark ">{consumerproductDescription}</p>

      <h2 className="card-headding text-dark fw-bold">₹ {consumerproductprice}</h2>
{/* 
      <p>{consumerproductquantity}</p> */}

   

      <button type='button' onClick={manufacturing} className="btn outline-btn my-3 bg:hover-light fw-bold ">Send To Manufacture</button>
    </div>
  );
}
