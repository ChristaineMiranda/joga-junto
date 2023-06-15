import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/Navbar/index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import InitialPage from "./pages/InitialPage";
import AuthProvider from "./contexts";

export default function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    
      <BrowserRouter>
        <AuthProvider>
          <NavBar isLogged={isLogged}/>
          <Routes>
            <Route path="/" element={<InitialPage />} />
            <Route path="/sign-in" element={<SignIn setIsLogged={setIsLogged}/>} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>

        </AuthProvider>

      </BrowserRouter>


  )
}