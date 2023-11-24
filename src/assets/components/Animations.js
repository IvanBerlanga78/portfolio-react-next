import React , {useEffect} from 'react';
import { animated, useSpring } from '@react-spring/web'
import { Player } from '@lottiefiles/react-lottie-player';
import logoAnimation from "../logo-animation.json";
import AnimatedDeskAnimation from "../animated-desk.json";




const Loader = () => {

        return (
            <Player
            className='loader-animation'
              autoplay={true}
              loop={true}
              controls={false}
              src={logoAnimation}
              style={{ height: '300px', width: '300px' }}
            ></Player>
        )

  };
  
function LoaderIntro () {

    return (
        <animated.div 
            className='loader-container'>
        <Loader className="centered"/>         
        </animated.div>
    )
}

  const AnimatedDesk = () => {

    return (
        <Player
          autoplay={true}
          loop={true}
          controls={false}
          src={AnimatedDeskAnimation}
          style={{ height: '400px', width: '100%' }}
        ></Player>
    )

};




export  {AnimatedDesk, LoaderIntro};

  