import "./InstNav.scss"


import { useLocation } from 'react-router-dom'; // 1. 从 'react-router-dom' 导入 useLocation 钩子


export default function InstNav(props: any) {
  
  const channels = props.channels

  const location = useLocation(); // 2. 使用 useLocation 钩子获取当前的路径

  return (<>
    <div className="inst-nav">
        
      <div className="item-bar">
        <div className="logo-bar">
          <div className="inst-logo">
            <img src="https://doodleipsum.com/700/flat?i=366f07b78c8218519c32858e70d7e35d" alt="site-logo" />
          </div>
        </div>

        {/* 機構中所有的頻道 */}
        <div className="items">
          {channels.map((item: any, index: any) => (
            <a className={`item ${location.pathname.endsWith(item.info.key) ? 'active' : ''}`} href={`/${item.info.key}`} key={`${item}${index}`}>
              {item.info.title}
            </a>
          ))}
        </div>
      </div>

      <div className="user-bar">
        <div className="avata">
          <img src="https://i.pinimg.com/564x/7d/be/37/7dbe3752a5fa1b1747df3d1147b1d8ca.jpg" alt="" />
        </div>
      </div>
      
    </div>
  </>)
}