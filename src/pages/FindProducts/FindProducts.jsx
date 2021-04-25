import React from "react";
import c from "./FindProducts.module.css";
import { connect } from "react-redux";
import FoodTable from "../../components/FoodTable/FoodTable";

function FindProducts(props) {
  return (
    <section className={c.find_products}>
      <FoodTable
        foodTbl_title="Завтрак"
        ingestion="breakfast"
        productsData={props.breakfastProducts}
      />
      <FoodTable
        foodTbl_title="Обед"
        ingestion="lunch"
        productsData={props.lunchProducts}
      />
      <FoodTable
        foodTbl_title="Ужин"
        ingestion="dinner"
        productsData={props.dinnerProducts}
      />
      <FoodTable
        foodTbl_title="Перекус/Другое"
        ingestion="meal"
        productsData={props.mealProducts}
      />
    </section>
  );
}

let mapStateToProps = (state) => ({
  breakfastProducts: state.breakfast.breakfastProducts,
  dinnerProducts: state.dinner.dinnerProducts,
  lunchProducts: state.lunch.lunchProducts,
  mealProducts: state.meal.mealProducts,
});

export default connect(mapStateToProps, {})(FindProducts);
