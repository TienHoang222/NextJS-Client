import Link from "next/link";
const Sidebar = () => {
  return (
    <div className="db__wrapper">
      <label
        htmlFor="db__hambuger-mobile-input"
        className="db__hambuger-mobile"
      >
        <i className="db__hambuger-mobile-icon fa-solid fa-bars"></i>
      </label>
      <input
        type="checkbox"
        className="db__hambuger-mobile-input"
        id="db__hambuger-mobile-input"
        hidden
      ></input>
      <div className="db__sidebar">
        <div className="db__header-mobile">
          <div className="db__header-mobile-icon">
            <i className="fa-solid fa-circle-user"></i>
          </div>
          <div className="db__header-mobile-title">Welcome John</div>
        </div>
        <div className="db__sidebar-header">
          <i className="db__sidebar-header-icon fa-solid fa-layer-group"></i>
          <span>Device Manager</span>
        </div>
        <div className="db__sidebar-menu-wrapper">
          <ul className="db__sidebar-menu">
            <li className="db__sidebar-menu-item">
              <Link href="./dashboard" className="db__sidebar-menu-item-link">
                <i className="db__sidebar-menu-item-icon fa-solid fa-house"></i>
                <span>DashBoard</span>
              </Link>
            </li>
            <li className="db__sidebar-menu-item">
              <Link href="./logs" className="db__sidebar-menu-item-link">
                <i className="db__sidebar-menu-item-icon fa-solid fa-clock-rotate-left"></i>
                <span>Logs</span>
              </Link>
            </li>
            <li className="db__sidebar-menu-item">
              <a className="db__sidebar-menu-item-link" href="#">
                <i className="db__sidebar-menu-item-icon fa-sharp fa-solid fa-gear"></i>
                <span>Setting</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
