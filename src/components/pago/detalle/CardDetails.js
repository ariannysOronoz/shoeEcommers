import React, {useContext, useEffect, useState} from "react";
//import Card from 'react-credit-cards-2'
import {Card} from '../card/Card';
import './index.css';
import { Link } from "react-router-dom";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from '../utils'

import { DataContext } from "context/DataProvider";

export const CardDetails = () => {

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvc, setCvc] = useState("");
    const [focused, setFocused] = useState("");
    const [issuer, setIssuer] = useState(0);
    const [form, setForm] = useState({});
    

    const value = useContext(DataContext);

    const addMetodoPago = value.addMetodoPago;

    const handleCallback = ({ issuer }, isValid) => {
      if (isValid) {
        setIssuer(issuer)
      }
    }

    const handleInputFocus = ({ target }) => {
      setFocused(target.name)
    }

    const handleInputChange = ({ target }) => {
      if (target.name === 'number') {
        setNumber(formatCreditCardNumber(target.value))
        return
      }
      if (target.name === 'expiry') {
        setExpiry(formatExpirationDate(target.value))
        return
      }
      if (target.name === 'cvc') {
        setCvc(formatCVC(target.value))
        return
      }
      setName(target.value)
    }

    const handleSubmit = e => {
      e.preventDefault()
      addMetodoPago(
        {
          number: number,
          name: name,
          expiry: expiry,
          cvc: cvc
        }
      )
      console.log("value.metodosPago("+value.metodosPago.length+"): "+JSON.stringify(value.metodosPago))
      form.reset()
    }

    return (
      <div key='Payment'>
        <div className='App-payment'>
          <h1>Enter your payment details</h1>
          <h4>please input your information below</h4>
          <Card 
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={handleCallback}
          />
          <form ref={c => (setForm(c))} onSubmit={handleSubmit}>
            <div className='form-group'>
              <small>Name on card:</small>

              <input
                type='text'
                name='name'
                className='form-control'
                placeholder='Name'
                pattern='[a-z A-Z-]+'
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className='form-group'>
              <small>Card Number:</small>

              <input
                type='tel'
                name='number'
                className='form-control'
                placeholder='Card Number'
                pattern='[\d| ]{16,22}'
                maxLength='19'
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>

            <div className='form-group'>
              <small>Expiration Date:</small>

              <input
                type='tel'
                name='expiry'
                className='form-control'
                placeholder='Valid Thru'
                pattern='\d\d/\d\d'
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className='form-group'>
              <small>CVC:</small>

              <input
                type='tel'
                name='cvc'
                className='form-control'
                placeholder='CVC'
                pattern='\d{3}'
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <input type='hidden' name='issuer' value={issuer} />
            <div className='form-actions'>
              <button className='btnCardDetails'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    )

}
