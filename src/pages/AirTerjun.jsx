import "aframe";
import "aframe-particle-system-component";
import "aframe-event-set-component";
import Navigation from "../components/Navigation";

const AirTerjun = () => {
  return (
    <>
      <a-scene>
        <a-sky src="/gopro/GS__1585_1731301416230.JPG"></a-sky>
        <a-camera wasd-controls="enabled: false">
          <a-cursor color="red"></a-cursor>
        </a-camera>

        <Navigation
          position="1.4 1 -0.1"
          rotationZ="-45"
          navigateTo={"/menuju-air-terjun"}
        />

        <Navigation
          position="1.1 1 .7"
          rotationZ="180"
          navigateTo={"/menuju-taman-hortensia"}
        />
      </a-scene>
    </>
  );
};

export default AirTerjun;
