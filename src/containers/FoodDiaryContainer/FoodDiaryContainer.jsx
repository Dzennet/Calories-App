import React from "react";
import FoodDiary from "../../pages/FoodDiary/FoodDiary";
import { connect } from "react-redux";

function FoodDiaryContainer({ myAddedProducts }) {
  return <FoodDiary myAddedProducts={myAddedProducts} />;
}

let mapStateToProps = (state) => ({
  myAddedProducts: state.foodDiary.myAddedProducts,
});

export default connect(mapStateToProps, {})(FoodDiaryContainer);
