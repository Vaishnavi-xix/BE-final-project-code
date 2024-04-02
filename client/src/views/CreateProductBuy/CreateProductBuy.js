import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CreateProductBuy.css';
import Navbar from './../../components/Navbar/Navbar';
import { useParams } from 'react-router-dom';

const CreateProductBuy = () => {
    const { _id } = useParams();
    const [productDetails, setProductDetails] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [shippingAddress, setShippingAddress] = useState('');
    const [deliveryCharges, setDeliveryCharges] = useState(0);

    useEffect(() => {
        const loadProductDetails = async () => {
            try {
                const response = await axios.get(`/api/v1/createproduct/${_id}`);
                setProductDetails(response?.data?.data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        loadProductDetails();
    }, [_id]);

    const increQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrQuantity = () => {
        if (quantity === 1) return;
        setQuantity(quantity - 1);
    };

    const orderPlace = async () => {
        const userStore = JSON.parse(localStorage.getItem('user') || '{}');
        const newOrderUser = {
            user: userStore?._id,
            product: productDetails?._id, // Make sure to check if productDetails is not null
            quantity: quantity,
            shipping_address: shippingAddress,
            delivery_charges: deliveryCharges
        };

        try {
            const response = await axios.post('/orders', newOrderUser);
            alert(response?.data?.message);
            if (response?.data.success) {
                window.location.href = "/orders";
            }
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className='container buyDetails-main-container mt-5 bg-light'>
                <div className='buy-details-container '>
                    <div className='p-3'>
                        {productDetails && (
                            <img src={productDetails.productImg} alt={productDetails.name} className='order-product-img' />
                        )}
                    </div>
                    <div>
                        <div className='pt-3 bg-light '>
                            <h2>{productDetails?.name}</h2>
                            <h2 className='price'>Price: ₹ {productDetails?.price} /-</h2>
                            <p>{productDetails?.description}</p>
                            <button type="button" onClick={increQuantity} className='quantitybtn'>+</button>
                            <input type="text" className='quantity' value={quantity} readOnly />
                            <button type="button" onClick={decrQuantity} className='quantitybtn'>-</button><br /><br />
                            <input
                                type="text"
                                placeholder='Enter your shipping address'
                                value={shippingAddress}
                                className='inputshippingaddress'
                                onChange={(e) => setShippingAddress(e.target.value)}
                            /><br />
                            <div className='mt-4'>
                                <input
                                    type="radio"
                                    value={40}
                                    name='deliverycharges'
                                    className='deliverycharges'
                                    onClick={() => setDeliveryCharges(40)}
                                /><label className='ms-1'>Normal delivery charges</label>
                                <input
                                    type="radio"
                                    value={100}
                                    name='deliverycharges'
                                    className='deliverycharges ms-5'
                                    onClick={() => setDeliveryCharges(100)}
                                /><label className='ms-2'>SuperFast delivery charges</label>
                            </div>
                        </div>
                        <button type="button" onClick={orderPlace} className='button order-now-btn mt-4'>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateProductBuy;
