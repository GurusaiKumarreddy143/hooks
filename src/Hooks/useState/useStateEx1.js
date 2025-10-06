import React, { useState } from "react";
import { Button } from "@mui/material";

const UseState1 = () => {
  let [count, setCount] = useState(0);

  const handleIncrement = () => {
    // setCount(count + 1);
    setCount((prevCount)=>{
        return prevCount+1
    })
        setCount((prevCount)=>{
        return prevCount+1
    })
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  // ✅ Decide color based on condition
  let countColor = "orange"; // default
  if (count > 0) {
    countColor = "green";
  } else if (count < 0) {
    countColor = "red";
  }

  return (
    <div>
      <div>hello</div>

      <Button
        sx={{ background: "red", color: "white", fontSize: "20px", marginRight: "30px" }}
        onClick={handleDecrement}
      >
        -
      </Button>

      {/* Apply dynamic color here */}
      <span style={{ color:"blue" }} >
        count: <span style={{ color: countColor }}>{count}</span>
      </span>

      <Button
        sx={{ background: "green", color: "white", fontSize: "20px", marginLeft: "30px" }}
        onClick={handleIncrement}
      >
        +
      </Button>
    </div>
  );
};

export default UseState1;
