import AudioPlayer4Book from "../../../Components/ForAudioBooks/AudioPlayer4Book";
import RootLayout from "../RootLayout";

export default function Content() {
  return (<>
    <RootLayout>
      <AudioPlayer4Book src="https://upload.wikimedia.org/wikipedia/commons/6/61/Marin_Marais_%281656-1728%29_-_Tombeau_de_Mr._Meliton%2C_No._83_from_Premier_livre_de_pi%C3%A8ces_%C3%A0_une_et_%C3%A0_deux_violes_%281689%29.ogg" />

      About
    </RootLayout>
  </>)
}