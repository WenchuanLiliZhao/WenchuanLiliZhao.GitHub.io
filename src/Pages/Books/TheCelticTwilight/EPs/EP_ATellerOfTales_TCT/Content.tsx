

import TS from "../../../../../Components/ForAudioBooks/TranscriptSentence";
import Layout from "../../Layout";
import EPInfo from "./EPInfo";

export default function Content() {
  console.log("EP_003")

  return (<>
    <Layout ep={EPInfo}>
      <>
        {/* block 1 */}
        <p id="paragraph-1">
          <TS id="ts-1" time={19}>Many of the tales in this book were told me by one Paddy Flynn, a little bright-eyed old </TS>
          <TS id="ts-2" time={25.400}>man, who lived in a leaky and one-roomed cabin in the village of Ballisodare, which is, he was wont to say, "the most gentle"—whereby he meant faery—"place in the whole of County Sligo. </TS>
          <TS id="ts-3" time={38.300}>Others hold it, however, but second to Drumcliff and Drumahair. The first time I saw him he was cooking mushrooms for himself; the next time he was asleep under a hedge, smiling in his sleep. </TS>
          <TS id="ts-4" time={50.280}>He was indeed always cheerful, though I thought I could see in his eyes (swift as the eyes of a rabbit, when they peered out of their wrinkled holes) </TS>
          <TS id="ts-5" time={59.440}>a melancholy, which was well-nigh a portion of their joy; the visionary melancholy of purely instinctive natures and of all animals. </TS>
        </p>

        {/* block 2 */}
        <p id="paragraph-2">
          <TS id="ts-6" time={72.060}>And yet there was much in his life to depress him, for in the triple solitude of age, eccentricity, and deafness, he went about much pestered by children. It was for this very reason perhaps that he ever recommended mirth and hopefulness. </TS>
          <TS id="ts-7" time={84.900}>He was fond, for instance, of telling how Collumcille cheered up his mother. "'How are you to-day, mother?' said the saint. 'Worse,' replied the mother. 'May you be worse to-morrow,' said the saint. </TS>
          <TS id="ts-8" time={96.600}>The next day Collumcille came again, and exactly the same conversation took place, but the third day the mother said, 'Better, thank God,' and the saint replied, 'May you be better to-morrow.' </TS>
        </p>

        {/* block 3 */}
        <p id="paragraph-3">
          <TS id="ts-9" time={108.400}>He was fond too of telling how the Judge smiles at the last day alike when he rewards the good, and condemns the lost to unceasing flames. He had many strange sights to keep him cheerful, </TS>
          <TS id="ts-10" time={120.620}>or to make him sad. I asked him had he ever seen the faeries, and got the reply, 'Am I not annoyed with them?' I asked too if he had ever seen the banshee. </TS>
          <TS id="ts-11" time={132.300}>'I have seen it,' he said, 'down there by the water, batting the river with its hands.' </TS>
        </p>

        {/* block 4 */}
        <p id="paragraph-4">
          <TS id="ts-12" time={144.880}>I have copied this account of Paddy Flynn, with a few verbal alterations, from a note-book, which I almost filled with his tales and sayings, shortly after seeing him. I look now at the note-book regretfully, for the blank pages at the end will never be filled up. Paddy Flynn is dead. </TS>
          <TS id="ts-13" time={157.500}>A friend of mine gave him a large bottle of whiskey, and though a sober man at most times, the sight of so much liquor filled him with a great enthusiasm, and he lived upon it for some days, and then died. </TS>
          <TS id="ts-14" time={169.580}>His body, worn out with old age and hard times, could not bear the drink as in his young days. He was a great teller of tales, and unlike our common romancers, knew how to empty </TS>
          <TS id="ts-15" time={181.880}>heaven, hell, and purgatory, faeryland and earth, to people his stories. He did not live in a shrunken world, but knew of no less ample circumstance than did Homer himself. Perhaps </TS>
          <TS id="ts-16" time={194.320}>the Gaelic people shall by his like bring back again the ancient simplicity and amplitude of imagination. What is literature but the expression of moods by the vehicle of symbol and incident? </TS>
          <TS id="ts-17" time={204.860}>And are there not moods which need heaven, hell, purgatory, and faeryland for </TS>
          <TS id="ts-18" time={212.000}>their expression, no less than this dilapidated earth? Nay, are there not moods which shall find </TS>
          <TS id="ts-19" time={218.560}>no expression unless there be men who dare to mix heaven, hell, purgatory, and faeryland together, </TS>
          <TS id="ts-20" time={225.620}>or even to set the heads of beasts to the bodies of men, or to thrust the souls of men into the heart of rocks? Let us go forth, the tellers of tales, and seize whatever prey the heart long for, </TS>
          <TS id="ts-21" time={238.680}>and have no fear. Everything exists, everything is true, and the earth is only a little dust under our feet.</TS>
        </p>

      </>
    </Layout>
  </>)
}