import { useRef, useState } from "react";

export default function useMagnetic(strength = 0.3) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: x * strength, y: y * strength });
  };

  const onMouseLeave = () => setOffset({ x: 0, y: 0 });

  return { ref, offset, onMouseMove, onMouseLeave };
}
