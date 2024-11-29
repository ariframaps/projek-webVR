import "aframe";
import "aframe-particle-system-component";
import "aframe-event-set-component";
const PintuMasuk = () => {
  function handleEntityClick() {
    location.href = "/";
  }

  return (
    <>
      <a-scene>
        <a-sky src="/gopro/GS__1571_1731301416230.JPG"></a-sky>
        <a-camera>
          <a-cursor color="red"></a-cursor>
        </a-camera>

        <a-entity
          position=".4 1 -2"
          rotation="0 -20 0"
          text="
                value: Mulai Tour; 
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

export default PintuMasuk;
