import React, { Component } from 'react'
import Meal from '../components/Meal'

export default class MealsContainer extends Component {
    state = {
        meals: [],
        searchTerm: ""
    }

    componentDidMount(){
        console.log("Mounting")
        this.fetchMeals()
    }

    componentDidUpdate(prevState) {

        console.log("Updating")
        if (prevState.searchTerm !== this.props.searchTerm){
            this.fetchMeals()
        }
    }

    fetchMeals = () => {

        let url = `https://www.themealdb.com/api/json/v1/1/filter.php?${this.props.searchType}=${this.props.searchTerm}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.meals)
            this.setState({
                meals: data.meals,
                searchTerm: this.props.searchTerm
            })
        })
    }

    render() {

        if (this.props.searchTerm !== ""){
            const meals = this.state.meals.map((meal, i) => {
                return <Meal key={i} meal={meal.strMeal} />
            })

            return (
                <div>
                    {meals}
                </div>
            )
        } else {
            return <h3>Please Select One</h3>
        }
    }
}
