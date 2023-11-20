import { Routes, Route } from "react-router-dom";
import { DashboardPage, ItemDetailPage } from "../pages";
import { UserContextProvider } from "../context/UserContextProvider";
// import { PrivateRoute } from "./PrivateRoute";

export function UserRoutes() {
  return (
    <UserContextProvider>
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
    </UserContextProvider>
  );
}
