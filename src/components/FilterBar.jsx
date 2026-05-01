const brands = ["", "Lamborghini", "Ferrari", "Porsche", "BMW", "Mercedes", "Chevrolet", "Audi", "Ford"];

const FilterBar = ({ activeFilter, onFilterChange, searchQuery, onSearchChange }) => (
  <div className="mb-12">
    {/* Search */}
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search by car name..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full max-w-md px-5 py-3 bg-dark-3 text-white border-[1.5px] border-white/10 rounded-lg font-body text-sm outline-none placeholder:text-white/20 focus:border-accent focus:shadow-[0_0_0_3px_rgba(232,255,0,0.1)] transition-all"
        aria-label="Search cars by name"
      />
    </div>

    {/* Brand filters */}
    <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter cars by brand">
      {brands.map((brand) => (
        <button
          key={brand || "all"}
          onClick={() => onFilterChange(brand)}
          className={`px-5 py-2.5 text-[0.8125rem] font-semibold tracking-wider uppercase rounded-full border-[1.5px] cursor-pointer whitespace-nowrap transition-all ${
            activeFilter === brand
              ? "bg-accent text-dark border-accent"
              : "bg-dark-3 text-gray-400 border-white/[0.07] hover:border-accent/40 hover:text-accent"
          }`}
          aria-label={brand ? `Show ${brand}` : "Show all brands"}
        >
          {brand || "All Brands"}
        </button>
      ))}
    </div>
  </div>
);

export default FilterBar;
