import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { RouterProvider } from "react-router-dom";
import App from "./App";
import router from "./Router/Router";
import AuthProvider from "./AuthProvider/AuthProvider";
import MainLayout from "./Layout/MainLayout";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <MainLayout></MainLayout>
      </RouterProvider>
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
