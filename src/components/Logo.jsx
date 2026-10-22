export default function Logo({ className = 'text-2xl' }) {
  return (
    <span className={`inline-flex items-baseline font-display font-bold leading-none ${className}`} aria-label="SJ">
      <span className="text-ink">S</span><span className="text-brand">J</span><span className="ml-0.5 inline-block h-[0.16em] w-[0.16em] rounded-full bg-ink" />
    </span>
  );
}
