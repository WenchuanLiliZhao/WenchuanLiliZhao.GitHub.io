import TemplateBook from "./0_TemplateBook/0_Repo";
import Book_Nahan_LuXun from "./NaHan_LuXun/0_Repo";
import Book_TheCelticTwilight from "./TheCelticTwilight/0_Repo";

const BookPages = {
  ...TemplateBook.eps,
  ...Book_TheCelticTwilight.eps,
  ...Book_Nahan_LuXun.eps,
}

export default BookPages