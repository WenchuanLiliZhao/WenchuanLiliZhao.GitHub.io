import "./BookCard.scss"

import Book_The_Lulu from "./Book_The_Lulu";

export default function BookCard(props: any) {
  // all info
  const book = props.book;

  const key = `/${book.info.key}`
  const title = book.info.title;
  const authors = book.info.authors;
  const cover = book.info.cover;

  return (<>
    <a href={key} className="book-card">
      <div className="book-card-cover">
        <Book_The_Lulu cover={cover}/>
      </div>
      <div className="book-card-info">
        <div className="book-card-title">
          {title}
        </div>
        <div className="book-card-authors-bar">
          {authors.map((item: any, index: any) => (
            <div className="book-card-author" key={`${item}${index}`}>
              {item.data.info.title}
            </div>
          ))}
        </div>

      </div>
    </a>
  </>)
}
