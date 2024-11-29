import "aframe";
import "aframe-particle-system-component";
import "aframe-event-set-component";
import Navigation from "../components/Navigation";
import { useState } from "react";

const TamanHortensia = () => {
  const [showInfo, setShowInfo] = useState(false);
  const hortensiaInfo =
    "Bunga Hortensia adalah bunga yang termasuk dalam keluarga Hydrangeaceae yang dikenal dengan bentuknya yang indah dan warna bunganya yang bervariasi.\n\n Bunga ini bisa tumbuh dengan ketinggian mencapai 1 meteran. Ada beberapa warna untuk bunga  Hortensia, ada warna biru, ada warna pink, ada warna putih, dan juga ada warna ungu.\n\nOh iyaa pH tanah mempengaruhi warna bunga Hortensia lohh. Pada tanah yang bersifat asam (pH rendah), ketersediaan ion aluminium meningkat, yang menyebabkan bunga hortensia berubah menjadi biru. Sebaliknya, pada tanah dengan pH yang lebih tinggi (bersifat basa), bunga Hortensia akan cenderung berwarna pink, karena ketersediaan aluminium berkurang. Oleh karena itu, pengaturan pH tanah menjadi salah satu cara untuk mengubah warna bunga hortensia sesuai keinginan.";

  return (
    <>
      <a-scene>
        <a-sky src="/gopro/GS__1591_1731301416230.JPG"></a-sky>
        <a-camera wasd-controls="enabled: false">
          <a-cursor color="red"></a-cursor>
        </a-camera>

        <a-entity
          position=".5 1 -1.8"
          rotation="0 -20 0"
          text={`
            value: ${showInfo ? "Tutup" : "Hortensia"}; 
            color: black; 
            align: center; 
            width: 2;`}
          geometry="primitive: plane; height: .2; width: .6"
          material="color: #ffffff;"
          event-set__satu="
            _event:mouseleave;
            material.color:#ffffff;"
          event-set__dua="
            _event:mouseenter;
            material.color:#00aa00;"
          onClick={() => setShowInfo(!showInfo)}
        />

        {showInfo && (
          <>
            <a-entity
              position="-1.1 1.4 -3"
              rotation="0 20 0"
              text={`
              value: ${hortensiaInfo}; 
              color: black; 
              align: start; 
              width: 2;`}
              geometry="primitive: plane; height: 2.5; width: 2.5"
              material="color: #ffffff;"
            />
            <a-image
              position="-3 1.4 -1.8"
              rotation="0 50 0"
              src="/hortensia.png"
              height="2.1"
              width="2.1"></a-image>
          </>
        )}

        <Navigation
          position="-0.6 1 -0.9"
          rotationZ="90"
          navigateTo={"/lapangan"}
        />
        <Navigation
          position="0.3 1 -0.9"
          rotationZ="-90"
          navigateTo={"/menuju-taman-hortensia"}
        />
      </a-scene>
    </>
  );
};

export default TamanHortensia;
