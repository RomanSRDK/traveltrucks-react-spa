import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";

// Supports weights 100-900
import "@fontsource-variable/inter";
import "modern-normalize/modern-normalize.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
    <Toaster position="top-center" reverseOrder={false} />
  </StrictMode>
);
