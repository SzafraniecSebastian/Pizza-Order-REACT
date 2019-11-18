import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Cheese', type: 'cheese'},
    { label: 'Salami', type: 'salami'},
    { label: 'Basil', type: 'basil'},
    { label: 'Ham', type: 'ham'},
    { label: 'Capers', type: 'capers'},
    { label: 'Mushroom', type: 'mushroom'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <h4>Current Price: <strong>{props.price.toFixed(2)} $</strong> </h4>
        {controls.map(ctrl => {
            return <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                ingredientsPrices={props.ingredientsPrices[ctrl.type]}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}/>

        })}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls