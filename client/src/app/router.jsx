import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { AuthLayout, DashboardLayout } from "../components";
import {
  AutomationPage,
  DetectionPage,
  ForgotPage,
  LoginPage,
  MappingPage,
  RegisterPage,
  ResetPage,
} from "../pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<AutomationPage />} />
        <Route path="/detection" element={<DetectionPage />} />
        <Route path="/mapping" element={<MappingPage />} />
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="forgot" element={<ForgotPage />} />
        <Route path="reset" element={<ResetPage />} />
      </Route>
    </Route>
  )
);
