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
  OverviewPage,
  ProfilePage,
  RegisterPage,
  ResetPage,
} from "../pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<OverviewPage />} />
        <Route path="/automation" element={<AutomationPage />} />
        <Route path="/detection" element={<DetectionPage />} />
        <Route path="/mapping" element={<MappingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route index element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="forgot" element={<ForgotPage />} />
        <Route path="reset" element={<ResetPage />} />
      </Route>
    </Route>
  )
);
