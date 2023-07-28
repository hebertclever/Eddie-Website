import Image from "next/image";
import Nav from "../../components/Nav";

export default function Home() {
  return (
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
        <div className="container1-input">
          <p>Want us to contact you?</p>
          <div>
            <input type="text" />
            <button>Join</button>
          </div>
        </div>
      </div>
    </div>
  );
}
