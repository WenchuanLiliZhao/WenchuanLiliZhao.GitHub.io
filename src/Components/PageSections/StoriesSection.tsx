import "./StoriesSection.scss"

import SectionHeader from "../Heading/SectionHeader";
import StoryHeadlineCard from "../Cards/StoryHeadlineCard";
import StoryCard from "../Cards/StoryCard";

// import StoryCard from "../Card/StoryCard";

export default function StoriesSection(props: any) {

  const headline = props.headline

  var headlineCard = (<></>)
  if (headline != null) {
    headlineCard = (<StoryHeadlineCard story = {headline}/>)
  }

  const stories = props.stories
  console.log(stories)

  return (<>
    <div className="stories-section">
      <SectionHeader title="近期專題" btnLink="" btnText="查看更多" />

      <div className="stories-section-body">
        <div className="stories-section-headline-container">
          {headlineCard}
        </div>

        <div className="stories-section-list-container">
          {stories.map((item: any, i: any) => (
            <StoryCard key={`${item}${i}`} story={item} />
          ))}
        </div>

        {/* <div className="stories-section-list-container">
          <StoryCard
            cover="https://i.pinimg.com/564x/55/ba/7e/55ba7e3bd8b70044ff9be716d5a1fb8e.jpg"
            title="在那桃花盛開的地方"
            brief="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ex nunc, luctus sed lectus ut, porttitor varius lacus. In hac habitasse platea dictumst. Cras quis enim venenatis, ornare lorem non, finibus orci. Aliquam vehicula dictum lobortis. Sed odio urna, facilisis vitae nisl eu, iaculis pretium nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ante lacus, efficitur non semper posuere, porttitor vel arcu. Fusce erat nulla, tristique rutrum ipsum quis, volutpat ultrices ipsum. Curabitur non lorem tristique, venenatis est et, rutrum sapien."
            authorAvata = "https://i.pinimg.com/564x/40/35/8e/40358e3229901880c609441952e749a8.jpg"
            authorName = "安提格涅"
            update = "1493年8月1日"
          />

          <StoryCard
            cover="https://i.pinimg.com/564x/55/ba/7e/55ba7e3bd8b70044ff9be716d5a1fb8e.jpg"
            title="在那桃花盛開的地方"
            brief="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ex nunc, luctus sed lectus ut, porttitor varius lacus. In hac habitasse platea dictumst. Cras quis enim venenatis, ornare lorem non, finibus orci. Aliquam vehicula dictum lobortis. Sed odio urna, facilisis vitae nisl eu, iaculis pretium nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ante lacus, efficitur non semper posuere, porttitor vel arcu. Fusce erat nulla, tristique rutrum ipsum quis, volutpat ultrices ipsum. Curabitur non lorem tristique, venenatis est et, rutrum sapien."
            authorAvata = "https://i.pinimg.com/564x/40/35/8e/40358e3229901880c609441952e749a8.jpg"
            authorName = "安提格涅"
            update = "1493年8月1日"
          />

          <StoryCard
            cover="https://i.pinimg.com/564x/55/ba/7e/55ba7e3bd8b70044ff9be716d5a1fb8e.jpg"
            title="在那桃花盛開的地方"
            brief="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ex nunc, luctus sed lectus ut, porttitor varius lacus. In hac habitasse platea dictumst. Cras quis enim venenatis, ornare lorem non, finibus orci. Aliquam vehicula dictum lobortis. Sed odio urna, facilisis vitae nisl eu, iaculis pretium nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ante lacus, efficitur non semper posuere, porttitor vel arcu. Fusce erat nulla, tristique rutrum ipsum quis, volutpat ultrices ipsum. Curabitur non lorem tristique, venenatis est et, rutrum sapien."
            authorAvata = "https://i.pinimg.com/564x/40/35/8e/40358e3229901880c609441952e749a8.jpg"
            authorName = "安提格涅"
            update = "1493年8月1日"
          />
        </div> */}
      </div>
    </div>
  </>)
}