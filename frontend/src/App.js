import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./Components/Login";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { is_Authenticated } from "./controllers/userRoutes";
import { useEffect } from "react";

export default function App() {
  return (
    <BrowserRouter>
    <main className="flex min-h-screen max-w-7xl mx-auto">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
      </Switch>
      </main>
    </BrowserRouter>
  );
}
