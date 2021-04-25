import React, { useState } from "react";
import c from "./ProductInfo.module.css";
import altFoodImg from "../../common/img/salad.png";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import { useHistory } from "react-router-dom";
import { addProductToBreakfast } from "../../store/Breakfast/BreakfastActionCreators";
import { addProductToLunch } from "../../store/Lunch/LunchActionCreators";
import { addProductToDinner } from "../../store/Dinner/DinnerActionCreators";
import { addProductToMeal } from "../../store/Meal/MealActionCreators";
import { connect } from "react-redux";

function ProductInfo(props) {
  const history = useHistory();
  const ingestion = history.location.search.split("=").pop();

  const addProductToFoodTable = () => {
    switch (ingestion) {
      case "breakfast":
        return props.addProductToBreakfast(props.productName);
      case "dinner":
        return props.addProductToDinner(props.productName);
      case "lunch":
        return props.addProductToLunch(props.productName);
      case "meal":
        return props.addProductToMeal(props.productName);
      default:
        break;
    }
  };

  const [isProductSelected, setisProductSelected] = useState(false);
  return (
    <div className={c.product_wrapper}>
      <div
        onClick={() => setisProductSelected(!isProductSelected)}
        className={c.product}
      >
        <div className={c.product_image}>
          <img src={props.image || altFoodImg} alt="..." />
        </div>
        <div className={c.product_info}>
          <div className={c.product_info_name}>
            <h2>{props.productName}</h2>
          </div>

          <div className={c.product_info_nutrients}>
            <div className={c.product_info_nutrients_element}>
              Калорийность:{props.calories.toFixed(0)}
            </div>
            <div className={c.product_info_nutrients_element}>
              Белка:{props.proteinAmount.toFixed(1)} г
            </div>
            <div className={c.product_info_nutrients_element}>
              Углеводов:{props.carbohydratesAmount.toFixed(1)} г
            </div>
            <div className={c.product_info_nutrients_element}>
              Жиров:{props.fatAmount.toFixed(1)} г
            </div>
          </div>
        </div>
      </div>

      {isProductSelected ? (
        <div className={c.product_options}>
          <Checkbox
            color="primary"
            inputProps={{ "aria-label": "uncontrolled-checkbox" }}
          />
          <Button
            variant="outlined"
            color="primary"
            onClick={() => addProductToFoodTable()}
          >
            Добавить
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export default connect(null, {
  addProductToBreakfast,
  addProductToDinner,
  addProductToLunch,
  addProductToMeal,
})(ProductInfo);
