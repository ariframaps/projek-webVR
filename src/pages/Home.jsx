import "aframe";
import "aframe-particle-system-component";
import "aframe-event-set-component";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  function handleEntityClick() {
    navigate("/pintu-masuk");
  }

  return (
    <>
      <a-scene>
        <a-sky src="/gopro/GS__1569_1731301416230.JPG"></a-sky>
        <a-camera wasd-controls="enabled: false">
          <a-cursor color="red"></a-cursor>
        </a-camera>

        <a-entity
          position=".4 1.5 -2"
          rotation="0 -20 0"
          text="
            value: Taman Bunga Wisata Dusun Kuliner Batu; 
            color: black; 
            align: center; 
            width: 2.5;
        "
          geometry="primitive: plane; height: .2; width: 2.5"
          material="shader: flat;"
        />
        <a-entity
          position=".4 1.7 -2"
          rotation="0 -20 0"
          text="
            value: Selamat Datang di; 
            color: black; 
            align: center; 
            width: 3.5;
        "
          geometry="primitive: plane; height: .3; width: 2.5"
          material="shader: flat;"
        />

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

export default Home;

// {/* <Scene>
// <CameraIcon color="white" size={200} />
// <Sky src="/gopro/GP__1586_1731301416230.JPG"></Sky>
// <Entity
//   geometry={{ primitive: "box" }}
//   material={{ color: "red" }}
//   position={{ x: 0, y: 0, z: -5 }}
// />
// {/* <Entity particle-system={{ preset: "snow" }} /> */}
// <Entity light={{ type: "point" }} />
// {/* <Entity gltf-model={{ src: "virtualcity.gltf" }} /> */}
// {/* <Entity text={{ value: "Hello, WebVR!" }} /> */}
// </Scene> */}

{
  /* <script>
document .querySelector("#startButton") .addEventListener("click", e =>{" "}
{(location.href = "view2.html")})
</script> */
}
