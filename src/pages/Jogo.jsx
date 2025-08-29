import imagemJogo from "../assets/imagemJogo.png"
import nymeria from "../assets/nymeria.png"
import abyss from "../assets/abyss.png"
import nefret from "../assets/nefret.png"
import han from "../assets/han.png"
import setaEsquerda from "../assets/setaEsquerda.png"
import setaDireita from "../assets/setaDireita.png"
import { HeaderLogadoClaro } from "../components/HeaderLogadoClaro"
import React, { useState, useEffect, useRef } from 'react';

import { CardNymeria } from "../components/CardNymeria"
import { CardAbyss } from "../components/CardAbyss"
import { CardNefret } from "../components/CardNefret"
import { CardHan } from "../components/CardHan"
import cardNymeria from "../assets/cardNymeria.png"
import cardAbyss from "../assets/cardAbyss.png"
import cardNefret from "../assets/cardNefret.png"
import cardHan from "../assets/cardHan.png"

const cards = [
    <CardNymeria key="nymeria" />,
    <CardAbyss key="abyss" />,
    <CardNefret key="nefret" />,
    <CardHan key="han" />,
];
const cardsMobile = {
    cardNymeria,
    cardAbyss,
    cardNefret,
    cardHan,
  };

export function Jogo() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };


  const [openCard, setOpenCard] = useState(null);
  const popupRef = useRef();
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setOpenCard(null);
      }
    }
    if (openCard) {
        document.addEventListener('mousedown', handleClickOutside);
    } else {
        document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
    }, [openCard]);

    return(
        <div className="lg:bg-[url('./src/assets/bgJogo1.png')] bg-cyan-mobile-conheca dark:bg-dark-purple lg:dark:bg-[url('./src/assets/bgJogoEscuro.png')] bg-cover">
            <HeaderLogadoClaro/>
            <div className="flex flex-col items-center lg:px-0">
                <h1 className="lg:text-7xl text-6xl text-center lg:text-white lg:dark:text-white dark:text-light-blue text-purple-mobile-conheca font-questrial lg:pt-0 pt-10 pb-10 lg:px-0 px-10 text-shadow-sm text-shadow-cyan-shadow">Conheça nosso jogo</h1>

                <div className="flex lg:flex-row flex-col items-center lg:gap-30 gap-10 pb-15 font-questrial text-white">
                    <p className="dark:text-cyan-input lg:dark:text-white lg:text-white text-purple-button lg:text-3xl text-xl lg:pt-30 pt-5">Um mago causa fendas no <br />
                    tempo ao tentar criar energia <br />
                    eterna. Agora, heróis devem <br />
                    reunir fragmentos para salvar <br />
                    o mundo.</p>
                    <img className="lg:px-0 px-10 lg:w-130 lg:h-120 lg:pb-10" src={imagemJogo} alt="imagem jogo" />
                </div>

                <div className="pb-20 w-full flex flex-col items-center">
                    <h1 className="pt-20 lg:pb-25 pb-10 lg:text-7xl text-5xl text-center lg:text-white lg:dark:text-white dark:text-light-blue text-purple-mobile-conheca font-questrial text-shadow-sm text-shadow-cyan-shadow">Conheça nossos personagens</h1>
                    
                    <div className="lg:flex hidden justify-center gap-10 font-questrial">
                        <div className="flex flex-col items-center">
                            <img className="p-2 bg-teal-200 rounded-3xl" src={nymeria} alt="nymeria" />
                            <p className="pt-3 text-white text-2xl">Nymeria</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img className="p-2 pb-10 bg-gray-400 rounded-3xl" src={abyss} alt="abyss" />
                            <p className="pt-3 text-white text-2xl">Abyss</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img className="p-2 pb-6 bg-orange-200 rounded-3xl" src={nefret} alt="nefret" />
                            <p className="pt-3 text-white text-2xl">Nefret</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img className="p-2 bg-red-400 rounded-3xl" src={han} alt="han" />
                            <p className="pt-3 text-white text-2xl">Han</p>
                        </div>
                    </div>

                    <div className="lg:hidden flex flex-col justify-center items-center font-questrial">
                        <div className="w-44 flex justify-center items-center">
                                <img onClick={() => setOpenCard("cardNymeria")} className="p-2 rounded-3xl" src={nymeria} alt="nymeria" />
                                <img onClick={() => setOpenCard("cardAbyss")} className="p-2 rounded-3xl" src={abyss} alt="abyss" />
                        </div>
                        <div className="w-44 flex justify-center items-center">
                                <img onClick={() => setOpenCard("cardNefret")} className="p-2 pb-6 rounded-3xl" src={nefret} alt="nefret" />
                                <img onClick={() => setOpenCard("cardHan")} className="p-2 rounded-3xl" src={han} alt="han" />
                        </div>
                        {openCard && (
                            <div className="fixed inset-0 bg-black-opacity flex justify-center items-center z-50">
                                <div ref={popupRef} className="p-4 rounded shadow-lg max-w-md max-h-[80vh] overflow-auto">
                                    <img src={cardsMobile[openCard]} alt={openCard} className="max-w-full max-h-[70vh] object-contain"/>
                                </div>
                            </div>
                        )}
                        <button  className="cursor-pointer text-3xl text-cente text-cyan-button bg-dark-purple-mobile-conheca px-15 py-5 rounded-xl shadow-lg">Jogue já</button>
                    </div>

                    <div className="pt-20 w-full lg:flex hidden flex-col items-center">
                        <h1 className="pt-10 pb-10 text-7xl text-white font-questrial pb-5 text-shadow-sm text-shadow-cyan-shadow">Onde são as aventuras</h1>

                        <div className="flex justify-center items-center">
                            <img onClick={handlePrev} className="cursor-pointer h-50" src={setaEsquerda} alt="seta esquerda" />
                            {cards[currentIndex]}
                            <img onClick={handleNext} className="cursor-pointer h-50" src={setaDireita} alt="seta direita" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}