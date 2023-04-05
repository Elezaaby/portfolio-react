import styled from 'styled-components';
import AnimationLetter from './AnimationLetter';
import { useEffect, useState } from 'react';
import noxe from '../assets/images/noxe.png'
import ecommerce from '../assets/images/ecommerce.png'
import todo from '../assets/images/todo.png'
import disney from '../assets/images/disney.png'
import socialapp from '../assets/images/socialapp.png'

const Portfolio = () => {
  const contactArray = ["P", "o", "r", "t", "f", "o", "l", "i", "o"];
  const [classLetter, setClassLetter] = useState("text_animation");

  const portfolio = [
    {
      "cover": noxe,
      "name": "Noxe movies",
      "url": "https://elezaaby.github.io/noxe"
    },
    {
      "cover": ecommerce,
      "name": "Ecommerce",
      "url": "https://weeb-ecommerce.netlify.app/"
    },
    {
      "cover": todo,
      "name": "Todo list",
      "url": "https://elezaaby.github.io/todo-lists/"
    },
    {
      "cover": disney,
      "name": "Disney plus",
      "url": "https://elezaaby.github.io/disney-plus/"
    },
    {
      "cover": socialapp,
      "name": "socialapp",
      "url": "https://elezaaby.github.io/socialapp/"
    },
  ]

  useEffect(() => {
    setTimeout(() => {
      setClassLetter("text_animation_hover");
    }, 3000);
  }, []);

  return (
    <PortfolioPage className='container'>
      <h1>
        <AnimationLetter
          array={contactArray}
          classLetter={classLetter}
          index={15}
        />
      </h1>

      <div className="projects">
        {portfolio.map((project) => (
          <div className="project">
            <img src={project.cover} alt="" />
            <div className="content">
              <h4>{project.name}</h4>
              <button onClick={() => window.open(project.url)}>View</button>
            </div>
          </div>
        ))}
      </div>
    </PortfolioPage>
  )
}

const PortfolioPage = styled.div`
  top: 10%;
  left: 10%;


  h1 {
    color: #6e57e0;
    font-size: 53px;
    margin: 0;
    font-family: "Coolvetica";
    font-weight: 400;
    line-height: 53px;
    z-index: 5;
    position: relative;
    margin-bottom: 40px;
    left: 30px;
    top: 20px;

    &::before {
      content: "<h1>";
      font-family: "La Belle Aurore";
      font-size: 20px;
      color: #6e57e0;
      position: absolute;
      left: -20px;
      margin: -30px 0 0 0;
      opacity: 0.6;
    }

    &::after {
      content: "<h1/>";
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

  .projects{
    padding: 30px 10px 10px 80px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    flex-direction: row;
    max-height: 80%;
    max-width: 80%;
    justify-content: flex-start;
    position: relative;


    &::before {
      content: "<div>";
      font-family: "La Belle Aurore";
      font-size: 20px;
      color: #6e57e0;
      position: absolute;
      left: 15px;
      margin: -25px 0 0 0;
      opacity: 0.6;
    }

    &::after {
      content: "<div/>";
      font-family: "La Belle Aurore";
      font-size: 20px;
      color: #6e57e0;
      position: absolute;
      left: 15px;
      bottom: -20px;
      opacity: 0.6;
      margin-bottom: 5px;
    }


    .project{
      width: 30%;
      border-radius: 10px;
      overflow: hidden;
      position: relative;

      img{
        width: 100%;
        object-fit: cover;
        height: 100%;
      }

      
      &:after {
        content: "";
        background: linear-gradient(180deg, #6e57e0, #000);
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        opacity: 0;
        }

        &:hover:after {
          opacity: 0.85;
        }

      .content{
        position: absolute;
        width: 100%;
        z-index: 300;
        padding: 10px 20px;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        background: linear-gradient(180deg,rgba(0, 0, 0, 0.2) 0,rgba(0, 0, 0, 1));
        bottom: -70px;

        h4{
          font-size: 14px;
          margin-bottom: 5px;
          color: #fff;
          font-weight: 700;
        }

        button{
          margin-top: 30px;
          margin-bottom: 10px;
          padding: 0 23px;
          height: 40px;
          line-height: 34px;
          border: 2px solid #6e57e0;
          border-radius: 4px;
          font-size: 14px;
          color: #fff;
          background: transparent;
          text-transform: uppercase;
          font-weight: 700;
          transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
          cursor: pointer;
        }
      }

      
      &:hover .content {
        bottom: 0;
        background: transparent;
      }
    }
  }
`

export default Portfolio