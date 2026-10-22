import { useEffect, useRef, useState } from 'react';
// Animates ratings and numbers like "3-Star", "2000+", "9.15/10", and "Rank 338" once when scrolled into view.
const re = /^(Rank )?(\d+(?:\.\d+)?)(\+|\/10|-Star)?$/;
export default function CountUp({ value }) {
  const m = re.exec(value);
  const ref = useRef(null);
  const [out, setOut] = useState(value);
  useEffect(() => {
    if (!m || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const target = parseFloat(m[2]);
    const dec = (m[2].split('.')[1] || '').length;
    const fmt = (n) => `${m[1] || ''}${n.toFixed(dec)}${m[3] || ''}`;
    setOut(fmt(0));
    let raf;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min((t - t0) / 1300, 1);
        setOut(fmt(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value]);
  return <span ref={ref}>{out}</span>;
}
