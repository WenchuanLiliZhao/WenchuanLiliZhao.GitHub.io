import "./BookHeadlineCard.scss"

import Book_The_Lulu from "./Book_The_Lulu"
import "./BookHeadlineCard.scss"
import { Link } from "react-router-dom";

export default function BookHeadlineCard(props: any) {
  // all info
  const book = props.book;

  const key = `/${book.info.key}`
  const title = book.info.title;
  const authors = book.info.authors;
  const cover = book.info.cover;
  // const publisher = book.publisher.name;
  const brief = book.info.brief;

  const maxDisplayAuthorsCount = 2;
  const authorsCount = authors.length;
  const hiddenAuthorsCount = authorsCount - maxDisplayAuthorsCount

  return (<>
    <Link to={key} className="book-headline-card">
      <div className="book-headline-card-cover">
        <Book_The_Lulu cover={cover}/>
      </div>
      <div className="book-headline-card-info">
        <div className="book-headline-card-title-bar">
          
          <div className="book-headline-card-title">
            {title}
          </div>

          <div className="book-headline-card-authors-bar">
            {authors.slice(0, maxDisplayAuthorsCount).map((item: any, index: any) => (
              <div className="book-headline-card-author" key={`${item}${index}`}>
                {item.data.info.title}
              </div>
            ))}
            {hiddenAuthorsCount > 0 ? (<>
              <span> and {hiddenAuthorsCount} other author{hiddenAuthorsCount > 1 ? "s": ""}</span>
            </>) : (<></>)}
          </div>
        </div>
        <div className="book-headline-card-brief">
          {brief}
        </div>
      </div>
    </Link>
  </>)
}