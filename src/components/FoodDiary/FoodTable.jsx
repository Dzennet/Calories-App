import React from "react";
import c from "./FoodTable.module.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { deleteProduct } from "../../store/FoodDiary/FoodDiaryActionCreators";
import plus from "../../common/img/plus.png";
import deleteIcon from "../../common/img/delete_icon.png";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function FoodTable(props) {
  const classes = useStyles();
  const nutrientFormula = (nutrient, weight, decimalPoint) => {
    return (+nutrient * (weight / 100)).toFixed(decimalPoint);
  };

  // Добавленные продукты с энергетической ценностью в таблице Дневника Питания:

  let productList = props.productsData.map((product) => (
    <TableRow key={product.productId}>
      <TableCell component="th" scope="row">
        <img
          className={c.product_delete}
          src={deleteIcon}
          alt="Удалить"
          title="Удалить"
          onClick={() => props.deleteProduct(product.productId)}
        />
      </TableCell>
      <TableCell align="right">{product.productName}</TableCell>
      <TableCell align="right">
        {nutrientFormula(product.calories, product.weight, 0)}
      </TableCell>
      <TableCell align="right">
        {nutrientFormula(product.fat, product.weight, 1)}
      </TableCell>
      <TableCell align="right">
        {nutrientFormula(product.carbohydrates, product.weight, 1)}
      </TableCell>
      <TableCell align="right">
        {nutrientFormula(product.proteins, product.weight, 1)}
      </TableCell>
    </TableRow>
  ));

  return (
    <div className={c.food_table}>
      <div className={c.food_table_title}>{props.foodTbl_title}</div>

      <div className={c.food_table_add}>
        <NavLink to={`/food_database?ingestion=${props.ingestion}`}>
          <img src={plus} alt="+" />
          &nbsp;Добавить элемент
        </NavLink>
      </div>

      {props.productsData.length !== 0 ? (
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell> </TableCell>
                <TableCell align="right">{props.foodTbl_title}</TableCell>
                <TableCell align="right">Калории</TableCell>
                <TableCell align="right">Жиры&nbsp;(г)</TableCell>
                <TableCell align="right">Углеводы&nbsp;(г)</TableCell>
                <TableCell align="right">Белки&nbsp;(г)</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>{productList}</TableBody>
          </Table>
        </TableContainer>
      ) : null}
    </div>
  );
}

export default connect(null, { deleteProduct })(FoodTable);
