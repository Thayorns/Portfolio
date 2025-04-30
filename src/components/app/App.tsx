import Header from '../header/header'
import Info from '../info/info';
import Content from '../content/content'
import Footer from '../footer/footer'
// import Hobbies from '../hobbies/hobbies';
import React, { useState } from 'react'
// import { VerticalAlignTopOutlined } from '@ant-design/icons';


import './App.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }    

  return (
    <div className="App">
      <Header toggleOpen={toggleOpen}
        isOpen={isOpen}
      />
      <Info/>
      <Content/>
      {/* <Hobbies/> */}
      <Footer/>
      
    </div>
  )
}

export default App
 