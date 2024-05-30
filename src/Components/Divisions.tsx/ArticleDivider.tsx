import "./ArticleDivider.scss"

import TS from "../ForAudioBooks/TranscriptSentence";

export default function ArticleDivider(props: any) {
  var addClass = ""
  if (props.hidden == true) {
    addClass = "hidden"
  } else {
    addClass = ""
  }


  return (<>
    <div className={`article-divider ${addClass}`}>
      <TS time={props.time} className="end-of-article-inner">
        <span className="bullet"></span>
        <span className="bullet"></span>
        <span className="bullet"></span>
      </TS>
    </div>
  </>)
}