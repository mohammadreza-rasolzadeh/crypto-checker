import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {RouterProvider} from 'react-router-dom';
import { Provider } from "react-redux";

import {store} from './store';
import { router } from "./routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
