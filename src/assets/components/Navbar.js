import React from "react";
import Link from 'next/link'
import Image from 'next/image';
import logo from "../imgs/logo.svg";
import thumbnail from "../imgs/ivan-profile-thumb.png";
import arrowRight from "../imgs/arrow right.svg";

export default function Navbar ({ refToLastComp }){

    const scrolltoLast = () => {
        if (refToLastComp.current) {
          refToLastComp.current.scrollIntoView();
        }
      };

    return (
        <>
        <div className="navbar">
           <div className="container nav w-container">
               <Link className='logo-wrap' href="#hero">
                    <Image src={logo} className="image"/>
                </Link>
  
                <Link className='cta-contact-button glow-on-hover' href="#contact" scroll={false}>
                    <Image className='thumbnail' src={thumbnail}/>
                    <span>Conctacta!</span>
                    <Image className='arrow-right' src={arrowRight}/>
                </Link>
    

            </div> 
        </div>
        </>
    )
}
