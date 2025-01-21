import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MasterLayout from "./layout/MasterLayout";
import HomePage from "./screen/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<h3>Loading...</h3>}>
        <MasterLayout />
      </Suspense>
    ),
    errorElement: <h2>Error Loading page</h2>,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<h3>Loading...</h3>}>
            <HomePage />
          </Suspense>
        ),
      },
    ],
  },
]);
