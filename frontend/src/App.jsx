import { RouterProvider } from "react-router-dom";
import { router } from "./AppRoutes.jsx";
import "./features/shared/global.scss";
import { AuthProvider } from "./features/auth/auth.context.jsx";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
};

export default App;
