import './Header.css';
import AvatarName from '../avatar-names/Name'
import Location from '../location/Location';
import Buttom from '../buttoms/Buttom'
import Ellipsis from '../icons/Ellipsis'

export default function Header({ align = 'baseline', children, name, location }) {

    return (
        <div className='contentHeader'>
            {children}
            <div className='textBar'>
                <AvatarName align={align}>
                    {name}
                </AvatarName>
                <Location location={location} />
                <Buttom>
                    <Ellipsis />
                </Buttom>
            </div>
        </div>
    )
}