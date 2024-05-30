import InstInfo from "./InstInfo";

import Inst_NBLInst_Home from "./InstRootPages/Home/0_Repo";
import Inst_NBLInst_About from "./InstRootPages/About/0_Repo";
import Inst_NBLInst_Stories from "./InstRootPages/Stories/0_Repo";
import Inst_NBLInst_Library from "./InstRootPages/Library/0_Repo";
import Stories from "./Stories/Stories";


const NBLInst = {
  info: InstInfo,

  pages: {
    Inst_NBLInst_Home,
    Inst_NBLInst_About,
    Inst_NBLInst_Stories,
    Inst_NBLInst_Library,

    ...Stories,
  }
}

export default NBLInst