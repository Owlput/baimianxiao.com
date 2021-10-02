import React, { useState } from "react";
export function Heading() {
  const [bigp, setBigP] = useState([]);
  const initBigP = async () => {
    try {
      const result = await APIGet({ type: "getBigP", payload: "" });
      setBigP(result.thumbs);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    initBigP();
  }, []);

  return <div>
      <img></img>
  </div>;
}
