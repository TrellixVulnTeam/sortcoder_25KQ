import React from "react";
import animation from "./70239-morphing-loading-animation.json";
import Lottie from "react-lottie";
export default function Loader(params) {
  return (
    <>
      <div
        style={{
          position: "relative",
          // backgroundColor: "#1abc9c",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animation,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          height={200}
          width={200}
        />
      </div>
    </>
  );
}
