import LoginPage from "./log/Login";
import Welcome from "./welcome/Welcome";

import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Routes>
        <Route  path="/" element={<Welcome/>}/>
        <Route  path="/singin" element={<LoginPage/>}/>
    </Routes>
  );
}

export default App;
