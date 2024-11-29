import "aframe";
import "aframe-particle-system-component";
import "aframe-event-set-component";
import Navigation from "../components/Navigation";

const MenujuAirTerjun = () => {
  return (
    <>
      <a-scene>
        <a-sky src="/gopro/GS__1583_1731301416230.JPG"></a-sky>
        <a-camera wasd-controls="enabled: false">
          <a-cursor color="red"></a-cursor>
        </a-camera>

        <Navigation
          position="1 1 0"
          rotationZ="-90"
          navigateTo={"/air-terjun"}
        />

        <Navigation
          position="-0.4 1 -0.7"
          rotationZ="0"
          navigateTo={"/jalan"}
        />
      </a-scene>
    </>
  );
};

export default MenujuAirTerjun;
