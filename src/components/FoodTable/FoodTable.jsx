import React from "react";
import c from "./FoodTable.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

function FoodItem(props) {
  return <div>{props.productName}</div>;
}

function FoodTable(props) {
  let productList = props.productsData.map((product) => (
    <FoodItem productName={product.productName} />
  ));

  return (
    <div className={c.foodTbl}>
      <h2 className={c.foodTbl_title}>{props.foodTbl_title}</h2>
      <div className="">
        <NavLink to={`/food_database?ingestion=${props.ingestion}`}>
          Добавить элемент
        </NavLink>
      </div>
      {<div>{productList}</div>}
    </div>
  );
}

export default connect(null, {})(FoodTable);
