import './TextArea.css';
import '../buttoms/Buttom.css'

export default function TextArea({ children }) {

    return (
        <form className='commentText' method='Post'>
            {children}
            <textarea className='textarea' type='comment' placeholder='Add a comment...' />
        </form>
    )
}