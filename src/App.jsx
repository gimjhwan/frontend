import { createMemoryRouter } from "react-router-dom";
// components
import { Layout } from "@components/layout/Layout";
// pages
import { EezyPage } from "@pages/EezyPage";
import { LoginPage } from "@pages/LoginPage";
import { SqueezePage } from "@pages/SqueezePage";
import { RouterProvider } from "react-router";
import { UserSqueezyPage } from "./pages/UserSqueezyPage";
import { SearchPage } from "./pages/SearchPage";
import { AccountPage } from "./pages/AccountPage";
import { SqueezingPage } from "./pages/SqueezingPage";

const router = createMemoryRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/squeeze",
    element: (
      <Layout>
        <SqueezePage />
      </Layout>
    ),
  },
  {
    path : "/squeeze/squeezing",
    element: (
      <Layout>
        <SqueezingPage />
      </Layout>
    ),
  },
  {
    path: "/eezy",
    element: (
      <Layout>
        <EezyPage />
      </Layout>
    ),
  },
  {
    path: "/user",
    element: (
      <Layout>
        <UserSqueezyPage />
      </Layout>
    ),
  },
  {
    path: "/search",
    element: (
      <Layout>
        <SearchPage />
      </Layout>
    ),
  },
  {
    path: "/account",
    element: (
      <Layout>
        <AccountPage />
      </Layout>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
