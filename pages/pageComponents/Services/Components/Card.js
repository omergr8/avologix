import classes from "../Services.module.css";
import Image from "next/image";
import service1 from "../../../../public/service1.svg";
import service2 from "../../../../public/service2.svg";
import service3 from "../../../../public/service3.svg";
import service4 from "../../../../public/service4.svg";
const data = [
  {
    heading: "Web Development",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempo",
    imageLink: service1,
  },
  {
    heading: "App Development",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempo",
    imageLink: service2,
  },
  {
    heading: "Graphic Designer",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempo",
    imageLink: service3,
  },
  {
    heading: "UIUX Designing",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempo",
    imageLink: service4,
  },
];
const Card = () => {
  return (
    <div>
      <div className={classes.cardMain1}>
        {data.map((dt, i) => (
          <div className={classes.cardMain} key={i}>
            <div className={classes.cardContainer}>
              <div className={classes.cardLogo}>
                <Image src={dt.imageLink} alt="web" />
              </div>
              <div className={classes.absouluteThings}>
                <div className={classes.cardDotOuter}>
                  <div className={classes.cardDot} />
                </div>
              </div>
              <div className={classes.cardText}>
                <h2>{dt.heading}</h2>
                <p>{dt.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Card;
