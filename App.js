import React, {Component} from 'react';
import flyspace from './flyspace.png';
import logo from './logo.png'
import './App.css';

class App extends Component {
  render(){
    return (
      <div>
        <div className='row mt-2 border mr-2'>
          <div className='col-sm-3 ml-5 mt-2'>
            <img src={flyspace} alt='logo'></img>
          </div>
   
            <div className='col-sm-2 p-3 mt-3 right1 text-center'>
              <h6 className>Tentang Kami</h6>
            </div>
            <div className='col-sm-3 mt-4 right'>
              <button type='button' className='btn btn-warning btn-sm'><img src='https://img.icons8.com/carbon-copy/2x/phone.png' alt='' className
              ='phone'></img>HUBUNGGI SEKARANG</button>
            </div>
          
        </div>
      
        
          <div className='row background justify-content-center'>
            
              <div className='container mt-5 justify-content-center'>
                <h2 className='h1 p-3'>Kami punya 738 ruang kerja fleksibel untuk mu di</h2> 
                <h1 className='h2 p-2'>JAKARTA</h1>
                <p className='h3 p-2'>FlySpace memiliki beratus-ratus pilihan ruang kerja fleksibel untuk anda 
                  pilih di Jakarta-jelajahi pilihanmu di platform #1 Asia Tenggara</p>
                <button type='button' className='btn btn-warning button btn-lrg'>JELAJAHI SEMUA TEMPAT DI JAKARTA</button>
              </div>
              </div>  
        
      
        <div className='container'>
          <div className='row justify-content-center p-2'>
            <img src={logo} alt='pic'className='pic'></img>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
