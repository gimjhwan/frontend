import { createMemoryRouter } from "react-router-dom";
//components
import TabList from "@components/TabList";
import { Layout } from "@components/layout/Layout";
//pages
import { EeazyPage } from "@pages/EeazyPage";
import { LoginPage } from "@pages/LoginPage";
import { SqueezePage } from "@pages/SqueezePage";
import { RouterProvider } from "react-router";

const router = createMemoryRouter([
  {
    path: "/",
    element: (
      <Layout>
        <LoginPage />
      </Layout>
    ),
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
    path: "/eezy",
    element: (
      <Layout>
        <EeazyPage />
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
