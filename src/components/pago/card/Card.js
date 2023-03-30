import React from "react";
import './index.css';
import chip from "images/chip.jpg";


export const Front = ({
    number,
    name,
    expiry
}) => {
    return (
        <>
    <div className="frontCard">
            <div className="cardTop">
                <img className="chipCard" src={chip} alt=""/>
                <div className="numberCard">
                    <pre>{number}</pre>
                </div>
                <div className="bottomCard">
                    <div className="nameCard">
                        {name}
                    </div>
                    <div className="expirationDateCard">
                        {expiry}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export const Back = ({
    cvc
}) => {
    return (
        <>
    <div className="backCard">
        <div className="backCardDetails">
            <div className="colunma"></div>
            <div className="columnaCVC">
                {cvc}
            </div>
        </div>
    </div>
    </>
    )
}

export const Card = ({
    number,
    name,
    expiry,
    cvc,
    showFront
}) => {
    return (
        <>
        <div className="cardshape">
            {
                showFront?(
                    <Front
                        number={number}
                        name={name}
                        expiry={expiry}
                    />
                ) : (
                    <Back
                        cvc={cvc}
                    />
                )
            }
        </div>
        </>
    );
};