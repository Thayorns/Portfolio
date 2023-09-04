import Header from '../header/header'
import Content from '../content/content'
import Footer from '../footer/footer'
import  { useState } from 'react'

import './App.css';

const App = () => {

  const [menuActive, setMenuActive] = useState(false)

  return (
    <div className="App">
      <Header menuActive={menuActive} setMenuActive={setMenuActive}/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
 