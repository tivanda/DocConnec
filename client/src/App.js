import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./pages/site/Home";
import { useSelector } from "react-redux";
import Profile from "./pages/site/Profile";
import Authentification from "./pages/Authentification/Authentification";
import Chat from "./pages/Chat/Chat";
import { Routes, Route, Navigate } from "react-router-dom";
import Emergency from "./pages/site/Emergency";
function App() {
  const user = useSelector((state) => state.authReducer.authData);

  return (
    <div className="App">
      <Nav />
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <Routes>
        <Route
          path="/"
          element={
            user ? <Navigate to="home" /> : <Navigate to="authentification" />
          }
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../authentification" />}
        />
        <Route
          path="/authentification"
          element={user ? <Navigate to="../home" /> : <Authentification />}
        />

        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="../authentification" />}
        />

        <Route
          path="/emergency"
          element={user ? <Emergency /> : <Navigate to="../authentification" />}
        />

        <Route
          path="/chat"
          element={user ? <Chat /> : <Navigate to="../authentification" />}
        />
      </Routes>
    </div>
  );
}

export default App;
