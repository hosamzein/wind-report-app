import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { topicsEn, topicsAr } from '../data/topics';
import { useLanguage } from '../context/LanguageContext';

export default function Topic() {
  const { id } = useParams();
  const { language, toArabicNumerals } = useLanguage();

  const topics = language === 'ar' ? topicsAr : topicsEn;
  const topic = topics.find(t => t.id === id);

  // translations
  const backText = language === 'ar' ? 'العودة إلى لوحة القيادة' : 'Back to Dashboard';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!topic) {
    return <Navigate to="/" replace />;
  }

  const Icon = topic.icon;

  return (
    <div className="topic-page animate-fade-in-up">
      <Link to="/" className="back-link">
        {language === 'ar' ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
        <span>{backText}</span>
      </Link>

      <header className="topic-header glass-panel">
        <div className="topic-header-content">
          <div className="topic-icon-large" style={{ backgroundColor: `${topic.color}20`, color: topic.color }}>
            <Icon size={48} />
          </div>
          <div className="topic-header-text">
            <h1 className="text-gradient" style={{ backgroundImage: `linear-gradient(135deg, ${topic.color}, var(--accent-blue))` }}>
              {topic.title}
            </h1>
            <p className="topic-description">{topic.description}</p>
          </div>
        </div>
      </header>

      <div className="subtopics-list">
        {topic.subtopics.map((subtopic, index) => (
          <div
            key={index}
            className="subtopic-card glass-panel animate-fade-in-up"
            style={{ animationDelay: `${0.1 + (index * 0.1)}s` }}
          >
            <div className="subtopic-number" style={{ color: topic.color }}>
              {toArabicNumerals((index + 1).toString().padStart(2, '0'))}
            </div>
            <div className="subtopic-content">
              <h3>{subtopic.title}</h3>
              <p>{subtopic.content}</p>
            </div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .topic-page {
          padding-bottom: 4rem;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-weight: 500;
          transition: var(--transition-smooth);
        }

        .back-link:hover {
          color: var(--text-primary);
          ${language === 'ar' ? 'transform: translateX(5px);' : 'transform: translateX(-5px);'}
        }

        .topic-header {
          padding: 3rem;
          margin-bottom: 3rem;
          position: relative;
          overflow: hidden;
        }

        .topic-header::before {
          content: '';
          position: absolute;
          top: 0;
          ${language === 'ar' ? 'left: 0;' : 'right: 0;'}
          width: 300px;
          height: 300px;
          background: ${topic.color};
          filter: blur(100px);
          opacity: 0.15;
          border-radius: 50%;
          transform: translate(${language === 'ar' ? '-50%' : '50%'}, -50%);
        }

        .topic-header-content {
          display: flex;
          align-items: center;
          gap: 2rem;
          position: relative;
          z-index: 1;
        }

        .topic-icon-large {
          width: 96px;
          height: 96px;
          border-radius: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .topic-header-text h1 {
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: 0.5rem;
          line-height: 1.1;
        }

        .topic-description {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 800px;
        }

        .subtopics-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .subtopic-card {
          padding: 2rem;
          display: flex;
          gap: 2rem;
          transition: var(--transition-smooth);
        }

        .subtopic-card:hover {
          ${language === 'ar' ? 'transform: translateX(-10px);' : 'transform: translateX(10px);'}
          background: rgba(30, 41, 59, 0.6);
        }

        .subtopic-number {
          font-size: 2.5rem;
          font-weight: 700;
          font-family: monospace;
          line-height: 1;
          opacity: 0.5;
        }

        .subtopic-content h3 {
          font-size: 1.5rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .subtopic-content p {
          color: var(--text-secondary);
          font-size: 1.125rem;
          line-height: 1.7;
          white-space: pre-line;
        }

        @media (max-width: 768px) {
          .topic-header {
            padding: 2rem 1.5rem;
          }
          
          .topic-header-content {
            flex-direction: column;
            text-align: center;
            align-items: center;
            gap: 1.5rem;
          }
          
          .subtopic-card {
            flex-direction: column;
            gap: 1rem;
            padding: 1.5rem;
          }
        }
      `}} />
    </div>
  );
}
