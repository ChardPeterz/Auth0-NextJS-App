import React from "react";
import ReactDOMClient from "react-dom/client";
import { LoginPage } from "./screens/LoginPage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<LoginPage />);
