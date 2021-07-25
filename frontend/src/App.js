import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AddNewUserScreen from "./Screens/AddNewUserScreen";
import "./App.css";
import ProductScreen from "./Screens/ProductScreen";
import AddNewProductScreen from "./Screens/AddNewProductScreen";
import LoginScreen from "./Screens/LoginScreen";
import CategoryScreen from "./Screens/CategoryScreen";
import AddNewCategoryScreen from "./Screens/AddNewCategoryScreen";
import SubCategoryScreen from "./Screens/SubCategoryScreen";
import AddNewSubCategoryScreen from "./Screens/AddNewSubCategoryScreen";
import UserScreen from "./Screens/UserScreen";
import ProductVariationScreen from "./Screens/ProductVariationScreen";
import AddnewVariation from "./Screens/AddnewVariation";

import useUserInfo from "./components/useToken";

function App() {
  const { user, setUser } = useUserInfo();

  if (!user) {
    return <LoginScreen setUser={setUser} />;
  }

  return (
    <Router>
      <div style={{ minWidth: "330px" }}>
        <div className="container-fluid">
          <Header />
        </div>

        <div className="row mx-3 w-100">
          <div id="sidebar" className="col-3 rounded">
            <Sidebar />
          </div>
          <div className="col-9 h-100 my-1 border-bottom shadow-sm" id="main-content">
            <Route path="/user" component={UserScreen}></Route>
            <Route path="/addnewuser" component={AddNewUserScreen}></Route>
            <Route exact path="/product" component={ProductScreen}></Route>
            <Route
              path="/login"
              render={() => <Redirect to="/product" />}
            ></Route>

            <Route
              exact
              path="/product/:id/edit"
              render={({ match }) => (
                <AddNewProductScreen
                  match={match}
                  heading={`Update Product`}
                  buttonLabel={`Update Product`}
                />
              )}
            ></Route>

            <Route
              path="/addnewproduct"
              render={({ match }) => (
                <AddNewProductScreen
                  match={match}
                  heading={`Add New Product`}
                  buttonLabel={`Add Product`}
                />
              )}
            ></Route>

            <Route
              path="/product/variation/:id"
              component={ProductVariationScreen}
              exact
            ></Route>

            <Route
              exact
              path="/product/variation/:id/:product_id/edit"
              render={({ match }) => (
                <AddnewVariation match={match} heading={`Update Variation`} />
              )}
            ></Route>

            <Route
              path="/addnewproductvariation/:id"
              render={({ match }) => (
                <AddnewVariation match={match} heading={`Add New Variation`} />
              )}
            ></Route>


            <Route path="/category" component={CategoryScreen} exact></Route>
            <Route
              path="/addnewcategory"
              component={() => (
                <AddNewCategoryScreen heading={"Add New Category"} />
              )}
            ></Route>
            <Route
              path="/category/:id/edit"
              component={() => (
                <AddNewCategoryScreen heading={"Update Category"} />
              )}
            ></Route>

            <Route path="/subcategory" component={SubCategoryScreen}></Route>
            <Route
              path="/addnewsubcategory"
              component={AddNewSubCategoryScreen}
            ></Route>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
