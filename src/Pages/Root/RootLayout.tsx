import { NavLink } from "react-router-dom";
import RootPages from "./RootPages";

export default function RootLayout(props: any) {
  return (<>
    <nav className="root-page-nav">
      <div>
        <NavLink to={`/${RootPages.RootPage_Home.info.key}`}>Home</NavLink>
      </div>
      <div>
        <NavLink to={`/${RootPages.RootPage_About.info.key}`}>About</NavLink>
      </div>
    </nav>
    ===============
    {props.children}
    </>)
}