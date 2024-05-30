import "./Book_The_Lulu.scss"

export default function Book_The_Lulu(props: any) {
  return (<>
    <div className="BookALulu" style={{backgroundImage: `url(${props.cover})`}}>
      <div className="BookALulu-3D-deco"></div>
      <div className="BookALulu-shader-1"></div>
      <div className="BookALulu-light"></div>
      <div className="BookALulu-shader-2"></div>
    </div>
  </>)
}