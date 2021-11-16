import React from "react";
import lottie from "lottie-web";
import animationData from "./lf30_ecuxx2fb.json"

export default function Logo() {
    React.useEffect(() => {
        lottie.loadAnimation({
          container: document.querySelector("#logo"),
          loop:false,
          animationData,
        });
      }, []);
    
return (
    <div>
      <div id="logo" style={{ width: 200, height: 80 }} />
    </div>
  );
}