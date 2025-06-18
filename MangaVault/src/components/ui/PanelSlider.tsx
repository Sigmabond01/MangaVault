const PanelSlider = () => {
  const images = [
    "/src/assets/ftbg.jpg",
    "/src/assets/aotbg.jpg",
    "/src/assets/gojo.jpg",
    "/src/assets/goku.jpg",
    "/src/assets/yuta.jpg"
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background carousel */}
      <div className="absolute inset-0 z-0">
        <div className="carousel-track flex w-[200%] animate-carousel">
          {[...images, ...images].map((src, i) => (
            <img
              key={i}
              src={src}
              className="w-[20vw] h-full object-cover grayscale opacity-100"
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PanelSlider;
