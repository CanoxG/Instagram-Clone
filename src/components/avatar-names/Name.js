import './Name.css'

export default function Name({ align , children, position }) {

    return (
        <div className={`nameText ${align} ${position} `}>
            {children}
        </div>
    )

}