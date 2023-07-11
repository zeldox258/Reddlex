import Contact from '../Components/ContactComponent/Contact';
import TopBar from '../Components/TopBar/TopBar';

import './ReddlexAi.css'
import image1 from '../img/reddlexai/1.png';
import image2 from '../img/reddlexai/2.png';
import image3 from '../img/reddlexai/3.png';
import image4 from '../img/reddlexai/4.png';
import image5 from '../img/reddlexai/5.png';
import image6 from '../img/reddlexai/6.png';
import image7 from '../img/reddlexai/7.png';
import image8 from '../img/reddlexai/8.png';
import logo from '../img/reddlexai/logo.png';

import playStore from '../logo/playStore.jpg'
import appStore from '../logo/appStore.png'


function ReddlexAi() {
  return (
    <div className="App">
      <TopBar />
      <div className="appContainer">

        <div className='description'>
            <h1>Reddlex AI</h1>
            <p>Hemen indir</p>
        </div>


        <div className='images'>

            <img src={logo} alt="404" />

        </div>

        <div className="linkItem">
                <a className='l_icon' href='https://apps.apple.com/us/app/benim-tercihim-reddlex-ai/id6450606380?platform=iphone'> <img href="/" className='l_icon_image' src={appStore} alt='PlayStore'/></a>
                <a className='l_icon' href='https://play.google.com/store/apps/details?id=reddlexai.com'> <img href="/" className='l_icon_image' src={playStore} alt='PlayStore'/></a>
                
        </div>


        
     
        </div>
      <Contact />
    </div>
  );
}
//<img href="/" className='l_icon' src={appStore} alt='AppStore'/>
export default ReddlexAi;
