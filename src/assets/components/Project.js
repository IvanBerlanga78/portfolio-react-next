import React, {useState, useEffect} from "react";
import {SlideFade} from './Sliders';
import LabelSmall from './Labels';
import DetailsButton from './Buttons';
import iconPlus from "../imgs/icon-plus_icon-plus.svg";
import slice from "lodash.slice";
import Image from 'next/image';

    
function Project ({ProjectFirstImage, ProjectSecondImage, ProjectThirdImage, ProjectFourthImage, ProjectLabelText1, ProjectLabelText2, ProjectText, ProjectHeading, ProjectExternalLink}) {

    return (
        <>
    <div className="case_study__image-wrap">
        <div className='slider-container'>
            <div className='slider-mask'>
                <SlideFade
                duration = {3000}
                firstSlide={ProjectFirstImage}
                secondSlide={ProjectSecondImage}
                thirdSlide={ProjectThirdImage}
                />
            </div>
        </div>
    </div>    
    <div className='case_study__text-wrap'>
        <div className='case-study__labels-wrap'>
        <LabelSmall labelText={ProjectLabelText1}/>
        <LabelSmall labelText={ProjectLabelText2}/>
        </div>
        <p className='case_study__text-text'>{ProjectText}
        </p>
        <DetailsButton
        ButtonLink={ProjectExternalLink}
        ButtonText = {"Visitar la web"}
        />
    </div>
    <div className='case_study__image-wrap'>
        <Image src={ProjectFourthImage}/>
    </div>  
    <div className='case_study__text-wrap'>
        <h2 className='case_study__heading'>{ProjectHeading}</h2>
    </div>

        </>
    )
}


function Posts() {
    const [post, setPost] = useState([])
    const [isCompleted, setIsCompleted] = useState(false)
    const [index, setIndex] = useState(4)
    const initialPosts = slice(post, 0, index)
    const getData = () => {
      fetch('data/posts.json',
      {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
        .then((res) => res.json())
        .then((json) => setPost(json))
        .catch((e) => console.log(e))
    }
    const loadMore = () => {
      setIndex(index + 3)
      if (index >= post.length-1) {
        setIsCompleted(true)
      } else {
        setIsCompleted(false)
      }
    }
    useEffect(() => {
      getData()
    }, [])

    return (
        <>
  
        {initialPosts.map((item) => {
          return (
            <div key={item.ProjectId} className="project_preview__item-wrap fade-in">
            <h2 className="project_preview_title">{item.ProjectPreviewTitle}</h2>  
            <div className="project_preview_labels-wrap">
                <LabelSmall labelText = {item.ProjectPreviewLabelText1}/>
                <LabelSmall labelText = {item.ProjectPreviewLabelText2}/>
            </div>
            <div className="project_preview_img secondary">
                <Image className="image" width={300} height={180} src= { item.ProjectPreviewImage}/>
            </div>
            </div>
          )
        })}
        <>

        <div className="project_preview__button-container">
          {isCompleted ? (
            <span></span>
          ) : (
            <button onClick={loadMore} type="button" className="btn">
             <Image src={iconPlus}/> Cargar más
            </button>
          )}
        </div>
        </>
  
      </>
    )
  }

export { Project, Posts };