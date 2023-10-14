import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../components/layouts/RootLayout";
import { AutomationPage, DetectionPage, MappingPage } from "../pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route path="/automation" element={<AutomationPage />} />
        <Route path="/mapping" element={<MappingPage />} />
        <Route path="/detection" element={<DetectionPage />} />
      </Route>
    </Route>
  )
);
