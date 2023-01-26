import './AboutUs.css'
import Member1 from '../../img/img.jpeg';
import Member2 from '../../img/Ahmet.jpeg';

const omerLinkedin=() =>{
// eslint-disable-next-line no-restricted-globals
  location.href="https://www.linkedin.com/in/huseyinomerguray/";
}
const omerTwitter=() =>{
  // eslint-disable-next-line no-restricted-globals
    location.href="https://mobile.twitter.com/hsynmrgry";
}
const omerInstagram=() =>{
  // eslint-disable-next-line no-restricted-globals
    location.href="https://www.instagram.com/huseyinomerguray/";
}
const omerGithub=() =>{
  // eslint-disable-next-line no-restricted-globals
    location.href="https://github.com/zeldox258";
}

const ahmetLinkedin=() =>{
// eslint-disable-next-line no-restricted-globals
  location.href="https://www.linkedin.com/in/ahmetkaradag/";
}
const ahmetTwitter=() =>{
  // eslint-disable-next-line no-restricted-globals
    location.href="https://twitter.com/ahmetikrdg";
}
const ahmetInstagram=() =>{
  // eslint-disable-next-line no-restricted-globals
    location.href="https://www.instagram.com/ahmetikrdg/";
}
const ahmetGithub=() =>{
  // eslint-disable-next-line no-restricted-globals
    location.href="https://github.com/ahmetikrdg";
}



export default function AboutUs() {
  return (
    <div id="AboutUs">
        <h1 className='model-title'>FOUNDERS</h1>
        <div className="members">
          <div className="member">
            <img width={400} height={400} src={Member1}/>
            <div className="description">
                <h1>Huseyin Omer Guray</h1>
                <h2>FullStack Developer</h2>


            </div>
            <div className="button">
                <button onClick={omerLinkedin} data-aos='flip-right'>Linkedin</button>
                <button onClick={omerGithub} data-aos="zoom-out">GitHub</button>
                <button onClick={omerInstagram} data-aos='flip-left'>Instagram</button>
                <button onClick={omerTwitter} data-aos='flip-left'>Twitter</button>

            </div>
          </div>
          <div className="member">
            <img width={400} src={Member2}/>
            <div className="description">
                <h1>Ahmet Karadag</h1>
                <h2>FullStack Developer</h2>
            </div>

            <div className="button">
                <button onClick={ahmetLinkedin} data-aos='flip-right'>Linkedin</button>
                <button onClick={ahmetGithub} data-aos="zoom-out">GitHub</button>
                <button onClick={ahmetInstagram} data-aos='flip-left'>Instagram</button>
                <button onClick={ahmetTwitter} data-aos='flip-left'>Twitter</button>

            </div>
          </div>

        </div>
    </div>
  );
}
