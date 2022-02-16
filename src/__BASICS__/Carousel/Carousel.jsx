import { useState } from "react";

export default function Carousel({images}) {

  const [selectedIndex, setSelectedIndex] = useState(0);

  /* const selectNewImage = (index, images, next) => { 
    const condition = next ? index < images.length - 1 : index > 0;
    const nextIndex = next ? (condition ? index + 1 : 0) : condition ? index - 1 : images.length - 1;
    setSelectedIndex(nextIndex);
  }; */

  const previous = () => {
    /* selectNewImage(selectedIndex, images, false); */
    const nextIndex = selectedIndex > 0 ? selectedIndex - 1 : images.length - 1
    setSelectedIndex(nextIndex)
  };

  const next = () => {
    /* selectNewImage(selectedIndex, images, true); */
    const nextIndex = selectedIndex < images.length - 1 ? selectedIndex + 1 : 0
    setSelectedIndex(nextIndex)
  };

  return (
    <>
      <div>
        <p>{images[selectedIndex].id}</p>
        <img src={images[selectedIndex].url} alt={images[selectedIndex].title} width="100px" height="100px"/>
        
        <button onClick={previous}>{"<"}</button>
        <button onClick={next}>{">"}</button>
      </div>
    </>
  );
}