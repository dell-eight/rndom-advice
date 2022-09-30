import React from 'react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import './Heading.css'

export const Heading = (props) => {
  return (
    <div className="heading">
        <ImQuotesLeft className='quotes-left' />
        <span>{props.advice}</span>
        <ImQuotesRight className='quotes-right' />
    </div>
  )
}
