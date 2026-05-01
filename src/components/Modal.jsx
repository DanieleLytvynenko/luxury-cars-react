import { useEffect } from "react";
import { useBooking } from "../context/BookingContext";

const Modal = () => {
  const { isModalOpen, closeModal } = useBooking();

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === "Escape") closeModal(); };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [closeModal]);

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-5">
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={closeModal} />
      <div className="relative z-10 bg-dark-3 border-[1.5px] border-white/10 rounded-xl p-12 text-center max-w-[420px] w-full animate-fadeUp">
        <div className="w-16 h-16 bg-accent text-dark rounded-full text-3xl font-bold flex items-center justify-center mx-auto mb-6">
          ✓
        </div>
        <h3 className="font-display text-3xl tracking-wider uppercase mb-3">Request Submitted!</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-8">
          We'll call you shortly to confirm your booking.
        </p>
        <button
          onClick={closeModal}
          className="px-8 py-3.5 text-sm font-semibold tracking-wider uppercase bg-accent text-dark border-2 border-accent rounded-lg cursor-pointer hover:bg-accent-dark hover:border-accent-dark transition-all"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
