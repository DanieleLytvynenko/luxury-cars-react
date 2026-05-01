import { createContext, useContext, useState, useCallback } from "react";

const BookingContext = createContext(null);

export const BookingProvider = ({ children }) => {
  const [selectedCar, setSelectedCar] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectCar = useCallback((carTitle) => {
    setSelectedCar(carTitle);
  }, []);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  }, []);

  return (
    <BookingContext.Provider
      value={{ selectedCar, selectCar, isModalOpen, openModal, closeModal }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) throw new Error("useBooking must be used within BookingProvider");
  return context;
};
