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
        <button
          className={`btn ${styles.close}`}
          aria-label='Close color picking mode'
          onClick={() => setIsColorPicking(false)}
        >
        <XMarkIcon />
        </button>
        <input type="range"/>
        </>
      )
      : (
        <div className={styles.btns}>
          <button 
            className='btn'
            aria-label={`Change theme to ${theme == "light" ? "dark" : "light"} mode`}
            role='switch'
            onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
            >
            {theme == "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button 
            className='btn'
            aria-label='Enable color picking mode'
            onClick={() => setIsColorPicking(true)}
            >
         <SwatchIcon />
          </button>
        </div>
      )
   }
   
   </aside>
  )
}

export default ThemeSwitcher