import './Suggestion.css';

export default function Suggestion({ style = 'suggestionsText', children, position }) {

    return (
        <div className={`suggestion ${style} ${position}`}>
            {children}
        </div>
    )
}