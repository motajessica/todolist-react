import React from 'react'
import { useState } from 'react'
//Icons
import { XMarkIcon, SunIcon, MoonIcon, SwatchIcon } from '@heroicons/react/24/solid'
//styles
import styles from './ThemeSwitcher.module.css'

const ThemeSwitcher = () => {
  const [isColorPicking, setIsColorPicking] = useState('light')
  const [theme, setTheme] = useState(false)
  return (
   <aside 
    className={styles.wrapper}
   > 
    {
      isColorPicking
      ? (
        <>
        <button>Color</button>
        <input type="range"/>
        </>
      )
      : (
        <div className={styles.btns}>
          <button 
            className='btn'
            aria-label={`Change theme to ${theme == "light" ? "dark" : "light"} mode`}
          >
          <MoonIcon />
          </button>
          <button className='btn'>
         <SwatchIcon />
          </button>
        </div>
      )
   }
   
   </aside>
  )
}

export default ThemeSwitcher