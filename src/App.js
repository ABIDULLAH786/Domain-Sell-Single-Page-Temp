import './App.css';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div>
      <div class="root" style={{ backgroundColor: "#e6f6ff" }} >
        <div class="bar" style={{ backgroundColor: "#7705ff" }} ></div>
        <div class="content" style={{ backgroundColor: "#edf0f4" }} >
          {/* Left Container */}
          <div class="box domain-box">
            <p class="text" style={{ color: "#29293e" }} >The domain name</p>
            <h1 class="title" style={{ color: "#29293e" }}>{process.env.REACT_APP_MYDOMAIN}</h1>
            <p class="text" style={{ color: "#29293e" }}>is currently for sale!</p>
            <p class="opensea-container">
              <a href={`mailto:${process.env.REACT_APP_MYEMAIL}?subject=I'm interested in purchasing the domain: ${process.env.REACT_APP_MYDOMAIN}`} title="Email Owner" target="_top">

                <button style={{ backgroundColor: "#7705ff", color: "#ffffff" }} class="contact-btn">
                  GET IN TOUCH
                </button>
              </a>
            </p>
          </div>
          {/* Right Container */}
          <div class="box">
            <div class="paper" style={{ backgroundColor: "#e6f6ff" }}>
              <p class="text bold" style={{ color: "#000000" }} >Details</p>
              <ul class="text">
                <li style={{ color: "#000000" }}>Make me an offer I can't refuse!</li>
                <li style={{ color: "#000000" }}>
                  No Renewal Fees - once the domain is yours, it's yours!
                </li>
              </ul>
              <p class="text bold" style={{ color: "#7705ff" }} >Contact Owner</p>
              <SocialLinks />
            </div>
          </div>
        </div>
        <div class="bar" style={{ backgroundColor: "#7705ff" }}></div>
      </div>
    </div>
  );
}

export default App;
