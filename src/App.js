import "./App.css";
import Container from "@material-ui/core/Container";
import Header from "./components/Header/Header";
import FoodDatabaseContainer from "./containers/FoodDatabaseContainer/FoodDatabaseContainer";
import FoodDiaryContainer from "./containers/FoodDiaryContainer/FoodDiaryContainer";
import { Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Header />
      <Container fixed>
        <div className="App-content">
          <Route exact path="/" component={FoodDiaryContainer} />
          <Route path="/food_database" component={FoodDatabaseContainer} />
        </div>
      </Container>
    </div>
  );
}

export default App;
