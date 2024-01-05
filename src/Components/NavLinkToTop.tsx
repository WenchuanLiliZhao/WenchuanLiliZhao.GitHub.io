import { NavLink } from "react-router-dom"

function NavLinkToTop(props: any) {
  const handleClick = () => {
    window.scroll(0, 0); // Scroll to the top of the page
    document.querySelectorAll(".lili-window-content.scroll-y")[0].scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  return (
    <>
      <NavLink to={`${props.to}`} className={`lili-link-to-top ${props.className}`} id={`${props.id}`} onClick={handleClick} target={props.target}>
        {props.children}
      </NavLink>
    </>
  )
}

export default NavLinkToTop;