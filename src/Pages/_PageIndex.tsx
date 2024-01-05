import { Route } from "react-router-dom";
import Home from "./Home";

export default function PageIndex() {
  return (
    <>
      <Route index element={<Home />} />
    </>
  )
}