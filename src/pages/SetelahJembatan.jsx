import "aframe";
import "aframe-particle-system-component";
import "aframe-event-set-component";
import { useNavigate } from "react-router";
import Navigation from "../components/Navigation";

const SetelahJembatan = () => {
  const navigate = useNavigate();

  function handleToJalan() {
    navigate("/jalan");
  }

  function handleToMenujuJembatan() {
    navigate("/menuju-jembatan");
  }

  return (
    <>
      <a-scene>
        <a-sky src="/gopro/GS__1579_1731301416230.JPG"></a-sky>
        <a-camera wasd-controls="enabled: false">
          <a-cursor color="red"></a-cursor>
        </a-camera>

        <Navigation position="1 1 0.1" rotationZ="-90" navigateTo={"/jalan"} />

        <Navigation
          position="0 0.4 -1.2"
          rotationZ="0"
          navigateTo={"/menuju-jembatan"}
        />
      </a-scene>
    </>
  );
};

export default SetelahJembatan;
