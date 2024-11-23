import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import MyAction from "./redux/MyAction";
import LoginSign from "./localStorage/LoginSign";
import Home from "./localStorage/Home";
import Create1 from "./crud/Create1";
import Create2 from "./crud/Create2";
import MyNav from "./components/MyNav";
import MyLogin from "./crud/MyLogin";
import ShowData from "./crud/ShowData";
import EditProfile from "./crud/EditProfile";
import CreateForm from "./crud/CreateForm";
import ShowDataTable from "./crud/ShowDataTable";

// import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MyNav />
        <Routes>
          
          <Route path="/action" element={<MyAction />} />
          <Route path="/loginsign" element={<LoginSign />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create1" element={<Create1 />} />
          <Route path="/create2" element={<Create2 />} />
          <Route path="/mylogin" element={<MyLogin />} />
          <Route path="/showdata" element={<ShowData />} />
          <Route path="/editprofile/:id" element={<EditProfile />} />
          <Route path="/register" element={<CreateForm/>}/>
          <Route path="/user detail" element={<ShowDataTable/>}/>
         
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
