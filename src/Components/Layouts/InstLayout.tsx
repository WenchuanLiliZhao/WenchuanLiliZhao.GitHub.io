import "./InstLayout.scss"

import Footer from "../Navigations/Footer";
import InstNav from "../Navigations/InstNav";


export default function InstLayout(props: any) {
  const channels = props.channels;
  return (<>
    <div className="inst-layout">
      <InstNav channels={channels} />
      <div className="inst-body">
        {props.children}

        <Footer />
      </div>
    </div>
  </>)
}