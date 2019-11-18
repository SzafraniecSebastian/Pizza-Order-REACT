import React from 'react';
import Button from '../../UI/Button/Button';
import classes from './OrderSum.module.css'


const OrderSum = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            if(props.ingredients[igKey]>0){
                return (
                    <li key={igKey} className={classes.Topping}>{igKey}</li>
                )
            }
        })
    return (
        <div className={classes.Container}>
            <h2>Your order</h2>
            <h3>Pizza with fallowing toppings:</h3>
            <div className={classes.ToppingsList}
                style={{
                    transform: props.show ? 'translateX(0)' : 'translateX(-30vw)',
                    opacity: props.show ? '1' : '0'
                }}
            >{ingredientsSummary}</div>
            <p className={classes.TotalPrice}
                style={{
                    transform: props.show ? 'translateX(0)' : 'translateX(30vw)',
                    opacity: props.show ? '1' : '0'
                }}
            >Total Price: {props.totalPrice.toFixed(2)} $</p>

            <div className={classes.Buttons} style={{
                        opacity: props.show ? '1' : '0'
                }}>
                <Button 
                    btnType={"Success"} 
                    click={props.purchaseContinue}
                    >CONTINUE</Button>
            </div>

            <div className={classes.Buttons} style={{
                        opacity: props.show ? '1' : '0'
                }}>
                <Button 
                    btnType={"Danger"} 
                    click={props.purchaseCancel}
                    >CANCEL</Button>
            </div>

        </div>
    )
}

export default OrderSum