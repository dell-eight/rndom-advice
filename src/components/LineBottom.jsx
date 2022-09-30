import React from 'react'
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi'
import './LineBottom.css'

export const LineBottom = () => {
  return (
    <div className="line-bottom">
        <div className="line"></div>
            <GiPerspectiveDiceSixFacesRandom className='dice-random' />
        <div className="line"></div>
    </div>
  )
}
