export function Background({ children, overlayOpacity = 0.5, blur = 3 }) {
  return (
    <div className="relative bg-white">
      <div
        className="h-screen relative overflow-hidden"
        style={{
          backgroundImage: `url('/images/bg2.jpg')`, // Dynamic background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: `blur(${blur})`, // Dynamic blur effect
        }}
      >
        {/* Semi-transparent overlay with dynamic opacity */}
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        ></div>
      </div>
      {/* Render children on top of the background */}
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
