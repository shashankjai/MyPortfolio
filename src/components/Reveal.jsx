import useReveal from '../hooks/useReveal';
// stagger: children animate in one after another (set style={{'--i': index}} on each child)
export default function Reveal({ as: Tag = 'div', stagger = false, className = '', children, ...rest }) {
  const ref = useReveal();
  return <Tag ref={ref} className={`${stagger ? 'stg' : 'reveal'} ${className}`} {...rest}>{children}</Tag>;
}
