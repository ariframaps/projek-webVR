import "aframe";
import "aframe-particle-system-component";
import "aframe-event-set-component";
import { useNavigate } from "react-router";

const Lapangan = () => {
  const navigate = useNavigate();

  function handleEntityClick() {
    navigate("/");
  }

  return (
    <>
      <a-scene>
        <a-sky src="/gopro/GS__1596_1731301416230.JPG"></a-sky>
        <a-camera wasd-controls="enabled: false">
          <a-cursor color="red"></a-cursor>
        </a-camera>

        <a-entity
          position="-1.3 1 -0.7"
          rotation="0 70 0"
          text="
            value: Terimakasih :); 
            color: black; 
            align: center; 
            width: 2.5;"
          geometry="primitive: plane; height: .3; width: 1"
          material="color: #ffffff;"
          event-set__satu="
            _event:mouseleave;
            material.color:#ffffff;"
          event-set__dua="
            _event:mouseenter;
            material.color:#00aa00;"
          onClick={handleEntityClick}
        />
      </a-scene>
    </>
  );
};

export default Lapangan;
