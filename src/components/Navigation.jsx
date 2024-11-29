import React from "react";
import { useNavigate } from "react-router";

const Navigation = ({
  position = "-1 1 -2",
  rotationZ = "0",
  direction = "up",
  navigateTo,
}) => {
  const navigate = useNavigate();

  let imageSrc;
  switch (direction) {
    case "up":
      imageSrc = "/icons/arrow-up.png";
      break;
    case "left":
      imageSrc = "/icons/arrow-left.png";
      break;
    case "right":
      imageSrc = "/icons/arrow-right.png";
    default:
      throw new Error("need to declare direction");
  }

  const handleNavigation = () => {
    navigate(navigateTo);
  };

  return (
    <>
      <a-image
        onClick={handleNavigation}
        position={position}
        rotation={`-90 0 ${rotationZ}`}
        src={imageSrc}
        width=".3"
        height=".3"
      />
    </>
  );
};

export default Navigation;

// event-set__satu="
// _event:mouseleave;
// material.color:#ffffff;"

{
  /* <>
      <a-image
        position="-1 1 -2"
        rotation="-80 0 0"
        src="/icons/arrow-left.png"
        width=".3"
        height=".3"
      />
      <a-image
        position="-0.5 1 -2"
        rotation="-80 0 0"
        src="/icons/arrow-right.png"
        width=".3"
        height=".3"
      />
      <a-image
        position="-0.75 1.1 -2.35"
        rotation="-80 0 0"
        src="/icons/arrow-up.png"
        width=".3"
        height=".3"
      />
    </> */
}

// // Mengatur posisi dan rotasi untuk setiap arrow
// const positions = [
//   { x: -1, y: 1, z: -2 }, // Arrow Kiri
//   { x: -0.65, y: 1, z: -2 }, // Arrow Kanan
//   { x: -0.75, y: 1.1, z: -2.35 }, // Arrow Atas
// ];

// const rotations = [
//   { x: -80, y: 0, z: 0 }, // Semua arrow memiliki rotasi yang sama di sumbu X dan Z
//   { x: -80, y: 0, z: 0 },
//   { x: -80, y: 0, z: 0 },
// ];

// // Fungsi untuk menghitung posisi baru
// const calculatePosition = (position, index) => {
//   return {
//     x: position.x + shiftX + (index === 1 ? 0.25 : index === 2 ? 0 : 0), // Adjustment untuk jarak antar arrow
//     y: position.y + shiftY,
//     z: position.z + shiftZ,
//   };
// };

// // Fungsi untuk menghitung rotasi baru di sumbu Y
// const calculateRotation = () => {
//   return { x: -80, y: rotationY, z: 0 };
// };

// return (
//   <>
//     {/* Menggambar ketiga arrow sesuai posisi dan rotasi yang dihitung */}
//     <a-image
//       position={`${calculatePosition(positions[0], 0).x} ${
//         calculatePosition(positions[0], 0).y
//       } ${calculatePosition(positions[0], 0).z}`}
//       rotation={`${calculateRotation().x} ${calculateRotation().y} ${
//         calculateRotation().z
//       }`}
//       src="/icons/arrow-left.png"
//       width=".3"
//       height=".3"
//     />
//     <a-image
//       position={`${calculatePosition(positions[1], 1).x} ${
//         calculatePosition(positions[1], 1).y
//       } ${calculatePosition(positions[1], 1).z}`}
//       rotation={`${calculateRotation().x} ${calculateRotation().y} ${
//         calculateRotation().z
//       }`}
//       src="/icons/arrow-right.png"
//       width=".3"
//       height=".3"
//     />
//     <a-image
//       position={`${calculatePosition(positions[2], 2).x} ${
//         calculatePosition(positions[2], 2).y
//       } ${calculatePosition(positions[2], 2).z}`}
//       rotation={`${calculateRotation().x} ${calculateRotation().y} ${
//         calculateRotation().z
//       }`}
//       src="/icons/arrow-up.png"
//       width=".3"
//       height=".3"
//     />
//   </>
// );
