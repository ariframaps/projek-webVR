import "aframe";
import "aframe-particle-system-component";
import "aframe-event-set-component";
import { useNavigate } from "react-router";

const MenujuJembatan = () => {
  const navigate = useNavigate();

  function handleToJembatan() {
    navigate("/tengah-jembatan");
  }

  function handleToSampingJembatan() {
    navigate("/samping-jembatan");
  }

  function handleToSetelahJembatan() {
    navigate("/setelah-jembatan");
  }

  return (
    <>
      <a-scene>
        <a-sky src="/gopro/GS__1573_1731301416230.JPG"></a-sky>
        <a-camera wasd-controls="enabled: false">
          <a-cursor color="red"></a-cursor>
        </a-camera>

        <a-entity
          position="-1.3 1 0.9"
          rotation="0 100 0"
          text="
            value: Jembatan; 
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
          onClick={handleToJembatan}
        />

        <a-entity
          position="-1.3 1 -0.7"
          rotation="0 70 0"
          text="
            value: Samping Jembatan; 
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
          onClick={handleToSampingJembatan}
        />

        <a-entity
          position="-1.3 .5 0"
          rotation="0 90 0"
          text="
            value: Terus; 
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
          onClick={handleToSetelahJembatan}
        />
      </a-scene>
    </>
  );
};

export default MenujuJembatan;
