import "./Avatar.css";


export default function Avatar({ size,  src }) {
  return (
    <div className={`profile ${size}`}>
      <img className={`avatar ${size}`}  src={src} alt="Profile Avatar" />
    </div>
  )
}
