import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Навигационная панель */}
      <nav className="sidebar">
        <ul className="menu">
          <li className="active">📊 Главная</li>
          <li>💻 Устройства</li>
          <li>⚙️ Настройки</li>
          <li>📢 Уведомления</li>
          <li>❓ Помощь</li>
        </ul>
        <div className="user-info">
          <div className="avatar">JD</div>
          <span>John Doe</span>
        </div>
      </nav>

      {/* Основной контент */}
      <main className="main-content">
        <section>
          {/* Информация об устройстве */}
          <div className="card">
            <h2>Информация об устройстве</h2>
            <div className="info-item">
              <span className="label">RAM</span>
              <span className="value blue">4 ГБ из 16 ГБ</span>
            </div>
            <div className="info-item">
              <span className="label">CPU</span>
              <span className="value yellow">Intel i7 @ 35%</span>
            </div>
            <div className="info-item">
              <span className="label">Диск</span>
              <span className="value indigo">256/512 ГБ SSD</span>
            </div>
            <div className="info-item">
              <span className="label">IP</span>
              <span className="value purple">192.168.1.1</span>
            </div>
            <div className="info-item">
              <span className="label">ОС</span>
              <span className="value teal">Windows 11 Pro x64</span>
            </div>
          </div>

          {/* Графики */}
          <div className="card">
            <h2>Графики загрузки</h2>
            <div className="graph">
              <span className="graph-title">Оперативная память</span>
              <div className="progress-bg">
                <div className="progress-bar blue" style={{ width: "25%" }}></div>
              </div>
              <small>4 ГБ</small>
            </div>
            <div className="graph">
              <span className="graph-title">Сеть (Mbps)</span>
              <div className="progress-bg">
                <div className="progress-bar green" style={{ width: "40%" }}></div>
              </div>
              <small>↑ 10 Mbps | ↓ 25 Mbps</small>
            </div>
          </div>
        </section>
      </main>

      {/* Сайдбар справа (погода) */}
      <aside className="sidebar-right">
        <div className="weather-card">
          <h2>Погода</h2>
          <div className="weather-icon">☀️</div>
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