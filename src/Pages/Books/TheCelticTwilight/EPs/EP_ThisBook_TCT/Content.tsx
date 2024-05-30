

import TS from "../../../../../Components/ForAudioBooks/TranscriptSentence";
import Layout from "../../Layout";
import EPInfo from "./EPInfo";

export default function Content() {
  console.log("EP_002")

  return (<>
    <Layout ep={EPInfo}>
      <>
        {/* block 1 */}
        <h2>I</h2>

        {/* block 2 */}
        <p>
          <TS time={19.050}>I have desired, like every artist, to create a little world out of the beautiful, pleasant, </TS>
          <TS time={24.970}>and significant things of this marred and clumsy world, and to show in a vision something of the face of Ireland to any of my own people who would look where I bid them. </TS>
          <TS time={35.610}>I have therefore written down accurately and candidly much that I have heard and seen, and, except by way of commentary, nothing that I have merely imagined. </TS>
          <TS time={45.290}>I have, however, been at no pains to separate my own beliefs from those of the peasantry, </TS>
          <TS time={50.890}>but have rather let my men and women, dhouls and faeries, </TS>
          <TS time={54.970}>go their way unoffended or defended by any argument of mine. </TS>
          <TS time={59.890}>The things a man has heard and seen are threads of life, and if he pull them carefully from the confused distaff of memory, </TS>
          <TS time={67.630}>any who will can weave them into whatever garments of belief please them best. </TS>
          <TS time={72.910}>I too have woven my garment like another, but I shall try to keep warm in it, and shall be well content if it do not unbecome me. </TS>
        </p>

        {/* block 3 */}
        <p>
          <TS time={82.210}>Hope and Memory have one daughter and her name is Art, </TS>
          <TS time={84.970}>and she has built her dwelling far from the desperate field where men hang out their garments upon forked boughs to be banners of battle. </TS>
          <TS time={94.250}>O beloved daughter of Hope and Memory, </TS>
          <TS time={97.010}>be with me for a little. </TS>
        </p>

        {/* block 4 */}
        <p>
          <TS time={99.530}>1893. </TS>
        </p>

        {/* block 5 */}
        <h2>II</h2>

        {/* block 6 */}
        <p>
          <TS time={101.930}>I have added a few more chapters in the manner of the old ones, </TS>
          <TS time={105.650}>and would have added others, but one loses, as one grows older, something of the lightness of one's dreams; </TS>
          <TS time={112.250}>one begins to take life up in both hands, </TS>
          <TS time={114.910}>and to care more for the fruit than the flower, </TS>
          <TS time={117.870}>and that is no great loss perhaps. </TS>
          <TS time={120.790}>In these new chapters, as in the old ones, </TS>
          <TS time={123.770}>I have invented nothing but my comments </TS>
          <TS time={126.150}>and one or two deceitful sentences that may keep some poor storyteller's commerce with the devil and his angels, or the like, </TS>
          <TS time={128.330}>from being known among his neighbours. </TS>
          <TS time={136.290}>I shall publish in a little while a big book about the commonwealth of faery, </TS>
          <TS time={140.570}>and shall try to make it systematical and learned enough to buy pardon for this handful of dreams. </TS>
        </p>

        {/* block 7 */}
        <p>
          <TS time={153.110}>1902. </TS>
        </p>

        {/* block 8 */}
        <p>
          <TS time={157.690}><strong>W. B. YEATS.</strong> </TS>
        </p>
      </>
    </Layout>
  </>)
}