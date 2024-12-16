import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";

import { MyAppRouter } from "./routes/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyAppRouter />
  </StrictMode>
);
