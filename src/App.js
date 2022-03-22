import logo from './logo.svg';
import './App.css';
import ImageInSrc from './imageInSrc.jpg';

function App() {
  return (
    <div>
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 class="title red">taha khiari</h1>
    <br />
    <img src={ImageInSrc} />
    <br />
    <img src='/imageInPublic.jpg' />
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</div>
  );
}

export default App;
