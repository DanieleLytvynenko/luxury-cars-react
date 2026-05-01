import { Link } from "react-router-dom";
import { useBooking } from "../context/BookingContext";

const CarCard = ({ car, index }) => {
  const { selectCar } = useBooking();

  const handleBook = (e) => {
    e.preventDefault();
    selectCar(car.title);
    document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="bg-dark-3 border-[1.5px] border-white/[0.06] rounded-xl overflow-hidden flex flex-col animate-fadeUp hover:border-accent/25 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(232,255,0,0.05)] transition-all duration-300"
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      <Link to={`/car/${car.id}`} className="relative bg-dark-4 aspect-video overflow-hidden group">
        <img
          src={car.image}
          alt={car.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </Link>
      <div className="p-5 flex-1 flex flex-col gap-3">
        <Link to={`/car/${car.id}`}>
          <h3 className="font-display text-xl tracking-wider uppercase leading-tight hover:text-accent transition-colors">
            {car.title}
          </h3>
        </Link>
        <p className="text-[0.8125rem] text-gray-500 leading-relaxed flex-1">{car.text}</p>
        <button
          onClick={handleBook}
          className="w-full py-2.5 px-5 text-xs font-bold tracking-widest uppercase bg-accent text-dark border-none rounded-lg cursor-pointer hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(232,255,0,0.25)] transition-all"
          aria-label={`Book ${car.title}`}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;
