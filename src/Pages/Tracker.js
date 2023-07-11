import Contact from '../Components/ContactComponent/Contact';
import TopBar from '../Components/TopBar/TopBar';

import './Tracker.css'

import image1 from '../img/tracker/1.png';
import image2 from '../img/tracker/2.png';
import image3 from '../img/tracker/3.png';
import image4 from '../img/tracker/4.png';
import image5 from '../img/tracker/5.png';
import image6 from '../img/tracker/6.png';
import image7 from '../img/tracker/7.png';
import wallet from '../img/tracker/wallet.png';


import playStore from '../logo/playStore.jpg'
import appStore from '../logo/appStore.png'


function Tracker() {
  return (
    <div className="AppBC">
      <TopBar />
      <div className="appContainer">

        <div className='description'>
            <h1>Tracker Wallet</h1>
            <p>Hemen İndir🌟</p>
        </div>


        <div className='images'>
            <img src={wallet} alt="404" />
        </div>

        <div className="linkItem">
                <a className='l_icon' href='https://apple.co/3Gxs6OQ'> <img href="/" className='l_icon_image' src={appStore} alt='PlayStore'/></a>        
                <a className='l_icon' href='http://bit.ly/3vrzS6a'> <img href="/" className='l_icon_image' src={playStore} alt='PlayStore'/></a>
        </div>


        
     
        </div>
      <Contact />
    </div>
  );
}
//<img href="/" className='l_icon' src={appStore} alt='AppStore'/>
export default Tracker;
