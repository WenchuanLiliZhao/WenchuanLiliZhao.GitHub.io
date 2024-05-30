import "./StoryCard.scss"

import { Link } from "react-router-dom";


export default function StoryCard(props: any) {
  const story = props.story

  return (<>
  
    <Link to={`/${story.info.key}`} className="story-card">
      <div className="story-cover-container">
        <div className="story-cover">
          <img src={story.info.cover} alt="" />
        </div>
      </div>
      <div className="story-info-container">
        <div className="story-info">
          <div className="story-title">
            {story.info.title}
          </div>
          <div className="story-brief">
            {story.info.brief}
          </div>
          <div className="story-author-info-container">
            <div className="story-author-avata">
              <img src="https://lh6.googleusercontent.com/proxy/Ayyn00YNrmQbNTDBiRF_opMW9p7E9XQGNld3wFfS66i3k2J91zGUOu96QG6cACvtvfTycQoOgWQnTY8NtN5OVjXN0kwFdvxXJvuigPLBoHhLW7LgXfwKJJLZ_O0" alt="" />
            </div>
            <div className="story-author-caption">
              <div className="story-author-name">
                喬托
              </div>
              <span className="story-update">1493年1月1日</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  
  </>)
}