import Header from '../header/header'
import Content from '../content/content'
import Footer from '../footer/footer'
import Hobbies from '../hobbies/hobbies';
// import  { useState } from 'react'
import { FloatButton } from 'antd';
// import { VerticalAlignTopOutlined } from '@ant-design/icons';


import './App.css';

const App = () => {
  

  return (
    <div className="App">
      <Header/>
      <Content/>
      <Hobbies/>
      <Footer/>
      <FloatButton.BackTop/>
    </div>
  )
}

export default App
 