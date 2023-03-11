import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoTitle from '../assets/images/logo.png'

const Home = () => {
  return (
    <HomePage className='container'>
      <TextZone>
        <h1>
          Hi, <br /> I’m
          mahmoud
          <img src={LogoTitle} alt='Alezbay' />
          lezaby,
          <br />
          Web developer.
        </h1>
        <h2>Frontend developer / JavaScript Expert / React.Js </h2>
        <Link to='contact' className='btn'>CONTACT ME</Link>
      </TextZone>
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
    animation: fadeIn 1s 1.8s backwards;
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