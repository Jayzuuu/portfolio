import { useState } from "react";

export default function FlipCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      style={{ perspective: "1000px" }}
      className="w-[400px] h-[250px] md:w-[500px] md:h-[300px] cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.7s",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
        className="relative w-full h-full"
      >
        {/* Front */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className="absolute w-full h-full rounded-2xl shadow-lg overflow-hidden"
        >
          <img
            src="/projects/callingcard/frontpic.png"
            alt="Front"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Back */}
        <div
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          className="absolute w-full h-full rounded-2xl shadow-lg overflow-hidden"
        >
          <img
            src="/projects/callingcard/backpic.png"
            alt="Back"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
