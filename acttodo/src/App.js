import ToDoContainer from "./components/ToDoContainer";
import Header from "./components/Header";
import Cards from "./components/CardsName";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import Signup from "./pages/signup";
import Login from "./pages/login";
import { useState } from "react";

function App() {
  const [users, setusers] = useState(
    [
      {
        username: "Buvaneshwari P",
        password: "123"
      }
    ]
  )
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login users={users} setusers={setusers} />}></Route>
          <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}></Route>
          <Route path='/landing' element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>

    </div>

  )
}


export default App;
