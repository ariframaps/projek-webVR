import "aframe";
import "aframe-particle-system-component";
import "aframe-event-set-component";
import Navigation from "../components/Navigation";

const Jalan = () => {
  return (
    <>
      <a-scene>
        <a-sky src="/gopro/GS__1581_1731301416230.JPG"></a-sky>
        <a-camera wasd-controls="enabled: false">
          <a-cursor color="red"></a-cursor>
        </a-camera>

        <Navigation
          position="-1 1 -0"
          rotationZ="90"
          navigateTo={"/menuju-air-terjun"}
        />

        <Navigation
          position="1 1 -0"
          rotationZ="-90"
          navigateTo={"//setelah-jembatan"}
        />
      </a-scene>
    </>
  );
};

export default Jalan;
