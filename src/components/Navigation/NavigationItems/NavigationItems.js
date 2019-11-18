import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">About Us</NavigationItem>
        <NavigationItem link="/">Contact</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
)

export default navigationItems;