import React from 'react'
import {Link} from 'react-router-dom';
import style from './Home.module.css'

const Home = () => {
  return (
    <div className={style.container}>
    <h1>Welcome to Dev-Duel</h1>
    <div className={style.buttonContainer}>
    <div className={style.buttonContainer1}>
        <Link to="/inspect"><button>Inspect</button></Link>
        <p>Look up a fellow dev's GitHub info.</p> 
    </div> 
    <div className={style.line}>
    </div>
    <div className={style.buttonContainer2}>
        <Link to="/duel"><button>Duel</button></Link>
        <p>Pick two devs to go head to head.</p>
    </div>
    </div>
    </div>
  )
}

export default Home