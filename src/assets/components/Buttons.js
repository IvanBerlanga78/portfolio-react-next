import React from "react";
import iconPlane from "../imgs/icon-plane_icon-plane.svg";
import Image from 'next/image';

export default function DetailsButton ({ButtonLink, ButtonText}){
    return (
        <>
          <a className="details-button wide" 
            href={ButtonLink}>
            <div className='details-button-wrap'>
                <div className='details-buttonn-icon-wrap'>
                    <Image src={iconPlane}/>
                </div>
                <p>
                {ButtonText}
                </p>
                </div>   
            </a>  
        </>
    )
}