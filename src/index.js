import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./ejercicio1/app";

import "bootstrap/dist/css/bootstrap.min.css";

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
