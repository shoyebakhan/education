import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import Nav from './nav/Nav';
import Heropage from './heropage/Heropage.jsx';
import Footer from './footer/Footer.jsx';
import Teamjobs from './team/Teamjobs';

const Index = () => {
  return (
    <div>
      <Nav />
      <Heropage />
      <Teamjobs />
      <Footer />
    </div>
  )
}

export default Index
