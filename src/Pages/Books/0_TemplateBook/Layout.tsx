// import BookPageLayout from "../../../Components/Layouts/BookPageLayout";
import BookPageLayout from "../../../Components/Layouts/BookPageLayout"
import TemplateBook from "./0_Repo"


export default function Layout(props: any) {
  return (<>
    <BookPageLayout book={TemplateBook} ep={props.ep}>
      {props.children}
    </BookPageLayout>
  </>)
}