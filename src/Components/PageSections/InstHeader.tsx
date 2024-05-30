import Tag from "../Tags/Tag"
import "./InstHeader.scss"

export default function InstHeader(props: any) {

  const instInfo = props.instInfo
  console.log(instInfo.catagories)
  
  return (<>
    <div className="inst-header-container">
      <div className="inst-header">

        <div className="inst-logo">
          <img src="https://doodleipsum.com/700/flat?i=366f07b78c8218519c32858e70d7e35d" alt="" />
        </div>

        <div className="inst-name">{instInfo.title}</div>

        <div className="inst-caption-info-container">
          <Tag variant="info" fontSize="small" icon="home_pin" text={instInfo.location} />
          <Tag variant="info" fontSize="small" icon="book" text={`${instInfo.bookCount}本書`} />
          <Tag variant="info" fontSize="small" icon="language" text={`${instInfo.language}`} />
        </div>

        <div className="inst-brief">
          {instInfo.brief}
        </div>
        <div className="inst-tags">
          <Tag variant="fill" fontSize="small" text={`${instInfo.catagories[0]}`} />
          <Tag variant="fill" fontSize="small" text={`${instInfo.catagories[1]}`} />
          <Tag variant="fill" fontSize="small" text={`${instInfo.catagories[2]}`} />
        </div>
      </div>
    </div>
  </>)
}