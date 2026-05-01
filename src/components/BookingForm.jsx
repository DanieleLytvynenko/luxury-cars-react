import { useState, useEffect, useRef } from "react";
import { useBooking } from "../context/BookingContext";
import cars from "../data/cars";
import orderCar from "../assets/order-car.png";
import useScrollReveal from "../hooks/useScrollReveal";

const BookingForm = () => {
  const { selectedCar, selectCar, openModal } = useBooking();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const nameRef = useRef(null);
  const [ref, isVisible] = useScrollReveal();

  useEffect(() => {
    if (selectedCar && nameRef.current) {
      setTimeout(() => nameRef.current?.focus(), 600);
    }
  }, [selectedCar]);

  const validate = () => {
    const newErrors = {};
    if (!selectedCar) newErrors.car = "Please select a car";
    if (!name.trim() || name.trim().length < 2) newErrors.name = "Please enter your name";
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,8}$/;
    if (!phone.trim() || !phoneRegex.test(phone.replace(/\s/g, ""))) newErrors.phone = "Please enter a valid phone number";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate() || isSubmitting) return;

    setIsSubmitting(true);
    setTimeout(() => {
      openModal();
      setName("");
      setPhone("");
      selectCar("");
      setErrors({});
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <section className="py-20 bg-dark-2 border-t border-white/[0.04]" id="order">
      <div
        ref={ref}
        className={`max-w-[1280px] mx-auto px-5 md:px-10 flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-20 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Image */}
        <div className="flex-1 flex justify-center items-center">
          <img src={orderCar} alt="Book a car" className="w-full max-w-[440px] drop-shadow-[0_20px_50px_rgba(232,255,0,0.1)]" />
        </div>

        {/* Form */}
        <div className="flex-1">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">Booking Form</p>
          <h2 className="font-display text-[clamp(2rem,6vw,3.5rem)] leading-none tracking-wide uppercase mb-10">
            Book Your<br />Dream Car Now
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-9 -mt-5">
            Fill in your contact details — we'll call you back to discuss the details and confirm your booking.
          </p>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
            {/* Car select */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-widest uppercase text-gray-400" htmlFor="carSelect">Car</label>
              <div className="relative">
                <select
                  id="carSelect"
                  value={selectedCar}
                  onChange={(e) => { selectCar(e.target.value); setErrors((p) => ({ ...p, car: undefined })); }}
                  className={`w-full py-3.5 px-4 bg-dark-3 text-white border-[1.5px] rounded-lg font-body text-[0.9375rem] outline-none appearance-none cursor-pointer transition-all ${
                    errors.car ? "border-red-500 shadow-[0_0_0_3px_rgba(255,59,59,0.1)]" : "border-white/10 focus:border-accent focus:shadow-[0_0_0_3px_rgba(232,255,0,0.1)]"
                  }`}
                >
                  <option value="">— Select a car —</option>
                  {cars.map((c) => (
                    <option key={c.id} value={c.title}>{c.title}</option>
                  ))}
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">▾</span>
              </div>
              {errors.car && <span className="text-xs text-red-500">{errors.car}</span>}
            </div>

            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-widest uppercase text-gray-400" htmlFor="nameInput">Your Name</label>
              <input
                ref={nameRef}
                id="nameInput"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: undefined })); }}
                className={`w-full py-3.5 px-4 bg-dark-3 text-white border-[1.5px] rounded-lg font-body text-[0.9375rem] outline-none placeholder:text-white/20 transition-all ${
                  errors.name ? "border-red-500 shadow-[0_0_0_3px_rgba(255,59,59,0.1)]" : "border-white/10 focus:border-accent focus:shadow-[0_0_0_3px_rgba(232,255,0,0.1)]"
                }`}
              />
              {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-widest uppercase text-gray-400" htmlFor="phoneInput">Your Phone</label>
              <input
                id="phoneInput"
                type="tel"
                placeholder="+1 555 000 0000"
                value={phone}
                onChange={(e) => { setPhone(e.target.value); setErrors((p) => ({ ...p, phone: undefined })); }}
                className={`w-full py-3.5 px-4 bg-dark-3 text-white border-[1.5px] rounded-lg font-body text-[0.9375rem] outline-none placeholder:text-white/20 transition-all ${
                  errors.phone ? "border-red-500 shadow-[0_0_0_3px_rgba(255,59,59,0.1)]" : "border-white/10 focus:border-accent focus:shadow-[0_0_0_3px_rgba(232,255,0,0.1)]"
                }`}
              />
              {errors.phone && <span className="text-xs text-red-500">{errors.phone}</span>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 text-sm font-semibold tracking-wider uppercase bg-accent text-dark border-2 border-accent rounded-lg cursor-pointer hover:bg-accent-dark hover:border-accent-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(232,255,0,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Book Now"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
