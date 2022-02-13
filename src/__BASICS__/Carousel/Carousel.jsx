import { useState } from "react";

export default function Carousel(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(props.images[0]);


  const selectNewImage = (index, images, next) => { 
    const condition = next ? index < images.length - 1 : index > 0;
    const nextIndex = next ? (condition ? index + 1 : 0) : condition ? index - 1 : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const previous = () => {
    selectNewImage(selectedIndex, props.images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, props.images, true);
  };

  return (
    <>
      <div>
        <p>{selectedImage.id}</p>
        <img src={selectedImage.url} alt={selectedImage.title} width="100px" height="100px"/>
        
        <button onClick={previous}>{"<"}</button>
        <button onClick={next}>{">"}</button>
      </div>
    </>
  );
}