import useScrollReveal from "../hooks/useScrollReveal";

const steps = [
  { num: "01", title: "Choose a Car", text: "Use the brand filter and pick the one that excites you the most." },
  { num: "02", title: "Book It", text: "Fill in the form — your name, phone number and the car you want." },
  { num: "03", title: "We'll Call You", text: "We'll discuss the details and confirm your booking within an hour." },
];

const HowItWorks = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="py-20 bg-dark-2 border-t border-b border-white/[0.04]" id="how">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">Simple & Fast</p>
        <h2 className="font-display text-[clamp(2rem,6vw,3.5rem)] leading-none tracking-wide uppercase mb-10">How It Works</h2>

        <div
          ref={ref}
          className={`flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {steps.map((step, i) => (
            <div key={step.num} className="contents">
              <div className="flex-1 bg-dark-3 border border-white/[0.06] rounded-xl p-8 text-center md:text-left hover:border-accent/30 hover:-translate-y-1 transition-all">
                <div className="font-display text-5xl text-accent leading-none mb-4 opacity-90">{step.num}</div>
                <h3 className="text-base font-bold uppercase tracking-wider mb-2.5">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.text}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block text-2xl text-accent/40 shrink-0 pt-10">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
