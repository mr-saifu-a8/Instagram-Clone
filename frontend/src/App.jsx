import { RouterProvider } from "react-router-dom";
import { router } from "./AppRoutes.jsx";
import "./features/shared/global.scss";
import { AuthProvider } from "./features/auth/auth.context.jsx";
import { PostContextProvider } from "./features/posts/post.context.jsx";

const App = () => {
  return (
    <div>
      <PostContextProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </PostContextProvider>
    </div>
  );
};

export default App;
