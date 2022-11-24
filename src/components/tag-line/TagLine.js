import './Tagline.css';

export default function TagLine({ style = 'views' }) {

    return (
        <div className='tagLine'>
            <div className='tags'>
                3,5843 views
            </div>
            <div className='tags'>
                <strong>marvel</strong> The moment has arrived 💥 Step into a whole new universe in the first episode of Marvel Studios' @WhatIf…?, now streaming... more
            </div>
            <div className={`tags ${style}`}>
                View all 581 comments
            </div>
            <div className='tags'>
                <strong>anahithovsepian</strong> The episode was great 👍🏽
                dustin_cpd Stop making these you are destroying to legacy of stan lee. How shameful
            </div>
        </div>
    )
}