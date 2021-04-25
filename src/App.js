import "./App.css";
import Container from "@material-ui/core/Container";
import Header from "./components/Header/Header";
import FindProducts from "./pages/FindProducts/FindProducts";
import FoodDatabase from "./pages/FoodDatabase/FoodDatabase";
import { Route } from "react-router";

function App() {
  return (
    <Container fixed>
      <div className="App">
        <Header />
        <div className="App-content">
          <Route exact path="/" component={FindProducts} />
          <Route path="/food_database" component={FoodDatabase} />
        </div>
      </div>
    </Container>
  );
}

export default App;
