import Header from '../header/header'
import Content from '../content/content'
import Footer from '../footer/footer'
import { Layout } from 'antd'

import './App.css'

const App = () => {
  return (
    <Layout className='layout'>
      <Header/>
      <Content/>
      <Footer/>
    </Layout>
  )
}

export default App
