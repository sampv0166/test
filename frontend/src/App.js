import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AddNewUserScreen from './Screens/AddNewUserScreen';
import './App.css';
import ProductScreen from './Screens/ProductScreen';
import AddNewProductScreen from './Screens/AddNewProductScreen';
import LoginScreen from './Screens/LoginScreen';
import CategoryScreen from './Screens/CategoryScreen';
import AddNewCategoryScreen from './Screens/AddNewCategoryScreen';
import SubCategoryScreen from './Screens/SubCategoryScreen';
import AddNewSubCategoryScreen from './Screens/AddNewSubCategoryScreen';
import UserScreen from './Screens/UserScreen';
import axios from 'axios';
import EditProductScreen from './Screens/EditProductScreen';
import { Row } from 'react-bootstrap';

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const { data } = await axios.get('/api/v2/public/myprofile');
      setUser(data);
    };
    fetchCurrentUser();
   
  }, [user.id]);

  return (
    <Router>
      <Header />
      {user.id ? (
        <div className="row">
          <div  id="sidebar" className="col-3 border rounded">
            <Sidebar />
          </div>
          <div className='col-9 h-100'>
          <Route path="/user" component={UserScreen}></Route>
          <Route path="/addnewuser" component={AddNewUserScreen}></Route>
          <Route path="/product" component={ProductScreen} exact></Route>
          <Route path="/addnewproduct" component={AddNewProductScreen}></Route>
          <Route path="/product/:id/edit" component={EditProductScreen}></Route>
          <Route path="/category" component={CategoryScreen}></Route>
          <Route
            path="/addnewcategory"
            component={AddNewCategoryScreen}
          ></Route>
          <Route path="/subcategory" component={SubCategoryScreen}></Route>
          <Route
            path="/addnewsubcategory"
            component={AddNewSubCategoryScreen}
          ></Route>
          </div>
        </div>
      ) : (
        <Route path="/login" component={LoginScreen}></Route>
      )}
    </Router>
  );
}

export default App;
