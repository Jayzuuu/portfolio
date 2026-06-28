import { useState } from "react";

export default function FlipCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      style={{ perspective: "1000px" }}
      className="h-[210px] w-full max-w-[500px] cursor-pointer cursor-hover sm:h-[260px] md:h-[300px]"
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
          className="absolute h-full w-full overflow-hidden rounded-lg bg-slate-900 shadow-lg"
        >
          <img
            src="/projects/callingcard/frontpic.png"
            alt="Front"
            className="w-full h-full object-cover"
            onError={(e) => (e.target.style.display = "none")}
          />
        </div>

        {/* Back */}
        <div
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          className="absolute h-full w-full overflow-hidden rounded-lg bg-slate-900 shadow-lg"
        >
          <img
            src="/projects/callingcard/backpic.png"
            alt="Back"
            className="w-full h-full object-cover"
            onError={(e) => (e.target.style.display = "none")}
          />
        </div>
      </div>
    </div>
  );
}
