import Image from "next/image";
import Nav from "../../components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faFaceAngry, faPen, faServer } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div>
      <div className="container1">
        <div className="container1-title">
          <p>Unhappy with your website?</p>
          <h1>We create beautiful and fast web services</h1>
        </div>
        <img
          src="https://i.ibb.co/Fbj1WXT/hero-Image.jpg"
          alt="Hero-image"
          srcset=""
        />
        <div className="container1-card">
          <h1>Story, emotion and purpose</h1>
          <p>
            We help transform your ideas into real world applications that will
            outperform your toughest competition and help you achieve your
            strategic goals in short period of time.
          </p>
          <div className="container1-input-box">
            <p>Want us to contact you?</p>
            <div className="container1-input">
              <input type="text" placeholder="Email" />
              <button>Join</button>
            </div>
          </div>
        </div>
      </div>

           {/* CONTAINER - 2 3 CARDS          */}


      <div className="container2">
        <div className="container2-title">
          <h2>We offer high demand services </h2>
        </div>
        <div className="container2-cards">
          <div className="card card1">
            <FontAwesomeIcon icon={faPen} />
            <h3>UI/UX Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
              metus ac nulla consequat aliquet id quis turpis.
            </p>
            <button>Get started</button>
          </div>
          <div className="card card2">
            <FontAwesomeIcon icon={faCode} />
            <h3>Front End</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
              metus ac nulla consequat aliquet id quis turpis.
            </p>
            <button>Get started</button>
          </div>
          <div className="card card3">
            <FontAwesomeIcon icon={faServer} />
            <h3>Back End</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
              metus ac nulla consequat aliquet id quis turpis.
            </p>
            <button>Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
