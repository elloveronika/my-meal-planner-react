import React, {useState, useEffect} from "react";

export default function Meal({meal}) {
    const [imageUrl, setImageUrl] = useState("");

useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=b2c94b91c6204089afadc5320d3ebd3e&includeNutrition=false`)

    .then((response) => response.json())
    .then((data) => {
        setImageUrl(data.image);
    })
    .catch((err) => {
        console.log(err);
    })
}, [meal.id])

    return <article>
        <h1>{meal.title}</h1>
        <img src={imageUrl} alt="recipe" />
        <ul className="instructions">
            <li>Prepeartion time: {meal.readyInMinutes} minutes</li>
            <li>Number of Servings: {meal.servings}</li>
        </ul>
        <a href={meal.sourceUrl}> Go to Recipe</a>

    </article>

    
}