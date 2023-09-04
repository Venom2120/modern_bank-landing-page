import React from 'react'

import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col  w-full h-full rounded-full bg-primary`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-medium text-base'>
          <span className='text-gradient'>Get</span>
        </p>
        <img src={arrowUp} alt="" />
      </div>
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-medium text-base'>
          <span className='text-gradient'>Started</span>
        </p>
      </div>

      </div>

    </div>
  )
}

export default GetStarted
