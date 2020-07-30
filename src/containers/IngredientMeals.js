import React, { Component } from 'react'
import MealsContainer from './MealsContainer'

class IngredientMeals extends Component {
    render() {

        return (
            <div>
                <h2>The Meals With {this.props.match.params.id.split("_").join(" ")}</h2>
                <MealsContainer searchTerm={this.props.match.params.id.split(" ").join("_")} searchType={"i"} />

                {console.log(this.props.match.params.id.split("_").join(" "))}
            </div>
        )
    }
}

export default IngredientMeals
