import * as axios from "axios";

const app_id = "39ad67d9";
const app_key = "57e2ca5b968b6f0fe8b58e5386301869";

export const FindProductsAPI = {
  getProductsByName(productName) {
    return axios
      .get(
        `https://api.edamam.com/api/food-database/v2/parser?ingr=${productName}&app_id=${app_id}&app_key=${app_key}`
      )
      .then((response) => response.data);
  },
};
