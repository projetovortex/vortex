import React, { useState } from 'react'
import { HeaderLogadoClaro } from "../components/HeaderLogadoClaro"
import quadrado from "../assets/quadrado.png"
import { CardEsp32 } from "../components/CardEsp32"
import { CardBuckBoost } from "../components/CardBuckBoost"
import { CardCapacitor } from "../components/CardCapacitor"
import { CardJumpers } from "../components/CardJumpers"
import { CardBateria } from "../components/CardBateria"
import { CardSensor } from "../components/CardSensor"
import { CardModulo } from "../components/CardModulo"
import { CardStepUp } from "../components/CardStepUp"
import { CardDinamo } from "../components/CardDinamo"
import setaEsquerda from "../assets/setaEsquerda.png"
import setaDireita from "../assets/setaDireita.png"

const cards = [
    <CardEsp32 key="esp32" />,
    <CardBuckBoost key="buckboost" />,
    <CardCapacitor key="capacitor" />,
    <CardJumpers key="jumpers" />,
    <CardBateria key="bateria" />,
    <CardSensor key="sensor" />,
    <CardModulo key="modulo" />,
    <CardStepUp key="stepup" />,
    <CardDinamo key="dinamo" />,
  ];

export function ItensUsados() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? cards.length - 1 : prevIndex - 1
        );
    };

    return(
        <div className="bg-[url('/src/assets/bgJogo1.png')] dark:bg-[url('/src/assets/bgJogoEscuro.png')] bg-cover">
            <HeaderLogadoClaro/>
            <div className="h-screen w-screen bg-white dark:bg-gray-200 lg:flex flex-col justify-center items-center">
                <h1 className="lg:text-7xl text-5xl text-center text-purple-button font-questrial pb-5 lg:pt-0 pt-10 text-shadow-sm text-shadow-cyan-shadow-white">Itens Usados</h1>

                <div className="lg:flex gap-10 hidden w-screen justify-center">
                    <button className="cursor-pointer w-100 h-100">
                        <img onClick={handlePrev} src={setaEsquerda} alt="seta voltar" />
                    </button>
                    <div className='w-250 h-100'>
                    {cards[currentIndex]}
                    </div>
                    
                    <button className="cursor-pointer w-100 h-100">
                        <img onClick={handleNext} src={setaDireita} alt="seta avançar" />
                    </button>
                </div>

                <div className="lg:hidden bg-white dark:bg-gray-200 flex flex-col p-10 gap-20">
                    <CardEsp32 />
                    <CardBuckBoost />
                    <CardCapacitor />
                    <CardJumpers />
                    <CardBateria />
                    <CardSensor />
                    <CardModulo />
                    <CardStepUp />
                    <CardDinamo />
                </div>
            </div>
        </div>
    )
}