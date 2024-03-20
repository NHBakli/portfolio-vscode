import Link from "next/link";
import "../../style/home.css";

export default function HomePage() {
  return (
    <div className="containerHome">
      <div className="background">
        <h1>
          French <br />
          Developer
        </h1>
      </div>
      <div className="foreground">
        <div className="containerInfos">
          <h1 className="name">NHBakli</h1>
          <h6 className="bio">Full Stack Web Developer</h6>
          <Link href="projects">
            <button className="button">View Work</button>
          </Link>
          <Link href="contact">
            <button className="outlined">Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
