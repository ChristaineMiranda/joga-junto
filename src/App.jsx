import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/Navbar/index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import InitialPage from "./pages/InitialPage";
import AuthProvider from "./contexts";
import Home from "./pages/Home";
import AllMatches from "./pages/AllMatches";
import GroupSelected from "./pages/GroupSelected";
import NotLoggedIn from "./pages/NotLoggedIn";
import AllGroups from "./pages/AllGroups";


export default function App() {

  const [isLogged, setIsLogged] = useState(false);


  return (
    
      <BrowserRouter>
        <AuthProvider>
          <NavBar isLogged={isLogged} setIsLogged={setIsLogged}/>
          <Routes>
            <Route path="/" element={<InitialPage />} />
            <Route path="/sign-in" element={<SignIn setIsLogged={setIsLogged}/>} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/matches" element={<AllMatches/>}/>
            <Route path="/group-selected/:idGroup" element={<GroupSelected/>}/>
            <Route path="/group-all" element={<AllGroups/>}/>
            <Route path="/not-logged-in" element={<NotLoggedIn/>}/>
          </Routes>

        </AuthProvider>

      </BrowserRouter>


  )
}