import './sidebar.css';

function Sidebar() {
    return (
      <aside className="app-sidebar">
        <nav>
          <ul>
            <li><a href="#section1">Section 1</a></li>
            <li><a href="#section2">Section 2</a></li>
            <li><a href="#section3">Section 3</a></li>
          </ul>
        </nav>
      </aside>
    );
}
  
export default Sidebar;