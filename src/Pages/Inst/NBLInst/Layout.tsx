import InstLayout from "../../../Components/Layouts/InstLayout";
import Inst_NBLInst_About from "./InstRootPages/About/0_Repo";
import Inst_NBLInst_Home from "./InstRootPages/Home/0_Repo";
import Inst_NBLInst_Library from "./InstRootPages/Library/0_Repo";
import Inst_NBLInst_Stories from "./InstRootPages/Stories/0_Repo";

export default function RiverwoodLayout(props: any) {
  

  const channels = [
    Inst_NBLInst_Home,
    Inst_NBLInst_Library,
    Inst_NBLInst_Stories,
    Inst_NBLInst_About,
  ]

  
  return (<>
    <InstLayout channels={channels}>
      {props.children}
    </InstLayout>
  </>)
}