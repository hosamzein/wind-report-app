import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Menu, X, Home, Wind } from 'lucide-react';
import { topicsEn, topicsAr } from '../data/topics';
import { useLanguage } from '../context/LanguageContext';

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { language } = useLanguage();

  const topics = language === 'ar' ? topicsAr : topicsEn;
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const t = {
    mobileHeader: language === 'ar' ? "تقرير الرياح '٢٥" : "Wind Report '25",
    logoTitle: language === 'ar' ? 'الرياح البحرية' : 'Offshore Wind',
    logoSubtitle: language === 'ar' ? 'تقرير سلسلة التوريد ٢٠٢٥' : 'Supply Chain Report 2025',
    homeTitle: language === 'ar' ? 'لوحة القيادة الرئيسية' : 'Home Dashboard'
  };

  return (
    <div className="layout-container">
      {/* Mobile Header */}
      <header className="mobile-header glass-panel">
        <div className="logo">
          <Wind className="logo-icon" style={{ [language === 'ar' ? 'marginLeft' : 'marginRight']: '10px' }} />
          <span>{t.mobileHeader}</span>
        </div>
        <button onClick={toggleSidebar} className="menu-toggle">
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Sidebar Navigation */}
      <aside className={`sidebar glass-panel ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo text-gradient">
            <Wind size={28} style={{ [language === 'ar' ? 'marginLeft' : 'marginRight']: '10px' }} />
            <h2>{t.logoTitle}</h2>
          </div>
          <p className="subtitle">{t.logoSubtitle}</p>
        </div>

        <nav className="nav-menu">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setIsSidebarOpen(false)}
            end
          >
            <div className="nav-icon-wrapper" style={{ color: 'var(--accent-blue)' }}>
              <Home size={20} />
            </div>
            <span>{t.homeTitle}</span>
          </NavLink>

          <div className="nav-divider"></div>

          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <NavLink
                key={topic.id}
                to={`/topic/${topic.id}`}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <div className="nav-icon-wrapper" style={{ color: topic.color }}>
                  <Icon size={20} />
                </div>
                <span>{topic.title}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <div className="content-wrapper">
          <Outlet />
        </div>
      </main>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>
      )}

      {/* Layout specific CSS injected directly for simplicity, though normally in index.css */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .layout-container {
          display: flex;
          min-height: 100vh;
        }

        .mobile-header {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 70px;
          z-index: 50;
          padding: 0 1.5rem;
          align-items: center;
          justify-content: space-between;
          border-radius: 0;
          border-left: none;
          border-right: none;
          border-top: none;
        }

        .logo {
          display: flex;
          align-items: center;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .menu-toggle {
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          border-radius: 0.5rem;
          transition: var(--transition-smooth);
        }

        .menu-toggle:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .sidebar {
          width: 320px;
          position: fixed;
          ${language === 'ar' ? 'right: 0;' : 'left: 0;'}
          top: 0;
          bottom: 0;
          z-index: 40;
          border-radius: 0;
          border-left: none;
          border-top: none;
          border-bottom: none;
          display: flex;
          flex-direction: column;
          padding: 2rem 1.5rem;
          overflow-y: auto;
        }

        .sidebar-header {
          margin-bottom: 2rem;
        }

        .sidebar-header .logo h2 {
          font-size: 1.5rem;
          line-height: 1;
        }

        .subtitle {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-top: 0.5rem;
          ${language === 'ar' ? 'padding-right: 2.5rem;' : 'padding-left: 2.5rem;'}
        }

        .nav-menu {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .nav-link {
          display: flex;
          align-items: center;
          padding: 0.75rem 1rem;
          border-radius: 1rem;
          color: var(--text-secondary);
          transition: var(--transition-smooth);
          position: relative;
          overflow: hidden;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          ${language === 'ar' ? 'right: 0;' : 'left: 0;'}
          top: 0;
          bottom: 0;
          width: 3px;
          background: var(--accent-blue);
          transform: scaleY(0);
          transition: var(--transition-smooth);
          border-radius: ${language === 'ar' ? '4px 0 0 4px;' : '0 4px 4px 0;'}
        }

        .nav-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          ${language === 'ar' ? 'margin-left: 1rem;' : 'margin-right: 1rem;'}
          transition: var(--transition-smooth);
        }

        .nav-link:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.03);
        }

        .nav-link:hover .nav-icon-wrapper {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.1);
        }

        .nav-link.active {
          color: var(--text-primary);
          background: var(--glass-highlight);
        }

        .nav-link.active::before {
          transform: scaleY(1);
        }

        .nav-link.active .nav-icon-wrapper {
          background: rgba(255, 255, 255, 0.15);
        }

        .nav-divider {
          height: 1px;
          background: var(--glass-border);
          margin: 1rem 0;
        }

        .main-content {
          flex: 1;
          ${language === 'ar' ? 'margin-right: 320px;' : 'margin-left: 320px;'}
          transition: var(--transition-smooth);
        }

        .content-wrapper {
          padding: 3rem;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .sidebar-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(2, 6, 23, 0.8);
          backdrop-filter: blur(4px);
          z-index: 30;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .sidebar {
            width: 280px;
            transform: ${language === 'ar' ? 'translateX(100%)' : 'translateX(-100%)'};
          }
          
          .sidebar.open {
            transform: translateX(0);
          }
          
          .main-content {
            ${language === 'ar' ? 'margin-right: 0;' : 'margin-left: 0;'}
          }
          
          .mobile-header {
            display: flex;
          }
          
          .content-wrapper {
            padding: 6rem 1.5rem 3rem;
          }
          
          .sidebar-overlay {
            display: block;
          }
        }
      `}} />
    </div>
  );
}
