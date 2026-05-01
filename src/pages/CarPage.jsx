import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import cars from "../data/cars";
import { useBooking } from "../context/BookingContext";

const CarPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selectCar } = useBooking();
  const car = cars.find((c) => c.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="font-display text-4xl mb-4">Car Not Found</h2>
          <Link to="/" className="text-accent hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const handleBook = () => {
    selectCar(car.title);
    navigate("/");
    setTimeout(() => {
      document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const specLabels = {
    engine: "Engine",
    power: "Power",
    torque: "Torque",
    speed: "Top Speed",
    acceleration: "0–100 km/h",
    drive: "Drivetrain",
  };

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/" className="text-sm text-gray-500 hover:text-accent transition-colors">← Back to Fleet</Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Image */}
          <div className="flex-1">
            <div className="bg-dark-3 rounded-xl overflow-hidden border border-white/[0.06]">
              <img
                src={car.image}
                alt={car.title}
                className="w-full aspect-video object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 lg:max-w-md">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">{car.brand}</p>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-wide uppercase mb-6">
              {car.title}
            </h1>
            <p className="text-gray-400 leading-relaxed mb-10">{car.text}</p>

            {/* Specs grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {Object.entries(car.specs).map(([key, value]) => (
                <div key={key} className="bg-dark-3 border border-white/[0.06] rounded-lg p-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{specLabels[key]}</p>
                  <p className="text-lg font-semibold">{value}</p>
                </div>
              ))}
            </div>

            <button
              onClick={handleBook}
              className="w-full py-4 text-sm font-semibold tracking-wider uppercase bg-accent text-dark border-2 border-accent rounded-lg cursor-pointer hover:bg-accent-dark hover:border-accent-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(232,255,0,0.3)] transition-all"
            >
              Book This Car
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CarPage;
