import PageLayout from "./layout/PageLayout";
import Routes from "./routes/Router";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./store/AuthProvider";
import MainProvider from "./store/MainProvider";

function App() {
  return (
    <AuthProvider>
      <ToastContainer />
        <PageLayout>
          <MainProvider>
            <Routes />
          </MainProvider>
        </PageLayout>
    </AuthProvider>
  );
}

export default App;
