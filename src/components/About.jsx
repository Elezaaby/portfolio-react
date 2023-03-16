import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import AnimationLetter from './AnimationLetter';
import {  faBootstrap, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  const aboutArray = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']
  const [classLetter, setClassLetter] = useState('text_animation')


  useEffect(() => {
    setTimeout(() => {
      setClassLetter('text_animation_hover')
    }, 3000);
  }, [])

  return (
    <AboutPage className='container'>
      <TextZone>
        <h1>
          <AnimationLetter array={aboutArray} classLetter={classLetter} index={15} />
        </h1>
        <p>
          I'm a very ambitious front-end developer looking for a role in an
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
        </p>
        <p>
          I'm quiet confident, naturally curious, and perpetually working on
          improving my chops one design problem at a time.
        </p>
        <p>
          If I need to define myself in one sentence that would be a family
          person, father of a beautiful daughter, a sports fanatic,
          photography enthusiast, and tech-obsessed!!!
        </p>
      </TextZone>

      <Cube>
        <Spinner>
          <div className="face1">
            <FontAwesomeIcon icon={faBootstrap} color="#0c6991" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </Spinner>
      </Cube>
    </AboutPage>
  )
}
const AboutPage = styled.div`

`
const TextZone = styled.div`
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
  width: 40%;
  max-height: 90%;
  

  h1{
    color: #6e57e0;
    font-size: 53px;
    margin: 0;
    font-family: 'Coolvetica';
    font-weight: 400;
    line-height: 53px;
    z-index: 5;
    position: relative;
    margin-bottom: 40px;
    left: -10px;

    &::before{
      content: '<h1>' ;
      font-family: "La Belle Aurore";
      font-size: 20px;
      color: #6e57e0;
      position: absolute;
      left: -20px;
      margin: -30px 0 0 0;
      opacity: 0.6;
    }
    
    &::after{
      content: '<h1/>' ;
      font-family: "La Belle Aurore";
      font-size: 20px;
      color: #6e57e0;
      position: absolute;
      left: -40px;
      bottom: -45px;
      opacity: 0.6;
      margin-left: 20px;
    }

    .text_animation_hover {
      &:hover {
        color: #fff;
      }
}

  }
  p {
    font-size: 13px;
    color: #fff;
    font-family: sans-serif;
    font-weight: 300;
    max-width: fit-content;
    animation: pulse 1s;

    &:nth-of-type(1) {
      animation-delay: 0.7s;
    }
    &:nth-of-type(2) {
      animation-delay: 0.8s;
    }
    &:nth-of-type(3) {
      animation-delay: 0.9s;
    }
  }

`
const Cube = styled.div`
  width: 50%;
  height: 100%;
  top: 0;
  padding-top: 18%;
  margin-left: 0;
  position: absolute;
  right: 0;
  overflow: hidden;
`
const Spinner = styled.div`
  animation-name: cubespin;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 12s;
  transform-style: preserve-3d;
  transform-origin: 100px 100px 0;
  margin-left: calc(50% - 100px);

  div {
    position: absolute;
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    background: rgba(255, 255, 255, 0.4);
    text-align: center;
    font-size: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 20px 0px lightyellow;
  }

  .face1 {
    transform: translateZ(100px);
    color: #dd0031;
  }
  .face2 {
    transform: rotateY(90deg) translateZ(100px);
    color: #f06529;
  }
  .face3 {
    transform: rotateY(90deg) rotateX(90deg) translateZ(100px);
    color: #28a4d9;
  }
  .face4 {
    transform: rotateY(180deg) rotateZ(90deg) translateZ(100px);
    color: #5ed4f4;
  }
  .face5 {
    transform: rotateY(-90deg) rotateZ(90deg) translateZ(100px);
    color: #efd81d;
  }
  .face6 {
    transform: rotateX(-90deg) translateZ(100px);
    color: #ec4d28;
  }


  @keyframes cubespin {
  to {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  16% {
    transform: rotateY(-90deg) rotateZ(90deg);
  }
  33% {
    transform: rotateY(-90deg) rotateX(90deg);
  }
  50% {
    transform: rotateY(-180deg) rotateZ(90deg);
  }
  66% {
    transform: rotateY(-270deg) rotateX(90deg);
  }
  83% {
    transform: rotateX(90deg);
  }
}

`
export default About