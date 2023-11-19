import { Routes, Route } from "react-router-dom";
import { DashboardPage, ItemDetailPage } from "../pages";
import { PrivateRoute } from "./PrivateRoute";

export function UserRoutes() {
  return (
    <main>
      <Routes>
        <Route
          path="/dashboard"
          element={
            // <PrivateRoute>
            <DashboardPage />
            // </PrivateRoute>
          }
        />
        <Route
          path="/detail"
          element={
            // <PrivateRoute>
            <ItemDetailPage />
            // </PrivateRoute>
          }
        />
      </Routes>
    </main>
  );
}
