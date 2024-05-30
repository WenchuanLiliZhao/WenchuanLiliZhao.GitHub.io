import "./BooksSection.scss"

import BookCard from "../Cards/BookCard";
import BookHeadlineCard from "../Cards/BookHeadlineCard";
import SectionHeader from "../Heading/SectionHeader";

export default function BooksSection(props: any) {
  const sectionTitle = props.sectionTitle;
  const btnLink = props.btnLink;
  const btnText = props.btnText;
  
  const headline = props.headline;
  const books = props.books;

  return (<>
    <div className="books-section">
      <SectionHeader title={sectionTitle} btnLink={btnLink} btnText={btnText} />

      <div className="books-section-body">
        <div className="books-section-headline-container">
          <BookHeadlineCard book={headline}/>
        </div>

        <div className="books-section-list">
          {books.map((item: any, index: any) => (
            <div key={`${item}${index}`}>
              <BookCard book={item}/>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  </>)
}