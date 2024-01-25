import PageLayout from "./layout/PageLayout";
import Routes from "./routes/Router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <PageLayout>
        <Routes />
      </PageLayout>
    </>
  );
}

export default App;
