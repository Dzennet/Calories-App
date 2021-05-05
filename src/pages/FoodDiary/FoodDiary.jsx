import React from "react";
import c from "./FoodDiary.module.css";
import FoodTable from "../../components/FoodDiary/FoodTable";

function FoodDiary({ myAddedProducts }) {
  return (
    <section className={c.food_diary}>
      <div className={c.food_diary_total}>
        <h5>Итого:</h5>
        <div className={c.food_diary_total_nutrients}>
          <div className={c.food_diary_total_nutrient}>
            {" "}
            Калории:&nbsp;
            {myAddedProducts.reduce((acc, product) => {
              return +(acc + product.calories).toFixed(0);
            }, 0)}
          </div>
          <div className={c.food_diary_total_nutrient}>
            {" "}
            Жиры:&nbsp;
            {myAddedProducts.reduce((acc, product) => {
              return +(acc + product.fat).toFixed(1);
            }, 0)}{" "}
            г
          </div>
          <div className={c.food_diary_total_nutrient}>
            {" "}
            Углеводы:&nbsp;
            {myAddedProducts.reduce((acc, product) => {
              return +(acc + product.carbohydrates).toFixed(1);
            }, 0)}{" "}
            г
          </div>
          <div className={c.food_diary_total_nutrient}>
            {" "}
            Белки:&nbsp;
            {myAddedProducts.reduce((acc, product) => {
              return +(acc + product.proteins).toFixed(1);
            }, 0)}{" "}
            г
          </div>
        </div>
      </div>
      
      <div className={c.food_diary_tables}>
        <FoodTable
          foodTbl_title="Завтрак"
          ingestion="breakfast"
          productsData={myAddedProducts.filter(
            (product) => product.PRODUCT_TYPE === "breakfast"
          )}
        />
        <FoodTable
          foodTbl_title="Обед"
          ingestion="lunch"
          productsData={myAddedProducts.filter(
            (product) => product.PRODUCT_TYPE === "lunch"
          )}
        />
        <FoodTable
          foodTbl_title="Ужин"
          ingestion="dinner"
          productsData={myAddedProducts.filter(
            (product) => product.PRODUCT_TYPE === "dinner"
          )}
        />
        <FoodTable
          foodTbl_title="Перекус/Другое"
          ingestion="meal"
          productsData={myAddedProducts.filter(
            (product) => product.PRODUCT_TYPE === "meal"
          )}
        />
      </div>
    </section>
  );
}

export default FoodDiary;
