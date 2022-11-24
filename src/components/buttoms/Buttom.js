import './Buttom.css';


export default function Button({ color, children }) {

    return (
        <button className={`btn ${color}`}>
            {children}
        </button>
    )
}