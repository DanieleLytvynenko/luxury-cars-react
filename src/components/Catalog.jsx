import { useState, useMemo } from "react";
import cars from "../data/cars";
import FilterBar from "./FilterBar";
import CarCard from "./CarCard";

const Catalog = () => {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const matchesBrand = !filter || car.brand === filter;
      const matchesSearch = !search || car.title.toLowerCase().includes(search.toLowerCase());
      return matchesBrand && matchesSearch;
    });
  }, [filter, search]);

  return (
    <section className="py-20 pb-24" id="catalog">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">Our Fleet</p>
        <h2 className="font-display text-[clamp(2rem,6vw,3.5rem)] leading-none tracking-wide uppercase mb-10">
          Choose Your Car
        </h2>

        <FilterBar
          activeFilter={filter}
          onFilterChange={setFilter}
          searchQuery={search}
          onSearchChange={setSearch}
        />

        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 min-[900px]:grid-cols-3 min-[1200px]:grid-cols-4 gap-6">
            {filteredCars.map((car, i) => (
              <CarCard key={car.id} car={car} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-500">
            <p>No cars found</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalog;
