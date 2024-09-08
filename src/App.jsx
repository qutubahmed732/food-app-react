import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import FoodCategory from './FoodCategory';

function App() {



  return (
    <>
      <main>
        <h1>- FAST REACT PIZZA CO. -</h1>
        <br />
        <button className='menuButton'>OUR MENU</button>
        <br />
        <br />
        <p className='foodInfo'>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delecious</p>
        <div className="foodRecipes" style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          gap: '15px'
        }}>
          <FoodCategory />
          <FoodCategory />
          <FoodCategory />
          <FoodCategory />
          <FoodCategory />
          <FoodCategory />
        </div>
      </main>
    </>
  )
}

export default App
