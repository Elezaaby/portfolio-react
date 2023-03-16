import React from 'react'
import Sidebar from './Sidebar'
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Sidebar />
      <Page>
        <Tags>
          <span className='top_tags'>&lt;body&gt;</span>

          <Outlet />

          <span className='botton_tags'>
            &lt;/body&gt;
            <br />
            <span className='botton_tags_html'>&lt;/html&gt;</span>
          </span>
        </Tags>
      </Page>
    </>
  )
}

const Page = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`
const Tags = styled.div`
  .botton_tags,
  .top_tags{
    position: absolute;
    bottom: 0;
    left: 120px;
    color: #6e57e0;
    opacity: 0.6;
    font-size: 18px;
    font-family: 'La Belle Aurore';
  }
  .top_tags{
    bottom: auto;
    top: 35px;
  }
  .botton_tags_html{
    margin-left: -20px;
  }
`

export default Layout