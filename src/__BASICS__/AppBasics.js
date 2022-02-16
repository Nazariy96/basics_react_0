/* import Clock from "./Clock/Clock";
import Counter from "./Counter/Counter";
import FontSizer from "./FontSizer/FontSizer";
import AlignToggle from "./ToggleStyles/AlignToggle"; */
import ShowHide from "./Toggle/ShowHide";
import ChangeColor from "./ColorChanger/ChangeColor";
import ColorSliders from "./ColorSliders.jsx/ColorSliders";
import { useEffect, useState } from "react";
import Modal from "./Modal/Modal";
import './Modal/modal.css';
import Carousel from "./Carousel/Carousel";
import axios from "axios";

const AppBasics = () => {
    const [photos,setPhotos] = useState([])
    
    const [modalShowImg,setModalShowImg] = useState(false)
    const [modalColorSlider,setModalColorSlider] = useState(false)
    const [modalColorChanger,setModalColorChanger] = useState(false)
    const [modalShowHide,setModalShowHide] = useState(false)
    const [modalCarousel,setModalCarousel] = useState(false)

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos?_limit=5")
        .then(data=> setPhotos(data.data))
    },[])

    return (
        <>
{/*         <Counter/>
            <hr/>
            <ShowHide/>
            <hr/>
            <FontSizer/>
            <hr/>
            <AlignToggle/>
            <hr/>
            <Clock/>
            <hr/>
            <ChangeColor/>
            <hr/>
            <ColorSliders/>
            <hr/> */}
            <div>
                <button onClick={()=>setModalShowImg(true)}>
                    Img
                </button>
                <button onClick={()=>setModalColorSlider(true)}>
                    ColorSliders
                </button>
                <button onClick={()=>setModalColorChanger(true)}>
                    ColorChanger
                </button>
                <button onClick={()=>setModalShowHide(true)}>
                    ShowHide
                </button>
                <button onClick={()=>setModalCarousel(true)}>
                    Carousel
                </button>
            </div>

            <Modal
                state={modalShowImg}
                chgModalState={setModalShowImg}
                title={"React"}
                img={"logo192.png"}
            >
            <h3>Lorem...</h3>
            </Modal>

            <Modal 
                state={modalColorSlider} 
                chgModalState={setModalColorSlider}
                title={"Color Sliders"}
                //showTitle={true}
            >
            <ColorSliders/>
            </Modal>

            <Modal 
                state={modalColorChanger} 
                chgModalState={setModalColorChanger}
                title={"Color Changer"}
                //showTitle={true}
            >

            <ChangeColor/>
            </Modal>
            
            <Modal 
                state={modalShowHide} 
                chgModalState={setModalShowHide}
                title={"Show and Hide"}
                //showTitle={true}
            >

            <ShowHide/>
            </Modal>

            <Modal 
                state={modalCarousel} 
                chgModalState={setModalCarousel}
                title={"Carousel"}
            >
                <Carousel images={photos}/>
            </Modal>

        </>
    )

};

export default AppBasics;
