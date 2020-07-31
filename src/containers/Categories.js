import React, { Component } from 'react'
import Category from '../components/Category'
import MealsContainer from './MealsContainer'

const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'

class Categories extends Component {
    state = {
        categories: [],
        category: ""
    }

    componentDidMount(){
        console.log("Fetching")
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            console.log(data.meals)
            this.setState({
                categories: data.meals
            })
        })
    }

    handleOnClick = (e) => {
        console.log(e.target.id)
        this.setState({
            category: e.target.id
        })
    }

    render() {
        console.log(this.state.categories)
        let categories = this.state.categories.map((category, i) => {
            return <Category key={i} category={category.strCategory}  handleClick={this.handleOnClick} />
        })
        
        return (
            <div>
                <h2>The Categories</h2>
                {categories}
                <hr/>
                {/* {this.state.category !== "" ? <h3>The {this.state.category} Meals:</h3> : ""}
                <MealsContainer searchTerm={this.state.category} searchType={"c"} /> */}
            </div>
        )
    }
}

export default Categories
