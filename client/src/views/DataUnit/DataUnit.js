import React from "react";
import "./DataUnit.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import dataunitimg from "../DataUnit/DataUnitImg/data-destruction.webp";
import dataunitimg2 from "../DataUnit/DataUnitImg/disposal-services.png";
import { Link } from "react-router-dom";


function DataUnit() {
  return (
    <>
      <Navbar />
      {/* <div className="data-destruction-unit"> */}
      <h1 className="text-center my-3">
        Electronic Waste Data Destruction Unit
      </h1>

      {/* <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Secure Data Wiping</li>
          <li>Hard Drive Shredding</li>
          <li>Certified Data Destruction</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          For inquiries and appointments, please contact us at <a className='mobile' href="tel:+1234567890">123-456-7890</a> 
        </p>
      </section> */}

      <div className="dataunitimg">
        <img src={dataunitimg} alt="imgunit" className="imgunit" />
      </div>

      <div className="data-unit-container">
        <div>
          <p className="mx-5">
            <img src={dataunitimg2} alt="img-disposal" height={430} />
          </p>
        </div>

        <div className="destruction-text  m-5">
          <span className="fs-2 fw-bold ">
            {" "}
            Secure Data Destruction Services{" "}
          </span>
          <br />
          We provide secure data destruction services for
          <br />
          electronic waste to protect your sensitive information.
          <br />
          The risk of a data breach doesn’t end when you retire <br />
          old computers, hard drives, servers, and other
          <br />
          electronics. That’s why you need data destruction and IT recycling
          <br />
          services after your equipment is no longer useful to your
          <br />
          organization. <br />
          At Newtech Recycling, we offer data destruction as well
          <br />
          as IT hardware and server recycling as part of our corporate cleanout
          <br />
          services. We make it easy to find data destruction solutions that work
          <br />
          for your business
          <p>
            {/* <button type="button" className="btn outline-btn fw-bold  my-3">
              Destruction
            </button> */}
            <button type="button" className=" btn-certificate ">
              <Link to="/certificate" className="w-5 mb-5 text-none text-light  fw-bold">Click Here To Generate Certificate</Link>
            </button>
          </p>
        </div>
      </div>

      {/* <div className="dataunitimg">
           sjihdnads
        </div> */}

      {/* </div> */}
      <Footer />
    </>
  );
}

export default DataUnit;
