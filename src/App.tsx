import "./App.css";
import SignupForm from "./Module/SignupForm";
import  Login  from "./Module/Login"
import Dashboard from './Module/dashbored'
import { MyProvider } from "./Context/Context";
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom' 
function App() {
  return (
    <MyProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<SignupForm/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
          </Routes>
        </Router>
        {/* <Form /> */}
      </div>
    </MyProvider>
  );
}

export default App;
