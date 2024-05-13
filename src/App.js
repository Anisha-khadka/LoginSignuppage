


import { BrowserRouter, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Routes from "./Routes";
// import Signup from "./Components/Signup";

function App() {
  return (
    <>
    <BrowserRouter>
    
   <Switch>
   <Routes/>
   </Switch>
    </BrowserRouter>
    
    </>
  );
}

export default App;
