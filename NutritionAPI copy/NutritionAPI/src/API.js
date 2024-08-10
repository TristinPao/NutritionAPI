import React, { useState } from "react";
import NutFacts from "./APIChild";
import "./App.css";

const API = () => {
  const [foodName, setFoodName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [size, setSize] = useState("");
  const [nutrition, setNutriton] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const url =
      "https://api.edamam.com/api/nutrition-data?app_id=c0d98614&app_key=94ac4003252bf55af94532ff047c420d&nutrition-type=cooking&ingr=" +
      quantity +
      "%20" +
      size +
      "%20" +
      foodName;

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setNutriton(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const foodHandler = (e) => {
    setFoodName(e.target.value);
  };

  const quantityHandler = (e) => {
    setQuantity(e.target.value);
  };

  const sizeHandler = (e) => {
    setSize(e.target.value);
  };

  const renderNutrition = () => {
    if (nutrition) {
      return (
        <NutFacts
          calories={Math.round(nutrition.calories ?? 0)}
          fat={Math.floor(nutrition.totalNutrients?.FAT?.quantity ?? 0)}
          sFat={Math.floor(nutrition.totalNutrients?.FASAT?.quantity ?? 0)}
          tFat={Math.floor(nutrition.totalNutrients?.FATRN?.quantity ?? 0)}
          cholesterol={Math.floor(
            nutrition.totalNutrients?.CHOLE?.quantity ?? 0
          )}
          sodium={Math.floor(nutrition.totalNutrients?.NA?.quantity ?? 0)}
          carbs={Math.floor(nutrition.totalNutrients?.CHOCDF?.quantity ?? 0)}
          protein={Math.floor(nutrition.totalNutrients?.PROCNT?.quantity ?? 0)}
          fiber={Math.floor(nutrition.totalNutrients?.FIBTG?.quantity ?? 0)}
          sugar={Math.floor(nutrition.totalNutrients?.SUGAR?.quantity ?? 0)}
          vitaminD={Math.floor(nutrition.totalNutrients?.VITD?.quantity ?? 0)}
          calcium={Math.floor(nutrition.totalNutrients?.CA?.quantity ?? 0)}
          iron={Math.floor(nutrition.totalNutrients?.FE?.quantity ?? 0)}
          potassium={Math.floor(nutrition.totalNutrients?.K?.quantity ?? 0)}
        />
      );
    }
    return null;
  };

  return (
    <div className="api-page">
      <h1>Nutritional Facts</h1>
      <form onSubmit={submitHandler} className="nutritional-form">
        <label>Enter Food Name</label>
        <input
          type="text"
          name="foodName"
          onChange={foodHandler}
          value={foodName}
        />
        <label>Enter Quantity</label>
        <input
          type="text"
          name="quantity"
          value={quantity}
          onChange={quantityHandler}
        />
        <label>Enter Size (If Applicable)</label>
        <input type="text" name="size" value={size} onChange={sizeHandler} />
        <button type="submit">Submit</button>
      </form>

      {renderNutrition()}
    </div>
  );
};

export default API;
