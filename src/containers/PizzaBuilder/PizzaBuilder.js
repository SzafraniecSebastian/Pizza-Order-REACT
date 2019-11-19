import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Pizza from '../../components/Pizza/Pizza'
import BuildControls from '../../components/Pizza/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSum from '../../components/Pizza/OrderSummary/OrderSum';
import classes from './PizzaBuilder.module.css'
import axios from '../../ordersAxios';
import Spinner from '../../components/UI/Spinner/Spinner'

const INGREDIENT_PRICES = {
    cheese: 5,
    salami: 5,
    basil: 2,
    ham: 6,
    capers: 2,
    mushroom: 3 
}


class pizzaBuilder extends Component {
    state = {
        ingredients: {
            cheese: 0,
            salami: 0,
            basil: 0,
            ham: 0,
            capers: 0,
            mushroom: 0
        },
        totalPrice: 14,
        purchasable: false,
        purchasing: false,
        loading: false
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey]
        })
        .reduce((sum, el) => {
            return sum + el;
        },0);
        this.setState({purchasable: sum > 0});
    }

    

    addIngredientHandler = (type) => {
        if(this.state.ingredients[type] < 1){
            const oldCount = this.state.ingredients[type];
            const updatedCount = oldCount + 1;
            const updatedIngredients = {
                ...this.state.ingredients
            }
            updatedIngredients[type] = updatedCount

            const priceAddition = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice + priceAddition;
            this.setState({
                totalPrice: newPrice,
                ingredients: updatedIngredients
            });
            this.updatePurchaseState(updatedIngredients) 
        }
    }

   

    removeIngredientHandler = (type) => {
        if(this.state.ingredients[type] > 0){
            const oldCount = this.state.ingredients[type];
            if(oldCount <= 0){
                return
            }
            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            }
            updatedIngredients[type] = updatedCount

            const priceDeduction = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceDeduction;
            this.setState({
                totalPrice: newPrice,
                ingredients: updatedIngredients
            });
            this.updatePurchaseState(updatedIngredients) 
        }
    }

    purchasingHandler = () => {
        this.setState({purchasing : true})
    } 

    cancelOrderHandler = () => {
        this.setState({purchasing : false})
    }

    continueHandler = () => {
        this.setState({ loading: true})
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: "Artur",
                address: {
                    street: 'Tutaj 1',
                    zipCode: '33-370',
                    country : 'Polska'
                },
                email: "test@test.com"
            },
            deliveryMethod: "fastest"
        }
        axios.post('/orders.json', order)
            .then(response =>{
                this.setState({ loading: false, purchasing: false})
            })
            .catch(error => {
                this.setState({ loading: false, purchasing: false})
            })
    }

    render (){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = <OrderSum 
            show={this.state.purchasing}
            ingredients={this.state.ingredients}
            purchaseContinue={this.continueHandler}
            purchaseCancel={this.cancelOrderHandler}
            totalPrice={this.state.totalPrice}/>
        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <Aux className={classes.Wrapper}> 
                <Modal show={this.state.purchasing} modalClosed={this.cancelOrderHandler}>
                    {orderSummary}
                </Modal>
                <Pizza ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientsPrices={INGREDIENT_PRICES}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchasingHandler}
                    price={this.state.totalPrice}/>
            </Aux>
        )
    }
}

export default pizzaBuilder