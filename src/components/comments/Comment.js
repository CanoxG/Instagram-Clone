import './Comment.css';
import CommentLine from '../comment-line/CommentLine';
import TextArea from '../textarea/TextArea'
import {Smile} from '../icons/Smile'
import IconBar from '../icon-bar/IconBar'
import IconBtn from '../icon-buttoms/IconBtn';
import TagLine from '../tag-line/TagLine';
import Buttom from '../buttoms/Buttom'



export default function Comment({ color = 'blue' }) {

    return (
        <div className='comment'>
            <CommentLine>
                <IconBar />
            </CommentLine>
            <CommentLine>
                <TagLine />
            </CommentLine>
            <CommentLine>
                <TextArea>
                    <IconBtn>
                        <Smile />
                    </IconBtn>
                    <Buttom color={color}>
                        Post
                    </Buttom>
                </TextArea>
            </CommentLine>
        </div>
    )
}