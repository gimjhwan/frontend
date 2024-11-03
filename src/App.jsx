import { createMemoryRouter } from "react-router-dom";
// components
import { Layout } from "@components/layout/Layout";
// pages
import { EezyPage } from "@pages/EezyPage";
import { LoginPage } from "@pages/LoginPage";
import { SqueezePage } from "@pages/SqueezePage";
import { RouterProvider, useNavigate } from "react-router";
import { useEffect } from "react";

const router = createMemoryRouter([
  {
    path: "/",
    element: <LoginPageWrapper />,
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
        <EezyPage />
      </Layout>
    ),
  },
]);

function LoginPageWrapper() {
  const navigate = useNavigate();

  useEffect(() => {
    chrome.storage.local.get(["type"], (result) => {
      if (result.type === "eezy") {
        navigate("/eezy");
      } else if (result.type === "squeeze") {
        navigate("/squeeze");
      }
      chrome.storage.local.remove(["type"]);
    });
  }, [navigate]);

  return (
    <Layout>
      <LoginPage />
    </Layout>
  );
}

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
