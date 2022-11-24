import './CommentLine.css';

export default function CommentLine({ children }) {

    return (
        <div className='commentLine'>
            {children}
        </div>
    )
}