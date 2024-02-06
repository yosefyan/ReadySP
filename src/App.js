import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PageLayout from "./layout/PageLayout";
import Routes from "./routes/Router";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./store/AuthProvider";
import MainProvider from "./store/MainProvider";
function App() {
    return (_jsxs(AuthProvider, { children: [_jsx(ToastContainer, {}), _jsx(PageLayout, { children: _jsx(MainProvider, { children: _jsx(Routes, {}) }) })] }));
}
export default App;
