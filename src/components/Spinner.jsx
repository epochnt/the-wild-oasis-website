export function Spinner({ size = 'md' }) {
  return <div className={`${size === 'sm' ? 'spinner-mini' : 'spinner'}`}></div>
}
