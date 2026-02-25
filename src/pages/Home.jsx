import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { topics } from '../data/topics';

export default function Home() {
  return (
    <div className="home-dashboard animate-fade-in-up">
      <header className="dashboard-header">
        <h1 className="text-gradient">Global Offshore Wind Supply Chain</h1>
        <p className="subtitle">Comprehensive 2025 Report & Interactive Dashboard</p>
      </header>

      <div className="metrics-grid">
        <div className="glass-panel metric-card animate-float" style={{ animationDelay: '0s' }}>
          <h3>Max Turbine Capacity</h3>
          <p className="metric-value text-gradient-teal">26 MW</p>
          <p className="metric-label">World-Record Prototypes</p>
        </div>
        <div className="glass-panel metric-card animate-float" style={{ animationDelay: '1s' }}>
          <h3>Floating Wind</h3>
          <p className="metric-value" style={{ color: 'var(--accent-purple)' }}>19 GW</p>
          <p className="metric-label">Global Target by 2034</p>
        </div>
        <div className="glass-panel metric-card animate-float" style={{ animationDelay: '2s' }}>
          <h3>China Nearshore</h3>
          <p className="metric-value text-gradient">¥0.25</p>
          <p className="metric-label">Projected 2030 LCOE / kWh</p>
        </div>
      </div>

      <div className="topics-grid">
        {topics.map((topic, index) => {
          const Icon = topic.icon;
          return (
            <Link to={`/topic/${topic.id}`} key={topic.id} className="topic-card-link">
              <div
                className="glass-card topic-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="topic-card-header">
                  <div className="topic-icon" style={{ backgroundColor: `${topic.color}20`, color: topic.color }}>
                    <Icon size={28} />
                  </div>
                  <ChevronRight className="arrow-icon" size={20} />
                </div>
                <h2>{topic.title}</h2>
                <p>{topic.description}</p>
                <div className="subtopics-badge">
                  {topic.subtopics.length} Sub-topics
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .home-dashboard {
          padding-bottom: 2rem;
        }

        .dashboard-header {
          margin-bottom: 3rem;
          text-align: center;
        }

        .dashboard-header h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .dashboard-header .subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .metric-card {
          padding: 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .metric-card h3 {
          font-size: 1rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .metric-value {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .metric-label {
          color: var(--text-secondary);
        }

        .topics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }

        .topic-card {
          padding: 2rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .topic-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .topic-icon {
          width: 56px;
          height: 56px;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }

        .arrow-icon {
          color: var(--text-secondary);
          opacity: 0.5;
          transition: var(--transition-smooth);
        }

        .topic-card:hover .arrow-icon {
          opacity: 1;
          transform: translateX(5px);
          color: var(--accent-blue);
        }

        .topic-card:hover .topic-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .topic-card h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .topic-card p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .subtopics-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 2rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
          width: fit-content;
        }
      `}} />
    </div>
  );
}
