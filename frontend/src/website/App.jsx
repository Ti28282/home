import React, {useState} from "react";
import "./App.scss";
import SystemInfo from "./systemInfo.jsx";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

    return (
      <div className="app">
        <button className={`mobile-menu-toggle ${isSidebarOpen ? 'active' : ''}`}
          onClick={toggleSidebar}
        >
          <img src="three-line-horizontal-svgrepo-com.svg" alt="mobile menu" />
        </button>
        {/* Навигационная панель */}
        <nav className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
          <ul className="menu">
            <li className="active">📊 Главная</li>
            <li>💻 Устройства</li>
            <li>⚙️ Настройки</li>
            <li>📢 Уведомления</li>
            <li>❓ Помощь</li>
          </ul>
          <div className="user-info">
            <div className="avatar">JD</div>
            <span className="email">John Doe</span>
          </div>
        </nav>
        <SystemInfo isSidebarOpen={isSidebarOpen}/>
        {/* Сайдбар справа (погода) */}
        <aside className="sidebar-right">
          <div className="weather-card">
            <h2>Погода</h2>
            <div className="weather-icon">🌧️</div>
            <div className="temperature">+20°C</div>
            <div className="location">Москва</div>
            <div className="weather-details">
              <p>Влажность: 55%</p>
              <p>Ветер: 3 м/с</p>
            </div>
          </div>
        </aside>
      </div>
    );
}

export default App;