import { Link } from "react-router-dom";
import EP_Epigraph_TCT from "./EPs/EP_Epigraph_TCT/0_Repo";
import EP_TheHostingOfTheSidhe_TCT from "./EPs/EP_TheHostingOfTheSidhe_TCT/0_Repo";
import EP_ThisBook_TCT from "./EPs/EP_ThisBook_TCT/0_Repo";

export default function Content() {

  return (<>
  
    關於這本書⋯⋯

    <p>
      <Link to={`/${EP_Epigraph_TCT.info.key}`}>EP0</Link>
    </p>

    <p>
      <Link to={`/${EP_TheHostingOfTheSidhe_TCT.info.key}`}>EP1</Link>
    </p>

    <p>
      <Link to={`/${EP_ThisBook_TCT.info.key}`}>EP2</Link>
    </p>
  
  </>)
}