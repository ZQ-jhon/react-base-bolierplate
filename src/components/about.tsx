import React, { useState } from "react";

export const About = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>{count}</h3>
      <button onClick={() => setCount(count + 1)}>
        +click me to increament
      </button>
      About detail
    </div>
  );
};
