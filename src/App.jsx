import { Routes, Route } from "react-router-dom"
import Home from "./components/home";


export default function App() {
  return (
    <Routes>
      <Route path="/:nameTo" element={<Home />}></Route>
    </Routes>
  );
}
