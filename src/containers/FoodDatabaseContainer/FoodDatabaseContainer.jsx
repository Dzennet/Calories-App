import React from "react";
import FoodDatabase from "../../pages/FoodDatabase/FoodDatabase";
import { getProductsByName } from "../../store/FoodDatabase/FoodDatabaseActionCreators";
import { setError } from "../../store/Main/MainActionCreators";
import { connect } from "react-redux";

function FoodDatabaseContainer(props) {
  return (
    <FoodDatabase
      allProductsBySearch={props.allProductsBySearch}
      error={props.error}
      isLoading={props.isLoading}
      getProductsByName={props.getProductsByName}
      setError={props.setError}
    />
  );
}

let mapStateToProps = (state) => ({
  allProductsBySearch: state.foodDatabase.allProductsBySearch,
  error: state.main.error,
  isLoading: state.main.isLoading,
});

export default connect(mapStateToProps, { getProductsByName, setError })(
  FoodDatabaseContainer
);
