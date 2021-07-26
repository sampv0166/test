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
import ShopScreen from "./Screens/ShopScreen";
import AddNewShopScreen from "./Screens/AddNewShopScreen";

import useUserInfo from "./components/useToken";
import PermissionScreen from "./Screens/PermissionScreen";

function App() {
  const { user, setUser } = useUserInfo();

  if (!user) {
    return <LoginScreen setUser={setUser} />;
  }

  return (
    <Router>
      <div className="global-min-width">
        <div className="row container-fluid">
          <Header />
        </div>

        <div className="row my-3 w-100 container-fluid">
          <div id="sidebar" className="col-3 rounded  shadow-sm">
            {user ? <Sidebar user={user} /> : ""}
          </div>
          <div
            className="col-9 mx-2 border rounded  shadow-sm"
            id="main-content"
          >
            <Route
              exact
              path="/user"
              render={({ match }) => <UserScreen match={match} user={user} />}
            ></Route>

            <Route
              exact
              path="/permissions/:id"
              render={({ match }) => <PermissionScreen match={match} user={user} />}
            ></Route>

            <Route
              exact
              path="/addnewuser"
              render={({ match }) => (
                <AddNewUserScreen match={match} heading={`Register New User`} />
              )}
            ></Route>

            <Route
              exact
              path="/user/:id/edit"
              render={({ match }) => (
                <AddNewUserScreen match={match} heading={`Update User`} />
              )}
            ></Route>

            <Route
              exact
              path="/product"
              render={({ match }) => (
                <ProductScreen match={match} user={user} />
              )}
            ></Route>

            <Route
              path="/login"
              render={() => <Redirect to="/product" />}
            ></Route>

            <Route
              exact
              path="/addnewshop"
              render={({ match }) => (
                <AddNewShopScreen match={match} heading={`Register New Shop`} />
              )}
            ></Route>
            <Route
              exact
              path="/shop/:id/edit"
              render={({ match }) => (
                <AddNewShopScreen match={match} heading={`Update Shop`} />
              )}
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

            <Route
              exact
              path="/shop"
              render={({ match }) => <ShopScreen match={match} />}
            ></Route>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
