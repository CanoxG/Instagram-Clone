import './Scard.css';
import Avatar from '../avatar/Avatar';



export default function SuggestionCard({ size = 'sm' }) {

    return (
        <div className='sCard'>
            <Avatar size={size} src={'/img/me.jpg'} />
            <div className='sCardText'>
                <div>cguven</div>
                <div className='font'>Followed by tnguven</div>
            </div>
        </div>
    )
}