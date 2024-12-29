import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { MyAppRouter } from "./routes/index.jsx";
import { Provider } from "react-redux";
import { store } from "./sotre.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <MyAppRouter />
  </Provider>
);
