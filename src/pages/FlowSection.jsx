const BackgroundPattern = () => {
  return (
    <section className="relative min-h-[600px] bg-[#F5F6FF] overflow-hidden">
      <div className="absolute inset-0">
        {/* Center Logo with Rings */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Rings */}
          <svg width="300" height="300" viewBox="0 0 300 300" fill="none" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <rect x="75" y="75" width="150" height="150" rx="40" stroke="#5570F1" strokeWidth="1" strokeOpacity="0.1"/>
            <rect x="50" y="50" width="200" height="200" rx="50" stroke="#5570F1" strokeWidth="1" strokeOpacity="0.08"/>
            <rect x="25" y="25" width="250" height="250" rx="60" stroke="#5570F1" strokeWidth="1" strokeOpacity="0.06"/>
          </svg>
          
          {/* Logo */}
          <div className="relative bg-[#5570F1] w-24 h-24 rounded-[24px] flex items-center justify-center shadow-lg">
            <span className="text-white text-lg font-medium">certifysend</span>
          </div>
        </div>

        {/* Corner Patterns */}
        <svg width="300" height="300" viewBox="0 0 300 300" className="absolute left-0 top-0" fill="none">
          {[...Array(10)].map((_, i) => (
            <line
              key={`line-${i}`}
              x1={i * 20}
              y1={0}
              x2={(i + 3) * 20}
              y2={100}
              stroke="#5570F1"
              strokeWidth="1"
              strokeOpacity="0.2"
            />
          ))}
        </svg>

        <svg width="300" height="300" viewBox="0 0 300 300" className="absolute right-0 top-0" fill="none">
          {[...Array(10)].map((_, i) => (
            <line
              key={`line-${i}`}
              x1={300 - i * 20}
              y1={0}
              x2={300 - (i + 3) * 20}
              y2={100}
              stroke="#5570F1"
              strokeWidth="1"
              strokeOpacity="0.2"
            />
          ))}
        </svg>

        {/* Sparkles */}
        <svg className="absolute left-1/2 top-[30%]" width="16" height="16" viewBox="0 0 16 16">
          <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" fill="#5570F1" fillOpacity="0.3"/>
        </svg>

        {/* Dotted Line */}
        <svg className="absolute left-1/2 top-1/2 -translate-y-1/2" width="400" height="2" viewBox="0 0 400 2">
          <path d="M0 1H400" stroke="#5570F1" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.3"/>
        </svg>

      </div>
    </section>
  );
};

export default BackgroundPattern;