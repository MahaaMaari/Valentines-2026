import { Routes, Route } from "react-router-dom";
import Forever from "./Forever";
import Dreams from "./Dreams";
import Travel from "./Travel";
import Last from "./Last";
import Final from "./Final";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Travel />} />
      <Route path="/two" element={<Dreams />} />
      <Route path="/three" element={<Forever/>}/>
      <Route path="/four" element={<Last/>}/>
      <Route path="/five" element={<Final/>}/>
    </Routes>
  );
}

export default App;
