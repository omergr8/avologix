import classes from "./Best.module.css";
import Card from "./Components/Card";
const Best = () => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.heading}>
          <h2>Why We Are Best ?</h2>
        </div>
        <Card />
      </div>
    </div>
  );
};
export default Best;
