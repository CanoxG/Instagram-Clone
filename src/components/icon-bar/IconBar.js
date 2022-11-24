import "./IconBar.css";
import Fav from "../icons/Fav";
import Hearth from "../icons/Hearth";
import Comments from "../icons/Comments";
import Message from "../icons/Message";
import IconBtn from "../icon-buttoms/IconBtn";

export default function IconBar() {
    return (
        <div className="iconBar">
            <IconBtn>
                <Hearth />
            </IconBtn>
            <IconBtn>
                <Comments />
            </IconBtn>
            <IconBtn>
                <Message />
            </IconBtn>
            <IconBtn>
                <Fav />
            </IconBtn>
        </div>
    );
}
