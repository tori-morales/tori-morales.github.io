import { BrowserRouter, Routes, Route } from "react-router-dom";
import Webpage from "./Webpage.js";
import PodPage from "./Podcast.js";

export function PageRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Webpage />} />
          <Route path="/podcast" element={<PodPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
