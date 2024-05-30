
import Layout from "../../Layout";
import EPInfo from "./EPInfo";

export default function Content() {
  console.log("EP_000")

  return (<>
    <Layout ep={EPInfo}>
      <p>Time drops in decay</p>
      <p>Like a candle burnt out.</p>
      <p>And the mountains and woods</p>
      <p>Have their day, have their day;</p>
      <p>But, kindly old rout</p>
      <p>Of the fire-born moods,</p>
      <p>You pass not away.</p>
    </Layout>
  </>)
}