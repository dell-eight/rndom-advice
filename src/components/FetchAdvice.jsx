import React, { useState, useEffect } from 'react'
import { LineBottom } from './LineBottom'
import { Heading } from './Heading'
import './FetchAdvice.css'

export const FetchAdvice = () => {
    const [advice, setAdvice] = useState('');
  const [id, setId] = useState();
    const fetchApi = () => {
        fetch('https://api.adviceslip.com/advice')
            .then(res => res.json())
          .then(data => {
              setAdvice(data.slip.advice);
              setId(data.slip.id);
            })
    }
  
  useEffect(() => {
    fetchApi();
  });
  
    return (
      <div className='card'>
        <h3> Advice # {id}</h3>
        <Heading advice={ advice } />
        <LineBottom />
        <button onClick={() => { fetchApi()}}>Get another advice</button>
      </div>
  )
}
