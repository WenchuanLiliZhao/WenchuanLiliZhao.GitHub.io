import Pages from "../Pages/__PageIndex";
import NavLinkToTop from "./NavLinkToTop";

export default function Nav() {

  return (
    <div className="lili-nav">
      {Object.values(Pages).map((item: any, index: any) => (
        <div className="nav-item" key={`${item}${index}`}>
          <NavLinkToTop to={item.key} id={item.key} className={item.key}>
            {item.pageTitle}
          </NavLinkToTop>
        </div>
      ))}
    </div>
  )
}