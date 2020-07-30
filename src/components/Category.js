import React from 'react'
import { Link } from 'react-router-dom'

const Category = (props) => {
    return (
        (<Link to={`/categories/${props.category.split(" ").join("_")}`}>
        <button>{props.category}</button>
    </Link>)
    )
}

export default Category