import React, { useState } from "react";
import { connect } from "react-redux";
import ProductInfo from "../../components/FoodDatabase/ProductInfo";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { getProductsByName } from "../../store/FindProducts/FindProductsActionCreators";

let key = 0;

function FoodDatabase(props) {

  
  const products = props.products.map((product) => (
    <ProductInfo
      key={key++}
      productName={product.food.label}
      image={product.food.image}
      calories={product.food.nutrients.ENERC_KCAL}
      proteinAmount={product.food.nutrients.PROCNT}
      carbohydratesAmount={product.food.nutrients.CHOCDF}
      fatAmount={product.food.nutrients.FAT}
    />
  ));

  const [productName, setproductName] = useState("");

  return (
    <div>
      <TextField
        id="standard-search"
        label="Поиск продуктов..."
        type="search"
        value={productName}
        onChange={(e) => setproductName(e.target.value)}
      />
      <Button
        onClick={() => props.getProductsByName(productName)}
        color="primary"
      >
        Найти
      </Button>
      {props.products ? products : <div>Ничего не найдено</div>}
    </div>
  );
}

let mapStateToProps = (state) => ({
  products: state.findProductsStore.products,
});

export default connect(mapStateToProps, { getProductsByName })(FoodDatabase);
