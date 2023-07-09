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

import playStore from '../logo/playStore.jpg'
import appStore from '../logo/appStore.png'


function Tracker() {
  return (
    <div className="App">
      <TopBar />
      <div className="appContainer">

        <div className='description'>
            <h1>Tracker Wallet</h1>
            <p>Tracker Wallet, dijital cüzdanınızı yönetmenizi ve harcamalarınızı kaydetmenizi kolaylaştıran bir uygulamadır. Bu uygulama sayesinde, harcama için hedef belirleyebilir, kişisel para yönetiminizi düzenleyebilir, taksitli harcamalarınızı kaydedebilir ve bütçe oluşturarak, harcamalarınızı daha iyi yönetebilirsiniz. 🤩Tracker Wallet, tüm bu özellikleri sunarak, sizlere daha iyi bir para yönetimi sağlar. Uygulamayı indirin ve dijital cüzdanınızı yönetmeyi daha kolay hale getirin.🌟</p>
        </div>


        <div className='images'>
            <img src={image1} alt="404" />
            <img src={image2} alt="404" />
            <img src={image3} alt="404" />
            <img src={image4} alt="404" />
            <img src={image5} alt="404" />
            <img src={image6} alt="404" />
            <img src={image7} alt="404" />

        </div>

        <div className="linkItem">
                <a className='l_icon' href=''> <img href="/" className='l_icon_image' src={playStore} alt='PlayStore'/></a>
                <a className='l_icon' href=''> <img href="/" className='l_icon_image' src={appStore} alt='PlayStore'/></a>

                
        </div>


        
     
        </div>
      <Contact />
    </div>
  );
}
//<img href="/" className='l_icon' src={appStore} alt='AppStore'/>
export default Tracker;
