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
import playStore from '../logo/playStore.jpg'
import appStore from '../logo/appStore.png'


function ReddlexAi() {
  return (
    <div className="App">
      <TopBar />
      <div className="appContainer">

        <div className='description'>
            <h1>Reddlex Ai</h1>
            <p>Yapay Zeka Reddlex, üniversite seçiminde size rehberlik eden kişisel bir asistanınızdır! Kendinizi anlatın ve tercihlerinizi paylaşın, Reddlex size en uygun üniversite bölümlerini önerecektir. Sizleri en iyi anlayan yapay zeka algoritmasıyla çalışan Reddlex, hedeflerinizi belirlemenize, yeteneklerinizi değerlendirmenize ve geleceğinizi şekillendirecek doğru kararı vermenize yardımcı olur. Reddlex ile üniversite seçimi kolay ve keyifli hale gelirken, hayallerinize bir adım daha yaklaşın!</p>
        </div>


        <div className='images'>
            <img src={image1} alt="404" />
            <img src={image2} alt="404" />
            <img src={image3} alt="404" />
            <img src={image4} alt="404" />
            <img src={image5} alt="404" />
            <img src={image6} alt="404" />
            <img src={image7} alt="404" />
            <img src={image8} alt="404" />

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
export default ReddlexAi;
