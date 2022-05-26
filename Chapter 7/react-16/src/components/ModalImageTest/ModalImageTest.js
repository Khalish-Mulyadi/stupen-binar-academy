import React from "react";
import ModalImage from "react-modal-image";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
const ModalImageTest = () => {
  return (
    <div>
      <ModalImage small={image1} large={image2} alt="eula" showRotate={true} />
    </div>
  );
};

export default ModalImageTest;
