import { NavLink } from "react-router-dom"

function NavLinkToTop(props: any) {
  const handleClick = () => {
    window.scroll(0, 0); // Scroll to the top of the page
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