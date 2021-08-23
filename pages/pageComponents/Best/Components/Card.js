import classes from "../Best.module.css";
import Image from "next/image";
import card1 from "../../../../public/card1.svg";
import card2 from "../../../../public/card2.svg";
import card3 from "../../../../public/card3.svg";
const data = [
  {
    heading1: "100 %",
    heading2: "Client Satisfiction",
    imageLink: card1,
  },
  {
    heading1: "100+",
    heading2: "Projects Done",
    imageLink: card2,
  },
  {
    heading1: "3+ Years",
    heading2: "Experience",
    imageLink: card3,
  },
];
const Card = () => {
  return (
    <div>
      <div className={classes.cardMain}>
        {data.map((dt, i) => (
          <div className={classes.card} key={i}>
            <div className={classes.cardContainer}>
              <div className={classes.cardLogo}>
                <Image src={dt.imageLink} alt="card1" />
              </div>
              <h2>{dt.heading1}</h2>
              <h2>{dt.heading2}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Card;
