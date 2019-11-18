import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './PizzaIngredient.module.css';
import Aux from '../../../hoc/Aux'


class pizzaIngredient extends Component{
    render(){
        let ingredient = null;

    switch(this.props.type){
        case ('dough'):
            ingredient = (
                <div className={classes.Dough}>
                    <div className={classes.DoughMiddle}></div>
                    <Aux>{this.props.children}</Aux>
                </div>
            );
            break;
        case ('salami'):
            ingredient = (
                <Aux>
                    <div className={classes.Salami}>
                        <div className={classes.Salami1}></div>
                        <div className={classes.Salami2}></div>
                        <div className={classes.Salami3}></div>
                        <div className={classes.Salami4}></div> 
                        <div className={classes.Salami5}></div> 
                    </div>
                </Aux>
            )
            break;
        case ('cheese'):
            ingredient = (
                <div className={classes.Cheese}>
                    <div className={classes.Cheese1}></div>
                    <div className={classes.Cheese2}></div>
                    <div className={classes.Cheese3}></div>
                    <div className={classes.Cheese4}></div>
                    <div className={classes.Cheese5}></div>
                    <div className={classes.Cheese6}></div>
                    <div className={classes.Cheese7}></div>
                    <div className={classes.Cheese8}></div>
                </div>
            )
            break;
        case ('basil'):
            ingredient = (
                <div className={classes.Basil}>
                    <div className={classes.Basil1}></div>
                    <div className={classes.Basil2}></div>
                    <div className={classes.Basil3}></div>
                    <div className={classes.Basil4}></div>
                    <div className={classes.Basil5}></div>
                </div>
            )
            break;
        case ('ham'):
            ingredient = (
                <div className={classes.Ham}>
                    <div className={classes.Ham1}></div>
                    <div className={classes.Ham2}></div>
                    <div className={classes.Ham3}></div>
                    <div className={classes.Ham4}></div>
                    <div className={classes.Ham5}></div>
                    <div className={classes.Ham6}></div>
                </div>
            )
            break;
        case ('capers'):
            ingredient = (
                <div className={classes.Capers}>
                    <div className={classes.Capers1}></div>
                    <div className={classes.Capers2}></div>
                    <div className={classes.Capers3}></div>
                    <div className={classes.Capers4}></div>
                    <div className={classes.Capers5}></div>
                    <div className={classes.Capers6}></div>
                </div>
            )
            break;
        case ('mushroom'):
            ingredient = (
                <div className={classes.Mushroom}>
                    <div className={classes.Mushroom1}></div>
                    <div className={classes.Mushroom2}></div>
                    <div className={classes.Mushroom3}></div>
                    <div className={classes.Mushroom4}></div>
                    <div className={classes.Mushroom5}></div>
                    <div className={classes.Mushroom6}></div>
                    <div className={classes.Mushroom7}></div>
                    <div className={classes.Mushroom8}></div>
                </div>
            )
            break;            
        default:
            ingredient = null;
    }
    return ingredient;
}   
}

pizzaIngredient.propType = {
    type: PropTypes.string.isRequired
}
export default pizzaIngredient;