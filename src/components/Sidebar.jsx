import { faFacebook, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faGears, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

import Logo from '../assets/images/logo.png'

const Sidebar = () => {
  return (
    <NavBarContainer>
      <Link to='/portfolio-react'>
        <img src={Logo} alt='logo alezaby' />
        <span>Alezaby</span>
      </Link>
      <Nav>
        <NavLink
          to='/portfolio-react'
          exact='true'
          activeclassname='active'
          className='home_link'
        >
          <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
        </NavLink>
        <NavLink
          to='about'
          exact='true'
          activeclassname='active'
          className='about_link'
        >
          <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
        </NavLink>
        <NavLink
          to='skills'
          exact='true'
          activeclassname='active'
          className='skills_link'

        >
          <FontAwesomeIcon icon={faGears} color='#4d4d4e' />
        </NavLink>
        <NavLink
          to='contact'
          exact='true'
          activeclassname='active'
          className='contact_link'
        >
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
        </NavLink>
        <NavLink
          to='projects'
          exact='true'
          activeclassname='active'
          className='projects_link'
        >
          <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e' />
        </NavLink>
      </Nav>
      <SocialLink>
        <li>
          <Link to="https://googel" target='_blank'>
            <FontAwesomeIcon icon={faLinkedinIn} color='#4d4d4e' />
          </Link>
        </li>
        <li>
          <Link to="https://googel" target='_blank'>
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
          </Link>
        </li>
        <li>
          <Link to="https://googel" target='_blank'>
            <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
          </Link>
        </li>
        <li>
          <Link to="https://googel" target='_blank'>
            <FontAwesomeIcon icon={faFacebook} color='#4d4d4e' />
          </Link>
        </li>
      </SocialLink>
    </NavBarContainer>
  )
}

const NavBarContainer = styled.div`
  height: 100%;
  width: 60px;
  background: #181818;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 500px;
  z-index: 5;

  a{
    padding: 8px 0;
    text-decoration: none;
    
    span{
      position: relative;
      top: -10px;
      font-size: 15px;
      font-family: 'Coolvetica';
      color: #fff;
      margin: 0 5px;
    }

    img{
      width: 60px;
      margin: 8px 0;
    }
  }
`
const Nav = styled.div`
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  height: 210px;
  width: 100%;
  text-align: center;

  a{
    display: block;
    font-size: 22px;
    color: #4d4d4e;
    line-height: 51px;
    height: 40px;
    position: relative;
    text-decoration: none;

    i{
      transition: all 0.3s ease-out;
    }

    &:hover{
      color: #6e57e0;

      svg{
        opacity: 0;
      }
      &:after{
        opacity: 1;
      }
    }

    &::after{
      content: '';
      position: absolute;
      bottom: 0;
      font-size: 9px;
      text-align:center ;
      opacity: 0;
      width: 100%;
      letter-spacing: 2px;
      display: block;
      transition: all 0.3s ease-out;
    }

  }

  a.home_link{
    &::after{
      content: 'HOME';
    }
  }
  a.about_link{
    &::after{
      content: 'ABOUT';
    }
  }
  a.skills_link{
    &::after{
      content: 'SKILLS';
    }
  }
  a.contact_link{
    &::after{
      content: 'CONTACT';
    }
  }
  a.projects_link{
    &::after{
      content: 'Projects';
    }
  }

  a.active{
    svg{
      color: #6e57e0;
    }
  }
`
const SocialLink = styled.ul`
  position: absolute;
  bottom: 20px;
  text-align: center;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;

  li{
    a{
      text-decoration: none;
      font-size: 15px;
      padding: 7px 0;
      line-height: 16px;
      display: block;

      &:hover{
        svg{
          color: #6e57e0;
        }
      }
    }
  }
  
`

export default Sidebar