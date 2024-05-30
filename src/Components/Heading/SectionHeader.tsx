import { Link } from "react-router-dom"
import "./SectionHeader.scss"

export default function SectionHeader(props: any) {
  return (<>
    <div className="section-header">
      <div className="section-title">{props.title}</div>
      <Link className="section-btn" to={props.btnLink}>{props.btnText}</Link>
    </div>
  </>)
}