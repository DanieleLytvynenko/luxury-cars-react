import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookingProvider } from "./context/BookingContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import HomePage from "./pages/HomePage";
import CarPage from "./pages/CarPage";

const App = () => (
  <BrowserRouter basename="/luxury-cars-react">
    <BookingProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/car/:id" element={<CarPage />} />
      </Routes>
      <Footer />
      <Modal />
    </BookingProvider>
  </BrowserRouter>
);

export default App;
