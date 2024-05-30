import InstPages from "../../Inst/InstPages"
import RootLayout from "../RootLayout"
import AudioPlayer4Book from "../../../Components/ForAudioBooks/AudioPlayer4Book"

export default function Content() {

  return (<>
    <RootLayout>
      <h1><span className="material-symbols-outlined">home</span>Home 家園 $x^2$ <span className="test">家園</span></h1>
      <AudioPlayer4Book src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Marin_Marais_%281656-1728%29_%E2%80%93_Sonnerie_de_Sainte-Genevi%C3%A8ve_du_Mont_de_Paris_The_Bells_of_St._Genevieve_from_La_Gamme_et_Autres_Morceaux_de_Symphonie_%281723%29.ogg" />
      

      <a href={`/${InstPages.Inst_NBLInst_Home.info.key}`}>Link to Riverwood</a>
    </RootLayout>
  </>)
}