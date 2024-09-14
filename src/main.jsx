import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/HomePage.jsx";
import SuperHeroesPage from "./components/SuperHeroesPage.jsx";
import RQsuperheroesPage from "./components/RQSuperheroesPage.jsx";
import RQSuperheroPage from "./components/RQSuperheroPage.jsx";
import ParallelQueriesPage from "./components/ParallelQueriesPage.jsx";
import DynamicQuiresPage from "./components/DynamicQuriesPage.jsx";
import DependentQueriesPage from "./components/DependentQueriesPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="superHeroes" element={<SuperHeroesPage />} />
      <Route path="rqsuperheroesPage" element={<RQsuperheroesPage />} />
      <Route
        path="rqsuperheroesPage/:heroId"
        element={<RQSuperheroPage />}
      ></Route>
      <Route path="parallelQueries" element={<ParallelQueriesPage />} />
      <Route path="dynamicQueries" element={<DynamicQuiresPage />} />
      <Route path="rq-dependent-queries" element={<DependentQueriesPage />} />
      <Route path="*" element={<Home />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
