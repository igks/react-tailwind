import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/navigation/Navbar";
import Sidebar from "./components/navigation/Sidebar";
import { Button } from "./components/shared/Button";
import Card from "./components/shared/Card";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="grid gap-4 grid-cols-12 container">
        <div className="p-0 m-0 col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-9 flex justify-center items-center">
          <Switch>
            <Route path="/card" component={Card} />
            <Route path="/button" component={Button} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
