import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Globe } from 'lucide-react';
import { topicsEn, topicsAr } from '../data/topics';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { language, toggleLanguage, toArabicNumerals } = useLanguage();
  const topics = language === 'ar' ? topicsAr : topicsEn;

  const t = {
    title: language === 'ar' ? 'سلسلة توريد طاقة الرياح البحرية العالمية' : 'Global Offshore Wind Supply Chain',
    subtitle: language === 'ar' ? 'تقرير ٢٠٢٥ الشامل ولوحة القيادة التفاعلية' : 'Comprehensive 2025 Report & Interactive Dashboard',
    metrics: {
      maxCap: language === 'ar' ? 'أقصى قدرة للتوربينات' : 'Max Turbine Capacity',
      worldRecord: language === 'ar' ? 'نماذج قياسية عالمية' : 'World-Record Prototypes',
      floating: language === 'ar' ? 'الرياح العائمة' : 'Floating Wind',
      globalTarget: language === 'ar' ? 'الهدف العالمي بحلول ' + toArabicNumerals('2034') : 'Global Target by 2034',
      chinaNearshore: language === 'ar' ? 'الصين (قرب الشاطئ)' : 'China Nearshore',
      lcoe: language === 'ar' ? 'التكلفة المستوية المتوقعة ' + toArabicNumerals('2030') + ' / كيلوواط ساعة' : 'Projected 2030 LCOE / kWh'
    },
    subtopics: language === 'ar' ? 'مواضيع فرعية' : 'Sub-topics'
  };

  return (
    <div className="home-dashboard animate-fade-in-up">
      <div className="language-toggle-container">
        <button onClick={toggleLanguage} className="language-toggle glass-panel">
          <Globe size={18} />
          {language === 'ar' ? 'English' : 'العربية'}
        </button>
      </div>

      <header className="dashboard-header">
        <h1 className="text-gradient">{t.title}</h1>
        <p className="subtitle">{t.subtitle}</p>
      </header>

      <div className="metrics-grid">
        <div className="glass-panel metric-card animate-float" style={{ animationDelay: '0s' }}>
          <h3>{t.metrics.maxCap}</h3>
          <p className="metric-value text-gradient-teal">
            {toArabicNumerals('26')} {language === 'ar' ? 'ميجاواط' : 'MW'}
          </p>
          <p className="metric-label">{t.metrics.worldRecord}</p>
        </div>
        <div className="glass-panel metric-card animate-float" style={{ animationDelay: '1s' }}>
          <h3>{t.metrics.floating}</h3>
          <p className="metric-value" style={{ color: 'var(--accent-purple)' }}>
            {toArabicNumerals('19')} {language === 'ar' ? 'جيجاواط' : 'GW'}
          </p>
          <p className="metric-label">{t.metrics.globalTarget}</p>
        </div>
        <div className="glass-panel metric-card animate-float" style={{ animationDelay: '2s' }}>
          <h3>{t.metrics.chinaNearshore}</h3>
          <p className="metric-value text-gradient">
            ${toArabicNumerals('0.035')}
          </p>
          <p className="metric-label">{t.metrics.lcoe}</p>
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
                  {language === 'ar' ? <ChevronLeft className="arrow-icon" size={20} /> : <ChevronRight className="arrow-icon" size={20} />}
                </div>
                <h2>{topic.title}</h2>
                <p>{topic.description}</p>
                <div className="subtopics-badge">
                  {toArabicNumerals(topic.subtopics.length)} {t.subtopics}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="resources-section glass-panel" style={{ marginTop: '4rem', padding: '2rem', textAlign: 'center' }}>
        <h2>{language === 'ar' ? 'المصادر المتاحة' : 'Available Resources'}</h2>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
          <a href="/resources/Global_Offshore_Wind_2025 presentation en.pdf" target="_blank" rel="noreferrer" className="glass-card resource-link">Global Presentation (EN)</a>
          <a href="/resources/Global_Offshore_Wind_2025 presentation ar.pdf" target="_blank" rel="noreferrer" className="glass-card resource-link">العرض التقديمي العالمي (AR)</a>
          <a href="/resources/Offshore Wind Supply Chain Report - en.pdf" target="_blank" rel="noreferrer" className="glass-card resource-link">Supply Chain Report (EN)</a>
          <a href="/resources/Offshore Wind Supply Chain Report - cn.pdf" target="_blank" rel="noreferrer" className="glass-card resource-link">Supply Chain Report (CN)</a>
        </div>
      </div>

      <footer style={{ marginTop: '3rem', textAlign: 'center', color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
        <p>تقديم أستاذ دكتور جلال عثمان و دكتور مهندس حسام زين</p>
        <p>برعاية الأمانة المصرية لمجلس الطاقة العالمي بوزارة الكهرباء والطاقة المتجددة</p>
        <p>ومجلس بحوث الكهرباء والطاقة بأكاديمية البحث العلمي</p>
      </footer>

      <style dangerouslySetInnerHTML={{
        __html: `
        .home-dashboard {
          padding-bottom: 2rem;
          position: relative;
        }
        
        .language-toggle-container {
          display: flex;
          justify-content: ${language === 'ar' ? 'flex-end' : 'flex-end'};
          margin-bottom: 2rem;
        }
        
        .language-toggle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border: none;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        
        .language-toggle:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
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
          ${language === 'ar' ? '' : 'text-transform: uppercase;'}
          letter-spacing: 0.05em;
        }

        .metric-value {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 0.5rem;
          direction: ltr; /* Keeps $0.035 readable usually, but toArabic converts digits */
        }
        
        .resource-link {
          padding: 1rem 1.5rem;
          text-decoration: none;
          color: var(--text-primary);
          transition: var(--transition-smooth);
        }
        
        .resource-link:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
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
          ${language === 'ar' ? 'transform: translateX(-5px);' : 'transform: translateX(5px);'}
          color: var(--accent-blue);
        }

        .topic-card:hover .topic-icon {
          transform: scale(1.1) ${language === 'ar' ? 'rotate(-5deg)' : 'rotate(5deg)'};
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
