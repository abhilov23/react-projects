import {Route, Routes, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';

import {Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails }  from './components';
import './App.css';


function App() {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='main'>
         <Layout>
          <div className='routes'>
              <Routes> {/* setting up the routes of the application */}
              <Route exact path="/" element={<Homepage/>}/>
              <Route exact path="/exchanges" element={<Exchanges/>}/>
              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
              <Route exact path="/crypto/:coinId" element={<CryptoDetails/>} />
              <Route exact path="/news" element={<News/>}/>
            </Routes>
          </div>
         </Layout>
      <div className='footer' level={5} style={{color: 'white', textAlign: 'center'}}>
        <Typography.Title>
          Cryptoverse <br/>
          All rights reserved
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
