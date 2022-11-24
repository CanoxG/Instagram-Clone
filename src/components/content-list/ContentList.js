import './ContentList.css';

const ContentList = function ({ children }) {

    return (
        <div className='contentList'>
            <ul>
                {children}
            </ul>
        </div>
    )
}

export default ContentList;