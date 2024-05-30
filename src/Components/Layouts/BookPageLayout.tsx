import "./BookPageLayout.scss"

import AudioPlayer4Book from "../ForAudioBooks/AudioPlayer4Book"
import BookTocSideNav from "../Navigations/BookTocSideNav"
import { useEffect, useRef } from "react"
import ArticleDivider from "../Divisions.tsx/ArticleDivider"

export default function BookPageLayout(props: any) {
  
  const book = props.book
  const ep = props.ep
  
  const contentRef = useRef<HTMLDivElement>(null); // 添加ref
  useEffect(() => {
    // 每次 ep 改变时，将 .book-page 的滚动条重置为顶部
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [ep]); // 将 ep 作为依赖，确保每次 ep 改变时触发

  const displayAudioPlayerCondition = (ep.audio != null)
  // console.log(displayAudioPlayerCondition)

  return (<>
    {displayAudioPlayerCondition ? (<AudioPlayer4Book src={ep.audio} />) : (<></>)}
    <BookTocSideNav book={book} />
    <div className="book-page" ref={contentRef}>
      <div className="ep-title-section">
          <h1 className="page-title">{ep.title}</h1>
          {ep.authors != null ? (<>
            <div className="authors">
              {ep.authors.map((author: any, i: any) => (
                <span className="author" key={`${author}${i}`}>
                  {i != 0 ? ", " : ""}
                  {author.data.info.title}
                </span>
              ))}
            </div>
          </>) : (<></>)}
        </div>
        <div className="md">
          <ArticleDivider hidden={true} time={0} />
          {props.children}
          <ArticleDivider hidden={false} />
        </div>
    </div>
  </>)
}