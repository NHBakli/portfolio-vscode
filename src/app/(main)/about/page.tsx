import "../../../style/about.css";

export default function AboutPage() {
  return (
    <div className="containerAbout">
      <div className="imageFilter"></div>
      <div className="containertext">
        <div className="textWithImage">
          <div className="textContainer">
            <h3 className="presentation_text">
              My name is Bakli, I'm 19 years old, and I'm currently searching
              for an apprenticeship in Paris or Lille.
            </h3>
            <h3 className="presentation_text">
              I'm interested in the world of development in general, and I
              started learning development with Python.{" "}
            </h3>
            <h3 className="presentation_text">
              During my free time, I continue to enhance my skills by learning
              new languages or frameworks on my own.
            </h3>
            <h3 className="presentation_text">
              I fell in love with programming in 2020, and I would like to
              pursue an apprenticeship because it would allow me to gain
              experience and skills while advancing in my studies.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
