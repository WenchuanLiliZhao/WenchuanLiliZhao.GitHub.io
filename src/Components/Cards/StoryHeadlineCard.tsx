import { Link } from "react-router-dom"
import "./StoryHeadlineCard.scss"
import DateFormat from "../../Functions.tsx/DateFormat"

export default function StoryHeadlineCard(props: any) {
  const story = props.story.info

  return (<>
    <Link to={`/${story.key}`} className="story-headline-card">
      <div className="story-cover-container">
        <div className="story-cover">
          <img src={story.cover} alt="" />
        </div>
      </div>
      <div className="story-info-container">
        <div className="story-info">
          <div className="story-title">
            {story.title}
          </div>
          <div className="story-brief">
            {story.brief}
          </div>
          <div className="story-author-info-container">
            <div className="story-author-avata">
              <img src="https://lh6.googleusercontent.com/proxy/Ayyn00YNrmQbNTDBiRF_opMW9p7E9XQGNld3wFfS66i3k2J91zGUOu96QG6cACvtvfTycQoOgWQnTY8NtN5OVjXN0kwFdvxXJvuigPLBoHhLW7LgXfwKJJLZ_O0" alt="author" />
            </div>
            <div className="story-author-caption">
              <div className="story-author-name">
                喬托
              </div>
              <span className="story-update">{DateFormat({date: story.update})}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </>)
}