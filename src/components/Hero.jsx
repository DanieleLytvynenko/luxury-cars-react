import mainCar from "../assets/main-car.png";

const Hero = () => (
  <section className="relative min-h-screen pt-20 flex items-center overflow-hidden" id="hero">
    {/* Background */}
    <div className="absolute inset-0 bg-dark z-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_70%_60%,rgba(232,255,0,0.05)_0%,transparent_60%),radial-gradient(ellipse_80%_60%_at_20%_40%,rgba(255,255,255,0.02)_0%,transparent_50%)]" />
    </div>

    <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-0 py-5 pb-16 text-center lg:text-left">
      {/* Content */}
      <div className="flex-1 z-10">
        <p className="inline-block text-[0.7rem] font-bold tracking-[0.3em] uppercase text-accent bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20 mb-5">
          Premium Rental
        </p>
        <h1 className="font-display text-[clamp(3rem,10vw,6.5rem)] leading-[0.95] tracking-wide uppercase mb-6">
          Conquer the<br />
          <span className="text-accent">roads</span> behind<br />
          the wheel of<br />legendary cars
        </h1>
        <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-400 leading-relaxed max-w-[460px] mx-auto lg:mx-0 mb-9">
          From exclusive supercars to racing masterpieces — choose your dream, get behind the wheel and feel the power of a premium car.
        </p>
        <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
          <button onClick={() => document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-wider uppercase bg-accent text-dark border-2 border-accent rounded-lg hover:bg-accent-dark hover:border-accent-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(232,255,0,0.3)] transition-all cursor-pointer">
            View Cars
          </button>
          <button onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-wider uppercase bg-transparent text-white border-2 border-white/30 rounded-lg hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all cursor-pointer">
            Book Now
          </button>
        </div>
      </div>

      {/* Car image */}
      <div className="flex-1 flex justify-center lg:justify-end items-center lg:-mr-20 lg:-mt-16">
        <img
          src={mainCar}
          alt="Lamborghini"
          className="w-full max-w-[620px] lg:max-w-[860px] drop-shadow-[0_20px_60px_rgba(232,255,0,0.15)] animate-float"
        />
      </div>
    </div>

    {/* Scroll hint */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
      <span className="block w-6 h-10 border-2 border-white/20 rounded-xl relative">
        <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-2 bg-accent rounded-sm animate-scrollHint" />
      </span>
    </div>
  </section>
);

export default Hero;
