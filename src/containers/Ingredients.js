import React, { Component } from 'react'
import Ingredient from '../components/Ingredient'

const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list'

class Ingredients extends Component {
    state = {
        ingredients: [],
        ingredient: ""
    }

    componentDidMount(){
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                ingredients: data.meals
            })
        })
    }

    handleOnClick = (e) => {
        console.log(e.target.id)
        this.setState({
            ingredient: e.target.id
        })
    }

    render() {

        let ingredients = this.state.ingredients.map((ingredient, i) => {
            return <Ingredient key={i} ingredient={ingredient.strIngredient} handleClick={this.handleOnClick} />
        })

        return (
            <div>
                <h2>The Ingredients</h2>
                {ingredients}
                <hr/>
            </div>
        )
    }
}

export default Ingredients