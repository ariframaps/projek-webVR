import "aframe";
import "aframe-particle-system-component";
import "aframe-event-set-component";
import Navigation from "../components/Navigation";

const MenujuTamanHortensia = () => {
  return (
    <>
      <a-scene>
        <a-sky src="/gopro/GS__1589_1731301554757.JPG"></a-sky>
        <a-camera wasd-controls="enabled: false">
          <a-cursor color="red"></a-cursor>
        </a-camera>

        <Navigation
          position="1 1 -0.3"
          rotationZ="-90"
          navigateTo={"/taman-hortensia"}
        />

        <Navigation
          position="-0.3 1 -1.1"
          rotationZ="45"
          navigateTo={"/air-terjun"}
        />
      </a-scene>
    </>
  );
};

export default MenujuTamanHortensia;
