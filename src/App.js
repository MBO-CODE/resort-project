import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

//am importat Route pentru a putea naviga prin browser
//look at "index.js" imports as well !!!
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      {/* atat timp cat URL-ul nu se potriveste cu nimic din ce avem o sa aratam pagina de eroare ! */}
      {/* asta facem switch-ul aici. Si totul e incadrat in switch pentru a avea efect */}
      <Switch>
        {/* practic, daca folosim in URL "/" o sa ne duca pe componenta de "HOME" fiind setata de noi */}
        {/* "exact" - e folosit pentru a te duce STRICT pe URL-ul respectiv*/}
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        {/* :slug -> poate sa aibe orice nume e.g: :unclebobi */}
        <Route exact path="/rooms/:slug" component={SingleRoom} />

        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
