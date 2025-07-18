import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/Header/Header";
import Features from "./components/Features/Features";
import Reviews from "./components/Reviews/Reviews";
import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));
const CamperDetailsPage = lazy(() => import("./pages/CamperDetailsPage"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/campers" element={<CatalogPage />} />
          <Route path="/campers/:id" element={<CamperDetailsPage />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
