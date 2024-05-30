// import BookPageLayout from "../../../Components/Layouts/BookPageLayout";
import BookPageLayout from "../../../Components/Layouts/BookPageLayout"
import Book_Nahan_LuXun from "./0_Repo"


export default function Layout(props: any) {
  return (<>
    <BookPageLayout book={Book_Nahan_LuXun} ep={props.ep}>
      {props.children}
    </BookPageLayout>
  </>)
}