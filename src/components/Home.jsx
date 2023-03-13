import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoTitle from '../assets/images/logo.png'
import AnimationLetter from './AnimationLetter';
import LogoHome from './LogoHome';


const Home = () => {
  const [classLetter, setClassLetter] = useState('text_animation')
  const firstNameArray = ['m', 'a', 'h', 'm', 'o', 'u', 'd']
  const lastNameArray = ['l', 'e', 'z', 'a', 'b', 'y', ',']
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']


  useEffect(() => {
    setTimeout(() => {
      setClassLetter('text_animation_hover')
    }, 3000);
  }, [])

  return (
    <HomePage className='container'>
      <TextZone>
        <h1>
          <span className={`${classLetter} _10`}>H</span>
          <span className={`${classLetter} _11`}>i</span>
          <span className={`${classLetter} _12`}>,</span><br />
          <span className={`${classLetter} _13`}>I</span>
          <span className={`${classLetter} _14`}>’</span>
          <span style={{ marginRight: '20px' }} className={`${classLetter} _15`}>m</span>
          <AnimationLetter classLetter={classLetter} array={firstNameArray} index={16} />
          <img src={LogoTitle} alt='Alezbay' />
          <AnimationLetter classLetter={classLetter} array={lastNameArray} index={23} />
          <br />
          <AnimationLetter classLetter={classLetter} array={jobArray} index={30} />
        </h1>
        <h2>Frontend developer / JavaScript Expert / React.Js </h2>
        <Link to='contact' className='btn'>CONTACT ME</Link>
      </TextZone>
      <LogoHome />
    </HomePage>
  )
}

const HomePage = styled.div`

`
const TextZone = styled.div`
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
  width: 40%;
  max-height: 90%;

  h1{
    color: #fff;
    font-size: 53px;
    margin: 0;
    font-family: 'Coolvetica';
    font-weight: 400;
    line-height: 53px;
    z-index: 5;

    &::before{
      content: '<h1>' ;
      font-family: "La Belle Aurore";
      font-size: 20px;
      color: #6e57e0;
      position: absolute;
      left: -20px;
      margin: -40px 0 0 0;
      opacity: 0.6;
    }
    
    &::after{
      content: '<h1/>' ;
      font-family: "La Belle Aurore";
      font-size: 20px;
      color: #6e57e0;
      position: absolute;
      margin: 18px 0 0 20px;
      opacity: 0.6;
    }

    img{
      width: 50px;
      margin-left: 20px;
      height: auto;
      animation: rotateIn 1s linear both;
      animation-delay: 1.4s;
      position: relative;
      top: 10px;
    }
  }

  h2{
    color: #8d8d8d;
    margin-top: 20px;
    font-size: 11px;
    font-family: 'sans-serif';
    font-weight: 400;
    letter-spacing: 3px;
    animation: fadeIn 1s 3s backwards;
  }

  .btn{
    color: #6e57e0;
    font-weight: 400;
    font-size: 13px;
    font-family: 'sans-serif';
    letter-spacing: 4px;
    text-decoration: none;
    padding: 10px 18px;
    border: 1px solid #6e57e0;
    margin-top: 25px;
    float: left;
    animation: fodeInAnimation 1s 1.8s backwards;
    white-space: nowrap;
    transition: all 0.5s ease-out;

    &:hover{
      color: #333;
      background: #6e57e0;
    }
  }
`

export default Home