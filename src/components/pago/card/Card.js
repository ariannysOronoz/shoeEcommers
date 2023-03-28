import React from "react";
import './index.css';
import chip from "images/chip.jpg";

export const Card = () => {
    return (
        <div className="cardshape">
            <div className="frontCard">
                <div className="cardTop">
                    <img className="chipCard" src={chip} alt=""/>
                    <div className="numberCard">
                        <div className="numberCard1">1234</div>
                        <div className="numberCard2">5678</div>
                        <div className="numberCard3">9101</div>
                        <div className="numberCard4">2134</div>
                    </div>
                    <div className="bottomCard">
                        <div className="nameCard">
                        Nombre completo
                        </div>
                        <div className="expirationDateCard">
                        00/00
                        </div>
                    </div>
                </div>
            </div>
            <div className="backCard">
                <div className="backCardDetails">
                    <div className="colunma"></div>
                    <div className="columnaCVC">
                        123
                    </div>
                </div>
            </div>
        </div>
    );
};