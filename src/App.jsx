import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));
const CamperDetailsPage = lazy(() => import("./pages/CamperDetailsPage"));

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/campers" element={<CatalogPage />} />
          <Route path="/campers/:id" element={<CamperDetailsPage />}>
            {/* <Route path="features" element={} /> */}
            {/* <Route path="reviews" element={} /> */}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
