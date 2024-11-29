import "aframe";
import "aframe-particle-system-component";
import "aframe-event-set-component";
import { useNavigate } from "react-router";

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

        <a-entity
          position="1.3 1 0"
          rotation="0 -90 0"
          text="
            value: Naik; 
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
          onClick={handleToJalan}
        />

        <a-entity
          position="0 0 -2"
          rotation="0 0 0"
          text="
            value: Kembali; 
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
          onClick={handleToMenujuJembatan}
        />
      </a-scene>
    </>
  );
};

export default SetelahJembatan;
