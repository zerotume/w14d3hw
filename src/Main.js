import { useEffect, useState } from "react";

const Main = () => {
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("UseEffect1 Rannnn");
  }, []);
  useEffect(() => {
    console.log("UseEffect2 Ran");
    if (toggleTwo)
      console.log("toggleTwo slice of state is true so this code runs");
  }, [toggleTwo]);
  let myInterval;
  useEffect(() => {
    myInterval = setInterval(() => {
      console.log(`UseEffect3 with interval number ${count} is running`);
    }, 1000);
  }, [count]);

  return () => {
    console.log(
      `UseEffect3 cleanup ran.\nsetInterval number ${count} is being cleared out`
    );
    clearInterval(myInterval);
  };
};

export default Main;
