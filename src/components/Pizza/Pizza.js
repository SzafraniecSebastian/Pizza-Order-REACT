import React from 'react';
import classes from './Pizza.module.css';
import PizzaIngredient from './PizzaIngredient/PizzaIngredient';



const pizza = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <PizzaIngredient key={igKey + i} type={igKey}/>
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        },[]);

        if(transformedIngredients.length === 0) {
            transformedIngredients = <p> Choose your toppings!</p>
        }

        return (
        <div className={classes.pizza}>
            <PizzaIngredient type="dough">
                {transformedIngredients}
            </PizzaIngredient>
            
        </div>
    );

};

export default pizza;