import React from 'react';
import pizzaLogo from '../../assets/images/PizzaLogo.png';
import classes from './Logo.module.css'

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={pizzaLogo} alt="Pizza Logo"/>    
    </div>
)

export default logo;