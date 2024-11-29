import "aframe";
import "aframe-particle-system-component";
import "aframe-event-set-component";
import Navigation from "../components/Navigation";

const MenujuJembatan = () => {
  return (
    <>
      <a-scene>
        <a-sky src="/gopro/GS__1573_1731301416230.JPG"></a-sky>
        <a-camera wasd-controls="enabled: false">
          <a-cursor color="red"></a-cursor>
        </a-camera>

        <Navigation
          position="-1.2 .5 .4"
          rotationZ="180"
          navigateTo={"/tengah-jembatan"}
        />

        <Navigation
          position="-1.2 .5 -0.3"
          rotationZ="0"
          navigateTo={"/samping-jembatan"}
        />

        <Navigation
          position="-1.5 .5 0.05"
          rotationZ="90"
          navigateTo={"/setelah-jembatan"}
        />
      </a-scene>
    </>
  );
};

export default MenujuJembatan;
