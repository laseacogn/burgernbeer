import React from 'react'
import { icons } from '../../utils/icons';





//Footer
const Footer = () => {
  return (
    <div id="footer">
      <div style={{ width: '1200px', height:'220px', margin: '10px auto', position: 'relative', backgroundColor:'black',  color: '#FFFFFF', }} >
        <div>
          <div>
             <p style={{width:'400px', paddingTop:'9px',marginLeft:'0px',fontFamily: '"inter", sans-serif', fontWeight: 'bold', fontSize: '30px', textAlign: 'center', color: 'white'}}> BURGER N' BEER</p>
          </div>
          <div style={{ marginTop: '-48px', marginLeft:'60px',float: 'left', width:'250px', height:'180px' }}>
            <img src={require(`./web_logo.png`)} alt=""/>
          </div>
        </div>
        <div style={{ marginTop:'-6px', width: '780px', float: 'right', lineHeight: '20px', marginRight:'40px'}}>
          <div>
            <ul style={{ width:'1000px', float: 'left', padding: '10px 15px 0 0', margin: '0 15px 0 0', color: '#e0e0e0', fontFamily: '"inter", sans-serif', fontWeight: 'bold', fontSize: '15px' , display:'flex' }}>
            <li style={{ paddingLeft: '0', important: true, borderRight: '1px solid #646464', marginRight: '40px', paddingRight:'40px' }}>SILICON2 CO.,LTD - STYLE</li>
            <li style={{borderRight: '1px solid #646464',  marginRight: '40px', paddingRight:'40px'}}>CEO Pham Yen Ngoc</li>
            <li style={{ borderRight: '0', important: true }}>Business Licence No. 214-87-03359</li>
          </ul>
          </div>
          <p style={{  float: 'left', padding: '12px 15px 0 0', margin: '0 15px 0 0', color: '#e0e0e0', fontFamily: '"inter", sans-serif', fontWeight: 'bold', fontSize: '15px' , display:'flex' }}>#907, Phase S. H-SQUARE, 680 Sampyeong-Dong, Bundang-Gu, Seongnam-City, Gyeonggi-Do, Korea</p>
          
          <div style={{  float: 'left', padding: '12px 15px 0 0', margin: '0 15px 0 0', color: '#e0e0e0', fontFamily: '"Inter", sans-serif', fontWeight: 'bold', fontSize: '15px' , display:'flex' }}>Copyright © Since 2024           All Rights Reserved.</div>

          <div style={{ float: 'left', padding: '0 15px 0 0',margin: '0 15px 0 0', display:'flex' }}>
          <div style={{display:'flex', padding: '0 15px 0 0',margin: '50px 15px 0 -345px'}}>
            <li style={{display: 'inline-block', marginRight: '10px', fontSize: '25px'}}>
              <a href="https://www.facebook.com/BurgerNBeerDanang">
                <icons.BsInstagram />
              </a>
            </li>
            <li style={{display: 'inline-block', marginRight: '10px', fontSize: '30px'}}>
              <a href="https://www.facebook.com/BurgerNBeerDanang">
                <icons.AiOutlineFacebook />
              </a>
            </li>
            <li style={{display: 'inline-block', marginRight: '10px', fontSize: '25px'}}>
              <a href="https://www.facebook.com/BurgerNBeerDanang">
                <icons.BsTwitter />
              </a>
            </li>
            <li style={{display: 'inline-block', marginRight: '10px', fontSize: '30px'}}>
              <a href="https://www.facebook.com/BurgerNBeerDanang">
                <icons.AiOutlineYoutube />
              </a>
            </li>
          </div>
            
          </div>
        </div>
        <div style={{ clear: 'both' }}></div>
      </div>
    </div>
  );
};

export default Footer;


