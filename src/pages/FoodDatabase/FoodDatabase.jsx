import React, { useState } from "react";
import c from "./FoodDatabase.module.css";
import ProductInfo from "../../components/FoodDatabase/ProductInfo";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import loader from "../../common/img/loader.svg";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

let key = 0;

// Стили для элементов Material UI

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
  },
})(TextField);

function FoodDatabase(props) {
  const classes = useStyles();
  const [productName, setproductName] = useState("");
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "right",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = () => {
    setState({ ...state, open: true });
  };
  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const onSearchClick = () => {
    handleClick();
    props.getProductsByName(productName);
  };

  const products = props.allProductsBySearch.map((product) => (
    <ProductInfo
      key={key++}
      productName={product.food.label}
      image={product.food.image}
      calories={+product.food.nutrients.ENERC_KCAL.toFixed(0)}
      proteinAmount={+product.food.nutrients.PROCNT.toFixed(1)}
      carbohydratesAmount={+product.food.nutrients.CHOCDF.toFixed(1)}
      fatAmount={+product.food.nutrients.FAT.toFixed(1)}
    />
  ));

  return (
    <>
      <NavLink to="/">
        <button className={c.food_database_back}>
          Вернуться в Мой Дневник
        </button>
      </NavLink>

      <section className={c.food_database}>
        <div className={c.food_database_search}>
          <CssTextField
            className={classes.margin}
            id="custom-css-standard-input"
            label="Поиск продуктов..."
            value={productName}
            onChange={(e) => setproductName(e.target.value)}
          />

          <button
            className={c.food_database_search_btn}
            onClick={() => onSearchClick()}
          ></button>
        </div>

        <div className={c.food_database_products}>
          {props.isLoading && !props.error ? (
            <img
              className={c.food_database_products_load}
              src={loader}
              alt="Загрузка..."
            />
          ) : props.allProductsBySearch.length !== 0 ? (
            products
          ) : null}
        </div>

        <div className={c.food_database_error}>
          {props.error ? (
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={open}
              onClose={handleClose}
              message={props.error}
              key={vertical + horizontal}
            />
          ) : null}
        </div>
      </section>
    </>
  );
}

export default FoodDatabase;
