import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Requests from "./requests/Requests";
import RequestDetail from "./requests/RequestDetail";
import DonorRegistration from "./donors/DonorRegistration";
import Login from "./auth/Login";
import About from "./About";
import NotFound from "./NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="requests" element={<Requests />} />
          <Route path="requests/:id" element={<RequestDetail />} />
          <Route path="donate" element={<DonorRegistration />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
