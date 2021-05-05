import React, { useState } from "react";
import c from "./ProductInfo.module.css";
import altFoodImg from "../../common/img/icon.png";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import { addProduct } from "../../store/FoodDiary/FoodDiaryActionCreators";
import { connect } from "react-redux";

function ProductInfo(props) {
  const history = useHistory();
  const ingestion = history.location.search.split("=").pop();
  const [isProductSelected, setisProductSelected] = useState(false);
  const [productWeight, setProductWeight] = useState(100);

  const addProductToFoodTable = () => {
    props.addProduct(
      ingestion,
      props.productName,
      productWeight,
      props.fatAmount,
      props.carbohydratesAmount,
      props.proteinAmount,
      props.calories
    );
  };

  return (
    <div className={c.product_wrapper}>
      <div
        className={c.product}
        onClick={() => setisProductSelected(!isProductSelected)}
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
              {props.calories} ккал
            </div>
            <div className={c.product_info_nutrients_element}>
              Белки:{props.proteinAmount} г
            </div>
            <div className={c.product_info_nutrients_element}>
              Углеводы:{props.carbohydratesAmount} г
            </div>
            <div className={c.product_info_nutrients_element}>
              Жиры:{props.fatAmount} г
            </div>
          </div>
        </div>
      </div>

      {isProductSelected ? (
        <div className={c.product_options}>
          <TextField
            value={productWeight}
            onChange={(e) => setProductWeight(e.target.value)}
            id="standard-number"
            label="Вес"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            size="small"
            variant="outlined"
            onClick={() => addProductToFoodTable()}
          >
            Добавить
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export default connect(null, { addProduct })(ProductInfo);
