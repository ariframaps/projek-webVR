import "aframe";
import "aframe-particle-system-component";
import "aframe-event-set-component";
import Navigation from "../components/Navigation";

const PintuMasuk = () => {
  return (
    <>
      <a-scene>
        <a-sky src="/gopro/GS__1571_1731301416230.JPG"></a-sky>
        <a-camera wasd-controls="enabled: false">
          <a-cursor color="red"></a-cursor>
        </a-camera>

        <Navigation
          position="-1 1 -0.2"
          rotationZ="90"
          direction="up"
          navigateTo={"/menuju-jembatan"}
        />

        <Navigation
          position=".7 1 -0.7"
          rotationZ="-40"
          direction="up"
          navigateTo={"/"}
        />
      </a-scene>
    </>
  );
};

export default PintuMasuk;
