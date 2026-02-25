import {
  Globe2,
  TrendingDown,
  Wind,
  Anchor,
  Settings,
  Ship,
  Briefcase,
  Zap
} from 'lucide-react';

export const topicsEn = [
  {
    id: 'market-overview',
    title: 'Global Offshore Wind Market Overview',
    description: 'A deep dive into the global offshore wind landscape, covering 2024–2035 growth trajectories, regional powerhouses, and the transition of the LCOE curve.',
    icon: Globe2,
    color: 'var(--accent-blue)',
    subtopics: [
      {
        title: 'Current Development Status',
        content: '• GWEC forecasts an aggressive Compound Annual Growth Rate (CAGR) of 15% to 28% for the 2024–2034 period.\n• The global market expects to add over 350 GW of new capacity during this decade.\n• A critical inflection point is expected by 2028, leaping from 10-12 GW to over 25 GW of annual installations.\n• The global cumulative offshore wind capacity is projected to reach an estimated 441 GW by 2034.\n• 2024 served as a strategic consolidation year marked by complex supply chain realignments.'
      },
      {
        title: 'Regional Leaders',
        content: '• Established Markets: China and Northern Europe currently operate as the "dual engines" driving global volume.\n• Emerging Hubs (Asia): Vietnam is aggressively capitalizing on shallow nearshore sites, while Japan and South Korea target deep-water zones.\n• The Americas: The US market is navigating a complex transition from early-stage permitting to localized large-scale construction.\n• Emerging Hubs (Global): The Philippines and similar island nations are turning to offshore wind for rapid energy demand growth.\n• Auction Frameworks: Robust government auction mechanisms are critical for providing long-term visibility to developers.'
      },
      {
        title: 'Economic Trends',
        content: '• Western markets experienced a recent 20-30% rise in component pricing and financing costs.\n• In stark contrast, Chinese nearshore construction costs are projected to fall to a highly competitive $0.035/kWh by 2030.\n• The industry is globally prioritizing "Value over Volume" to aggressively manage soaring capital expenditures.\n• System stability and multi-functional use of sea areas are increasingly required to justify high overall Levelized Cost of Energy (LCOE).\n• Grid parity has already been achieved in multiple Chinese coastal provinces without reliance on central subsidies.'
      },
      {
        title: 'Technology Maturity',
        content: '• The industry has firmly entered the "Gigawatt Age," establishing massive 15 MW+ turbine platforms as the new standard.\n• A critical evolution is underway from traditional fixed-bottom monopile structures to advanced floating demonstrations.\n• True commercial-scale floating wind deployment is aggressively shifting toward a post-2030 timeline.\n• Technologies for deep-water anchoring and highly flexible, dynamic subsea cabling are rapidly reaching commercial maturity.\n• Specialized Service Operation Vessels (SOVs) with AI-driven operations are becoming standard for 25-year project bankability.'
      }
    ]
  },
  {
    id: 'supply-chain-status',
    title: 'Global Supply Chain Status & Challenges',
    description: 'A critical analysis of the global manufacturing landscape, component bottlenecks, and macroeconomic hurdles.',
    icon: TrendingDown,
    color: 'var(--accent-purple)',
    subtopics: [
      {
        title: 'Supply-Demand Mismatch',
        content: '• Aggressive national deployment targets of 30 GW/year are misaligned with actual high-power heavy component manufacturing capabilities.\n• A massive geopolitical bottleneck exists: China currently controls >85% of the total global volume for wind turbine heavy castings.\n• The production of ultra-large subsea cables and multi-megawatt gearboxes requires massive, currently lagging, capital investments.\n• Ensuring a steady supply of high-grade Electrical Steel is a severe vulnerability for expanding global capacity.\n• Neodymium (NdFeB) rare earth magnets remain a critical strategic restriction point for permanent magnet generator production.'
      },
      {
        title: 'Macroeconomic Pressures',
        content: '• The inherently capital-intensive nature of offshore wind makes projects highly sensitive to global macroeconomic shifts.\n• A surge in global interest rates and base inflation has dramatically escalated capital costs across the entire supply chain.\n• Elevated borrowing costs strictly limit the necessary forward-looking investments into port expansions and specialized maritime vessels.\n• These combined fiscal pressures resulted in several high-profile project renegotiations and cancellations across established Western markets.\n• Current macroeconomic headwinds act as the primary structural barrier to scaling deployment outside of Asia.'
      },
      {
        title: 'Geopolitical & Policy Risks',
        content: '• Protective localization policies (e.g., US Inflation Reduction Act, EU Net-Zero Industry Act) are fragmenting the formerly unified global supply chain.\n• This forced transition towards "Polarized Supply Chains" is temporarily inflating project CAPEX by an estimated 15-25%.\n• Developers must now absorb premiums to build localized blades and towers away from historically optimized, low-cost Asian hubs.\n• Lengthy, complex, and highly restrictive permitting processes threaten project timelines throughout Western markets.\n• Securing localized supply chains and navigating trade barriers are now absolute prerequisites for competing in national lease auctions.'
      }
    ]
  },
  {
    id: 'lac-region',
    title: 'Latin American & Caribbean Region Focus',
    description: 'A regional study of the LAC region’s massive 700 GW+ potential, its dependency on global imports, and strategic pathways.',
    icon: Wind,
    color: 'var(--accent-teal)',
    subtopics: [
      {
        title: 'Resource Endowment',
        content: '• The LAC region boasts immense wind potential: Brazil alone offers 480 GW (fixed-bottom) and a staggering 748 GW (floating) technical capacity.\n• Colombia’s Caribbean coastline provides exceptional natural resources with average capacity factors expected to comfortably exceed 50%.\n• Chile’s Magallanes region is geographically primed for the immediate deployment of ultra-large-scale, hydrogen-integrated generating assets.\n• The entire region is currently categorized as "Pre-Commercial," with the first utility-scale operational projects expected only after 2030.\n• Consistent and robust offshore wind speeds theoretically position the LAC region as a future clean energy superpower.'
      },
      {
        title: 'Industrial Readiness',
        content: '• A huge gap exists between the LAC region\'s highly functional onshore factories and its completely non-existent offshore manufacturing base.\n• The entire region presently has zero capacity to manufacture 100m+ offshore-class blades, 15 MW+ generators, or specialized structural gearboxes.\n• This critical lack of infrastructure establishes a 100% reliance on international (European and Chinese) imports for all core "Active Components."\n• Total import dependency leaves the regional development pipeline extremely vulnerable to fluctuating global shipping rates and supply chain logistics.\n• Foreign Direct Investment is urgently required to upgrade local steel foundries and establish localized port assembly hubs.'
      },
      {
        title: 'Component Bottlenecks',
        content: '• Forward projections through 2045 predict an acute, severe shortage of locally sourced heavy castings and multi-megawatt offshore generators.\n• There is an absolute logistical void: Zero specialized Wind Turbine Installation Vessels (WTIVs) are currently stationed or flagged in Latin America.\n• Current regional shipping ports universally lack the sheer structural quayside capacity needed to bear the weight of heavy offshore foundations.\n• Existing commercial cargo ports lack the critical "Air Draft" (bridge height clearances) absolutely required for offshore turbine tower assembly.\n• Only Brazil\'s Port of Açu is currently undergoing the massive specialized quayside reinforcement necessary to serve as a designated "Mother Port".'
      },
      {
        title: 'Strategic Drivers',
        content: '• Due to severe limits in domestic grid infrastructure, LAC offshore strategies rely heavily on "Power-to-X" closed-loop integration models.\n• Chile and Colombia possess national roadmaps identifying offshore wind as the primary, high-capacity engine for massive green hydrogen exports.\n• The booming regional lithium mining industry serves as another massive strategic driver for dedicated, clean offshore electricity demand.\n• Future utility-scale projects are explicitly designed to act as zero-carbon fuel generation hubs for global heavy industry decarbonization.\n• Mastering "Power-to-X" export models has the potential to unlock crucial billions in foreign direct investment for Latin America.'
      }
    ]
  },
  {
    id: 'china-leadership',
    title: 'China’s Offshore Wind Market Leadership',
    description: 'Insights into China’s strategic transition to the EEZ, its five major industrial clusters, and floating wind milestones.',
    icon: Anchor,
    color: '#f43f5e',
    subtopics: [
      {
        title: 'Strategic Goals',
        content: '• China\'s commanding offshore expansion targets are rigidly underpinned by the national "14th Five-Year Plan" for energy independence.\n• The robust "Beijing Declaration 2.0" mandates massive, sustained annual new offshore wind installations of no less than 15 GW.\n• This state-backed guarantee provides a completely stable domestic pipeline, driving constant technological risk-taking and aggressive supply chain scaling.\n• The central strategy explicitly dictates a rapid shift from central subsidies towards absolute, comprehensive market "Grid Parity" by 2025.\n• Modern deep-water projects in leading provinces like Guangdong and Fujian now aim for strictly positive returns on market-based electricity pricing.'
      },
      {
        title: 'Spatial Shift',
        content: '• As 30–50m nearshore zones hit strict ecological and commercial shipping saturation limits, development is pivoting to deep waters.\n• "Deep Shore" projects are located squarely in the Exclusive Economic Zone (EEZ), spanning 50-100km from the coast in 50m+ depths.\n• In dominant coastal hubs like Guangdong, EEZ-based megaprojects are projected to account for a massive 66% of new capacity by 2030.\n• This aggressive spatial shift acts as a primary catalyst forcing the incredibly rapid deployment of ultra-high voltage DC (±525kV) transmission.\n• EEZ development strictly necessitates the immediate commercial innovation of resilient, cost-effective, and mass-producible floating substructures.'
      },
      {
        title: 'Floating Wind Milestones',
        content: '• The "Mingyang Tiancheng" platform represents a paradigm shift, utilizing a revolutionary dual-rotor V-shaped design to maximize power density.\n• The deployment of the staggering "Sanxia Linghang" 16 MW system marks a major qualitative leap in single-unit floating foundation capacity.\n• The "CNOOC Guanlan" megaproject achieved world-first status as a floating wind turbine providing direct, primary power to an offshore oil platform.\n• China’s unique "Offshore Wind + Oil & Gas" integration model serves as an aggressive blueprint for the zero-carbon transition of historical extraction.\n• These rapid, successive deep-water milestones highlight the unparalleled versatility and velocity of Chinese hardware innovation.'
      }
    ]
  },
  {
    id: 'industrial-components',
    title: 'Deep Dive into China’s Industrial Chain Components',
    description: 'Comprehensive analysis of 26MW turbines, ultra-long blades, and the ±525kV DC cable revolution.',
    icon: Settings,
    color: '#eab308',
    subtopics: [
      {
        title: 'Wind Turbines & Technical Routes',
        content: '• The Chinese domestic market is completely dominated by the highly resilient semi-direct drive (medium-speed permanent magnet) technical route.\n• The industry capacity race has violently accelerated, pushing research and deployment rapidly beyond 16 MW directly into the 20 MW+ era.\n• Dongfang Electric (DEC) shattered existing milestones by successfully rolling out a massive 26 MW-class offshore wind turbine prototype.\n• This 26 MW benchmark features an unprecedented rotor diameter exceeding 290 meters and is heavily engineered to survive Class 17 typhoons.\n• Relentless single-unit upscaling is crucial to mathematically reduce the sheer number of foundations and cable connections required per gigawatt.'
      },
      {
        title: 'Blade Technology',
        content: '• Offshore aerodynamic engineering has formally entered the "150-meter Era," necessitating massive upgrades in automated composite manufacturing.\n• The utilization of carbon fiber pultrusion for spar caps is now a strict universal requirement to manage weight loads for 10 MW+ turbines.\n• Cutting-edge automated production lines now leverage precise laser-guided layering to ensure flawless structural integrity across 153m+ lengths.\n• Addressing severe end-of-life lifecycle issues, manufacturers have already successfully tested and deployed massive 220m+ fully recyclable blades.\n• The integration of advanced "EzCiclo" resin technologies mathematically promises an unprecedented 95% composite material structural recovery rate.'
      },
      {
        title: 'Mechanical & Electrical Systems',
        content: '• High-Capacity Gearboxes: Achieved unprecedented torque density limits by aggressively shifting to the application of sliding (plain) bearings.\n• Bearing Lifespan: Sliding bearings guarantee greater structural load-bearing capacity and an operational theoretical lifespan exceeding 25 years.\n• Generators: The industry has definitively pushed into the high-voltage (10.5kV–35kV) era for massive permanent magnet systems.\n• Converters (Hardware): Achieved severe supply chain independence via localized, high-capacity IGBT electrical modules.\n• Converters (Software): Deployed the world\'s first 25 MW grid-forming conversion profiles, enabling wind farms to support grid frequency stability.'
      },
      {
        title: 'Structural Components',
        content: '• Main Bearings: Chinese domestic heavy manufacturers successfully broke long-standing European monopolies on ultra-large main shaft bearings.\n• Localization Rates: The industry has rapidly achieved an astounding 70%+ domestic localization rate for highly complex 16 MW+ critical units.\n• Foundation Scale: Marine engineers are now routinely deploying and installing massive monopiles that easily exceed 2,000 tons in sheer weight.\n• Jacket Foundations: Deep-water installations rely entirely on heavy structural jackets heavily engineered for severe typhoon-class environments.\n• Substructures: Future EEZ expansion depends entirely on the mass production of modular semi-submersible floating base designs via shipyards.'
      },
      {
        title: 'Transmission',
        content: '• Deep-water subsea power transmission has achieved a generational leap by successfully deploying ±525kV HVDC heavy subsea cables.\n• Massive 5000 mm² aluminum core DC cables are now utilized to efficiently evacuate multiple gigawatts of power from deep EEZ megaprojects.\n• Employing aluminum cores for high-voltage transmission offers developers a massive 20-30% CAPEX baseline reduction compared to legacy copper grids.\n• Highly flexible, stress-resistant 66kV dynamic subsea cables are currently entering mass production specifically to support floating platforms.\n• These dynamic 66kV cables feature multi-layered high-grade armoring, aggressively engineered to withstand millions of continuous wave fatigue cycles.'
      }
    ]
  },
  {
    id: 'offshore-infrastructure',
    title: 'Offshore Infrastructure & Support Services',
    description: 'Review of specialized Mother Ports, high-tonnage WTIVs, and the world-class R&D testing ecosystem.',
    icon: Ship,
    color: '#3b82f6',
    subtopics: [
      {
        title: 'Marine Logistics',
        content: '• China is aggressively redesigning coastal infrastructure by developing dedicated "Offshore Wind Mother Ports" featuring heavy deep-water berths.\n• Quaysides at these integrated hubs are reinforced to bear an immense 100t/m² capacity, enabling the vertical assembly of heavy turbine towers.\n• Massive deployments of 4th-generation Wind Turbine Installation Vessels (WTIVs) boast an unprecedented 3600-ton lifting capacity in 70m waters.\n• High-grade vessel integrations including automated pile-driving and precision blade-gripping systems drastically optimize unpredictable "Weather Windows".\n• These combined logistical leaps have miraculously reduced the installation cycle for a massive single offshore turbine from 7 days down to 48 hours.'
      },
      {
        title: 'Mooring Systems',
        content: '• The industry is rapidly establishing and enforcing rigorous technical safety standards for ultra-high-grade mooring systems in typhoon zones.\n• The mass deployment of heavy R6 grade mooring chains is the absolute baseline to guarantee the survival of massive offshore platforms in extreme weather.\n• Next-generation deep-water mooring designs strictly prioritize reducing the seabed footprint and actively minimizing impact on marine ecosystems.\n• Advanced, high-tensile synthetic ropes are currently undergoing extreme stress tests alongside traditional steel chains to achieve deep-water weight reduction.\n• Dynamic anchoring solutions must be flawlessly engineered to handle immense multi-megawatt variable loads during Category 5 extreme weather events.'
      },
      {
        title: 'Testing & Certification',
        content: '• The CGC National Certification Center currently operates the absolute largest full-scale indoor blade structural testing bench globally.\n• These advanced acoustic laboratories can perform highly complex, continuous dual-axis fatigue testing on fully scaled 150-meter offshore blades.\n• Massive, grid-connected 6-DOF (Degrees of Freedom) ground test platforms meticulously simulate harsh multi-megawatt ocean conditions on land.\n• Rigorous, highly documented full-scale operational fatigue testing is an absolute regulatory mandate before any new 20 MW+ classes reach sea trials.\n• Asian OEMs are increasingly collaborating intimately with DNV and UL to ensure 15 MW+ platforms unconditionally meet IEC 61400-1 international standards.'
      }
    ]
  },
  {
    id: 'internationalization',
    title: 'Internationalization Strategy',
    description: 'Analysis of the "Going Out" model, localized production hubs, and China\'s competitive export advantage.',
    icon: Briefcase,
    color: '#10b981',
    subtopics: [
      {
        title: '"Going Out" Model',
        content: '• Dominant Asian OEMs have definitively shifted from simple component export strategies to establishing deep, localized multi-continent manufacturing bases.\n• Export strategies hinge on an attractive "Turbine + EPC + Financing (EPC+F)" model, offering end-to-end turnkey integrated project solutions.\n• This fully integrated financial and engineering approach is deeply appealing to emerging global south markets lacking localized technical or financial maturity.\n• Leading firms are rapidly constructing massive local production hubs, including highly active blade and generator factories in Brazil, India, and Vietnam.\n• Establishing this aggressive, robust global manufacturing footprint is the primary tactic utilized to navigate strict international Local Content Requirements (LCR).'
      },
      {
        title: 'Competitive Advantages',
        content: '• Mass-produced Asian offshore wind hardware maintains a formidable, highly disruptive 20% cost-efficiency advantage over Western international peers.\n• This immense pricing advantage is scaled highly effectively due to an incredibly dense, unified domestic supply chain where 100% of sub-components are sourced locally.\n• A hyper-integrated, centralized "200km radius ecosystem" reliably guarantees significantly shorter component delivery lead times compared to scattered European competitors.\n• Beyond raw capital pricing, Asian OEMs consistently win emerging market share by guaranteeing highly stable delivery cycles and assuming full EPC liability.\n• Over 10 specific multi-megawatt offshore turbine models have recently breached technical barriers, successfully obtaining elite Type Certifications for the European market.'
      }
    ]
  },
  {
    id: 'future-outlook',
    title: 'Future Outlook & Integrated Ecosystems',
    description: 'Projected global growth rates and the synergistic "Offshore Wind +" marine energy economy.',
    icon: Zap,
    color: '#f97316',
    subtopics: [
      {
        title: 'Forecast (2025–2034)',
        content: '• Unanimous industry consensus points directly to a transformative, highly lucrative decade with extremely strong, compounding projected global installation growth rates.\n• The mid-2020s focus entirely on aggressively upscaled fixed-bottom deployments to rapidly mature high-voltage global supply chains.\n• The critical five-year period from 2030-2035 will officially mark the highly anticipated era of full, commercial-scale "Floating Wind Commercialization."\n• By 2034, global cumulative floating offshore wind capacity is aggressively, yet realistically, projected by analysts to safely reach 19 GW.\n• The primary, singular ongoing challenge for the entire global sector remains driving down the aggregate unit cost of floating substructures safely below $2000/kW.'
      },
      {
        title: '"Offshore Wind +"',
        content: '• The ultimate, highly lucrative future model seamlessly integrates offshore power generation with "Marine Ranching" (deep-sea fish farming), creating massive "Blue Granaries".\n• Massive secondary infrastructure integration actively includes "Wind + Green Hydrogen" centralized electrolysis platforms to highly efficiently resolve regional grid curtailment logic.\n• Specialized "Wind + Seawater Desalination" membrane systems are slated to create fully self-sustaining, zero-carbon water ecosystems specifically for remote coastal installations.\n• The standard wind farm of 2035 will be completely "Self-Healing", heavily utilizing embedded AI arrays and active "Digital Twins" to preemptively predict mechanical failures.\n• Massive, centralized "Deep-Sea Energy Islands" will officially serve as the primary offshore transformer stations and green hydrogen electrolysis hubs for surrounding turbine clusters.'
      }
    ]
  }
];

export const topicsAr = [
  {
    id: 'market-overview',
    title: 'نظرة عامة على سوق طاقة الرياح البحرية العالمية',
    description: 'دراسة متعمقة للمشهد العالمي لطاقة الرياح البحرية، تغطي مسارات النمو من 2024–2035، والقوى الإقليمية الكبرى، وتحولات منحنى التكلفة (LCOE).',
    icon: Globe2,
    color: 'var(--accent-blue)',
    subtopics: [
      {
        title: 'حالة التطور الحالية',
        content: '• يتوقع المجلس العالمي لطاقة الرياح (GWEC) معدل نمو سنوي مركب قوي يتراوح بين 15٪ و 28٪ للفترة 2024-2034.\n• يتوقع السوق العالمي إضافة أكثر من 350 جيجاواط من القدرة الجديدة خلال هذا العقد.\n• من المتوقع الوصول إلى نقطة انعطاف حاسمة بحلول عام 2028، لتقفز التركيبات السنوية من 10-12 جيجاواط إلى أكثر من 25 جيجاواط.\n• من المتوقع أن تصل القدرة التراكمية العالمية لطاقة الرياح البحرية إلى ما يقدر بنحو 441 جيجاواط بحلول عام 2034.\n• كان عام 2024 بمثابة عام توحيد استراتيجي تميز بإعادة تنظيم معقدة لسلسلة التوريد.'
      },
      {
        title: 'القادة الإقليميون',
        content: '• الأسواق الراسخة: تعمل الصين وشمال أوروبا حاليًا كـ "محركات مزدوجة" تدفع الحجم العالمي.\n• المحاور الناشئة (آسيا): تستفيد فيتنام بقوة من المواقع الضحلة القريبة من الشاطئ، بينما تستهدف اليابان وكوريا الجنوبية مناطق المياه العميقة.\n• الأمريكتان: يسلك السوق الأمريكي مرحلة انتقالية معقدة من التراخيص المبكرة إلى البناء المحلي واسع النطاق.\n• المحاور الناشئة (العالمية): تتجه الفلبين والدول الجزرية المماثلة إلى الرياح البحرية لتلبية النمو السريع في الطلب على الطاقة.\n• أطر المزادات: تعتبر آليات المزادات الحكومية القوية حاسمة لتوفير رؤية طويلة الأجل للمطورين.'
      },
      {
        title: 'الاتجاهات الاقتصادية',
        content: '• شهدت الأسواق الغربية مؤخرًا ارتفاعًا بنسبة 20-30٪ في تسعير المكونات وتكاليف التمويل.\n• على النقيض من ذلك، من المتوقع أن تنخفض تكاليف البناء في المناطق القريبة من الشاطئ الصيني إلى مستوى شديد التنافسية يبلغ 0.035 دولار/كيلوواط ساعة بحلول عام 2030.\n• تعطي الصناعة العالمية الأولوية لـ "القيمة على الحجم" لإدارة النفقات الرأسمالية المتزايدة بقوة.\n• أصبح استقرار النظام والاستخدام المتعدد الوظائف للمناطق البحرية مطلوبًا بشكل متزايد لتبرير التكلفة المستوية العالية للطاقة (LCOE).\n• تم تحقيق التكافؤ مع الشبكة بالفعل في العديد من المقاطعات الساحلية الصينية دون الاعتماد على الإعانات المركزية.'
      },
      {
        title: 'نضج التكنولوجيا',
        content: '• دخلت الصناعة بقوة "عصر الجيجاواط"، لتؤسس منصات توربينات ضخمة تزيد قدرتها عن 15 ميجاواط كمعيار جديد.\n• يجري تطور حاسم من الهياكل التقليدية ذات الأساس الثابت (Monopile) إلى عروض الرياح العائمة المتقدمة.\n• يتحول النشر التجاري الحقيقي للرياح العائمة بقوة نحو جدول زمني لما بعد عام 2030.\n• وصلت تقنيات الإرساء في المياه العميقة والكابلات البحرية الديناميكية عالية المرونة بسرعة إلى النضج التجاري.\n• أصبحت سفن عمليات الخدمة المتخصصة (SOVs) التي تعمل بالذكاء الاصطناعي قياسية لضمان قابلية تمويل المشاريع لمدة 25 عامًا.'
      }
    ]
  },
  {
    id: 'supply-chain-status',
    title: 'حالة سلسلة التوريد العالمية والتحديات',
    description: 'تحليل نقدي למشهد التصنيع العالمي، واختناقات المكونات، والعقبات الاقتصادية الكلية.',
    icon: TrendingDown,
    color: 'var(--accent-purple)',
    subtopics: [
      {
        title: 'عدم التطابق بين العرض والطلب',
        content: '• الأهداف الوطنية الشرسة للنشر والمقدرة بـ 30 جيجاواط/سنة لا تتوافق مع قدرات التصنيع الفعلية للمكونات الثقيلة عالية الطاقة.\n• يوجد اختناق جيوسياسي ضخم: تسيطر الصين حاليًا على أكثر من 85٪ من الحجم العالمي الإجمالي للمسبوكات الثقيلة لتوربينات الرياح.\n• يتطلب إنتاج الكابلات البحرية فائقة الحجم وصناديق التروس متعددة الميجاواط استثمارات رأسمالية ضخمة ومتأخرة حاليًا.\n• يعد ضمان الإمداد المستمر بالفولاذ الكهربائي عالي الجودة نقطة ضعف شديدة في توسيع القدرة العالمية.\n• تظل مغناطيسات النيوديميوم (NdFeB) الأرضية النادرة نقطة تقييد استراتيجية حاسمة لإنتاج المولدات ذات المغناطيس الدائم.'
      },
      {
        title: 'الضغوط الاقتصادية الكلية',
        content: '• الطبيعة الكثيفة رأس المال لطاقة الرياح البحرية تجعل المشاريع حساسة للغاية للتحولات الاقتصادية الكلية العالمية.\n• أدى الارتفاع الكبير في أسعار الفائدة العالمية والتضخم الأساسي إلى تصعيد تكاليف رأس المال بشكل كبير عبر سلسلة التوريد بأكملها.\n• تحد تكاليف الاقتراض المرتفعة بشدة من الاستثمارات المستقبلية الضرورية في توسيع الموانئ والسفن البحرية المتخصصة.\n• أدت هذه الضغوط المالية المجتمعة إلى مفاوضات وإلغاءات بارزة للعديد من المشاريع في الأسواق الغربية الراسخة.\n• تعمل الرياح المعاكسة الاقتصادية الكلية الحالية كحاجز هيكلي أساسي أمام توسيع النشر خارج آسيا.'
      },
      {
        title: 'المخاطر الجيوسياسية والسياساتية',
        content: '• سياسات التوطين الحمائية (مثل قانون خفض التضخم الأمريكي، وقانون الصناعة الصفرية الصافية للاتحاد الأوروبي) تؤدي إلى تجزئة سلسلة التوريد العالمية الموحدة سابقًا.\n• يؤدي هذا التحول القسري نحو "سلاسل التوريد المستقطبة" إلى تضخيم مؤقت للنفقات الرأسمالية للمشاريع (CAPEX) بنسبة تقدر بـ 15-25٪.\n• يجب على المطورين الآن تحمل أقساط لبناء الشفرات والأبراج محليًا بعيدًا عن المراكز الآسيوية المحسنة تاريخياً ومنخفضة التكلفة.\n• عمليات التصريح المطولة والمعقدة والتقييدية للغاية تهدد الجداول الزمنية للمشاريع في جميع أنحاء الأسواق الغربية.\n• أصبح تأمين سلاسل التوريد المحلية والتنقل عبر الحواجز التجارية الآن شروطًا مسبقة مطلقة للتنافس في المزادات الوطنية.'
      }
    ]
  },
  {
    id: 'lac-region',
    title: 'التركيز على منطقة أمريكا اللاتينية والبحر الكاريبي',
    description: 'دراسة إقليمية للإمكانات الهائلة للمنطقة التي تتجاوز 700 جيجاواط، واعتمادها على الواردات العالمية، والمسارات الاستراتيجية.',
    icon: Wind,
    color: 'var(--accent-teal)',
    subtopics: [
      {
        title: 'الموارد الطبيعية',
        content: '• تتمتع منطقة أمريكا اللاتينية والبحر الكاريبي (LAC) بإمكانات هائلة لطاقة الرياح: تقدم البرازيل وحدها 480 جيجاواط (أساسات ثابتة) وقدرة فنية مذهلة تبلغ 748 جيجاواط (رياح عائمة).\n• يوفر ساحل البحر الكاريبي في كولومبيا موارد طبيعية استثنائية مع توقع أن يتجاوز متوسط عوامل القدرة 50٪ بسهولة.\n• منطقة ماجلان في تشيلي مستعدة جغرافيًا للنشر الفوري لأصول التوليد المتكاملة مع الهيدروجين على نطاق واسع جداً.\n• تُصنف المنطقة بأكملها حاليًا على أنها "ما قبل التشغيل التجاري"، حيث يُتوقع تشغيل المشاريع الأولى على نطاق المرافق فقط بعد عام 2030.\n• تضع سرعات الرياح البحرية الثابتة والقوية نظريًا المنطقة كقوة عظمى مستقبلية للطاقة النظيفة.'
      },
      {
        title: 'الجاهزية الصناعية',
        content: '• توجد فجوة هائلة بين المصانع البرية عالية الكفاءة في المنطقة والقاعدة التصنيعية البحرية غير الموجودة تمامًا.\n• تفتقر المنطقة بأكملها حاليًا إلى أي قدرة على تصنيع شفرات بحرية بطول 100 متر أو أكثر، أو مولدات بقدرة 15 ميجاواط أو أكثر، أو صناديق تروس هيكلية متخصصة.\n• يرسخ هذا النقص الحرج في البنية التحتية اعتمادًا بنسبة 100٪ على الواردات الدولية (الأوروبية والصينية) لجميع "المكونات النشطة" الأساسية.\n• يترك الاعتماد الكامل على الاستيراد خط أنابيب التطوير الإقليمي معرضًا بشدة لتقلبات أسعار الشحن العالمية والخدمات اللوجستية لسلسلة التوريد.\n• هناك حاجة ماسة إلى الاستثمار الأجنبي المباشر لترقية مسابك الصلب المحلية وإنشاء محاور تجميع متخصصة في الموانئ.'
      },
      {
        title: 'اختناقات المكونات',
        content: '• تتوقع التوقعات المستقبلية حتى عام 2045 نقصًا حادًا وشديدًا في المسبوكات الثقيلة والمولدات البحرية متعددة الميجاواط المنتجة محليًا.\n• يوجد فراغ لوجستي مطلق: صفر سفن متخصصة لتركيب توربينات الرياح (WTIVs) متمركزة أو مسجلة حاليًا في أمريكا اللاتينية.\n• تفتقر موانئ الشحن الإقليمية الحالية عالميًا إلى السعة الهيكلية الصافية للرصيف اللازمة لتحمل وزن الأساسات البحرية الثقيلة.\n• تفتقر موانئ الشحن التجاري الحالية إلى "المسافة الرأسية الحرة" الحيوية (خلوص ارتفاع الجسور) المطلوبة لتجميع أبراج التوربينات البحرية.\n• يخضع ميناء أسو (Port of Açu) في البرازيل فقط حاليًا للتعزيزات الضخمة المتخصصة للرصيف ليكون بمثابة "الميناء الأم" المخصص.'
      },
      {
        title: 'الدوافع الاستراتيجية',
        content: '• نظراً للحدود الصارمة في البنية التحتية للشبكة المحلية، تعتمد استراتيجيات الرياح البحرية بشدة على نماذج "Power-to-X" المتكاملة ذات الحلقة المغلقة.\n• تمتلك تشيلي وكولومبيا خرائط طريق وطنية تحدد الرياح البحرية كالمحرك الأساسي عالي السعة لتصدير الهيدروجين الأخضر بضخامة.\n• تُعد صناعة تعدين الليثيوم الإقليمية المزدهرة دافعاً استراتيجياً هائلاً آخر للطلب المخصص على الكهرباء البحرية النظيفة.\n• صُممت مشاريع المرافق المستقبلية صراحةً لتكون بمثابة محاور لتوليد الوقود الخالي من الكربون بهدف إزالة الكربون من الصناعات الثقيلة العالمية.\n• يمتلك إتقان نماذج تصدير "Power-to-X" القدرة على إطلاق مليارات الدولارات الحاسمة من الاستثمارات الأجنبية المباشرة لأمريكا اللاتينية.'
      }
    ]
  },
  {
    id: 'china-leadership',
    title: 'ريادة الصين في سوق طاقة الرياح البحرية',
    description: 'رؤى حول انتقال الصين الاستراتيجي إلى المنطقة الاقتصادية الخالصة (EEZ)، ومجموعاتها الصناعية الخمس، وتحديات الرياح العائمة.',
    icon: Anchor,
    color: '#f43f5e',
    subtopics: [
      {
        title: 'الأهداف الاستراتيجية',
        content: '• الأهداف التوسعية القوية للصين مدعومة بشكل صارم بـ "الخطة الخمسية الرابعة عشرة" الوطنية لاستقلال الطاقة.\n• يفرض "إعلان بكين 2.0" القوي منشآت رياح بحرية جديدة ضخمة ومستدامة وسنوية لا تقل عن 15 جيجاواط.\n• يوفر هذا الضمان المدعوم من الدولة خط أنابيب محلي مستقر تمامًا، مما يدفع إلى المخاطرة التكنولوجية المستمرة وتوسيع سلسلة التوريد بشدة.\n• تملي الاستراتيجية المركزية صراحةً التحول السريع من الإعانات المركزية نحو "تكافؤ الشبكة" الشامل في السوق بحلول عام 2025.\n• تهدف مشاريع المياه العميقة الحديثة في المحافظات الرائدة مثل قوانغدونغ وفوجيان الآن إلى عوائد إيجابية تمامًا على تسعير الكهرباء في السوق.'
      },
      {
        title: 'التحول المكاني',
        content: '• مع بلوغ المناطق القريبة من الشاطئ التي يتراوح عمقها بين 30 و 50 متراً الحدود البيئية والشحن التجاري الصارمة، ينتقل التطوير إلى المياه العميقة.\n• تقع مشاريع "Deep Shore" مباشرة في المنطقة الاقتصادية الخالصة (EEZ)، وتمتد على بعد 50-100 كيلومتر من الساحل في أعماق 50 متراً فأكثر.\n• في المحاور الساحلية السائدة مثل قوانغدونغ، يُتوقع أن تمثل المشاريع الضخمة القائمة على EEZ نسبة هائلة تبلغ 66٪ من القدرة الجديدة بحلول 2030.\n• يعمل هذا التحول المكاني النشط كعامل محفز أساسي يجبر على النشر السريع بشكل لا يصدق لنقل التيار المستمر عالي الجهد (±525kV).\n• يتطلب تطوير منطقة EEZ بشكل صارم الابتكار التجاري الفوري للبنى التحتية العائمة المرنة والفعالة من حيث التكلفة والقابلة للإنتاج الضخم.'
      },
      {
        title: 'معالم الرياح العائمة',
        content: '• تمثل منصة "Mingyang Tiancheng" نقلة نوعية، حيث تستخدم تصميماً ثورياً مزدوج الدوارات على شكل V لزيادة كثافة الطاقة إلى أقصى حد.\n• يمثل نشر نظام "Sanxia Linghang" المذهل بقدرة 16 ميجاواط قفزة نوعية كبرى في قدرة الأساسات العائمة للوحدة الواحدة.\n• حقق مشروع "CNOOC Guanlan" العملاق مرتبة أولية عالمياً كأول توربين رياح عائم يوفر طاقة مباشرة وأساسية لمنصة نفط بحرية.\n• يخدم النموذج الفريد للصين المتمثل في "طاقة الرياح البحرية + النفط والغاز" كمخطط قوي لانتقال استخراج الطاقة التقليدية نحو الصفر الكربوني.\n• تسلط هذه المعالم السريعة والمتتالية للمياه العميقة الضوء على التنوع والسرعة التي لا مثيل لها للابتكار في المعدات الصينية.'
      }
    ]
  },
  {
    id: 'industrial-components',
    title: 'نظرة فاحصة على مكونات السلسلة الصناعية في الصين',
    description: 'تحليل شامل للتوربينات بقدرة 26 ميجاواط، والشفرات الطويلة للغاية، وثورة كابلات التيار المستمر ±525kV.',
    icon: Settings,
    color: '#eab308',
    subtopics: [
      {
        title: 'توربينات الرياح والمسارات التقنية',
        content: '• يهيمن المسار التقني نصف المباشر عالي المرونة (مغناطيس دائم متوسط السرعة) بالكامل على السوق الصيني المحلي.\n• تسارع سباق سعة الصناعة بشدة، ليدفع بالبحث والنشر بسرعة تتجاوز 16 ميجاواط مباشرة إلى حقبة الـ 20 ميجاواط وما بعده.\n• حطمت شركة دونغفانغ للكهرباء (DEC) المعالم الحالية بنجاح من خلال طرح نموذج أولي ضخم لتوربين رياح بحري بقدرة 26 ميجاواط.\n• يتميز معيار الـ 26 ميجاواط هذا بقطر دوار غير مسبوق يزيد عن 290 متراً ومصمم هندسياً بشدة للصمود أمام أعاصير من الفئة 17.\n• يعد رفع سعة الوحدة الفردية أمراً حاسماً لتقليل العدد الإجمالي للأساسات ووصلات الكابلات المطلوبة رياضياً لكل جيجاواط.'
      },
      {
        title: 'تكنولوجيا الشفرات',
        content: '• دخلت الهندسة الديناميكية الهوائية البحرية رسمياً "عصر الـ 150 متراً"، مما استلزم ترقيات ضخمة في تصنيع المواد المركبة الآلية.\n• يعتبر استخدام السحب البثقي لألياف الكربون لأغطية الصاري (spar caps) مطلباً عالمياً صارماً الآن لإدارة أحمال الوزن للتوربينات بقدرة 10 ميجاواط فأكثر.\n• تستفيد خطوط الإنتاج الآلية المتطورة الآن من طبقات موجهة بالليزر الدقيق لضمان سلامة هيكلية خالية من العيوب عبر أطوال تزيد عن 153 متراً.\n• لمعالجة مشكلات دورة الحياة ونهاية العمر الافتراضي الشديدة، قام المصنعون باختبار ونشر شفرات ضخمة تزيد عن 220 متراً قابلة لإعادة التدوير بالكامل.\n• يعد دمج تقنيات راتنج "EzCiclo" المتقدمة رياضياً بالوصول إلى معدل استرداد هيكلي غير مسبوق يبلغ 95٪ للمواد المركبة.'
      },
      {
        title: 'الأنظمة الميكانيكية والكهربائية',
        content: '• صناديق تروس عالية السعة: تم تحقيق حدود لكثافة عزم الدوران غير مسبوقة عن طريق التحول بقوة نحو تطبيق المحامل الانزلاقية (plain bearings).\n• عمر المحمل: تضمن المحامل الانزلاقية قدرة هيكلية أعلى على تحمل الأحمال وعمراً تشغيلياً نظرياً يتجاوز 25 عاماً.\n• المولدات: دفعت الصناعة بشكل حاسم نحو حقبة الجهد العالي (10.5kV-35kV) لأنظمة المغناطيس الدائم الضخمة.\n• المحولات (الأجهزة): تم تحقيق استقلالية شديدة لسلسلة التوريد من خلال وحدات كهربائية (IGBT) محلية عالية السعة.\n• المحولات (البرمجيات): تم نشر أول ملفات تعريف للتحويل المتكاملة مع الشبكة بقوة 25 ميجاواط عالمياً، مما أتاح لمزارع الرياح دعم استقرار تردد الشبكة.'
      },
      {
        title: 'المكونات الهيكلية',
        content: '• المحامل الرئيسية: كسر المصنعون الثقيلين المحليون الصينيون بنجاح الاحتكارات الأوروبية طويلة الأمد في المحامل الكبيرة للغاية للعمود الرئيسي.\n• معدلات التوطين: حققت الصناعة بسرعة معدل توطين محلي مذهل يتجاوز 70٪ للوحدات الحرجة المعقدة للغاية من فئة 16 ميجاواط فأكثر.\n• حجم الأساس: يقوم المندسـون البحريـون الآن بشكل روتيني بنـشر وتركيب أساسات أحادية ضخمة (monopiles) يسهل أن يتجاوز وزنها 2000 طن.\n• الأساسات الشبكية (Jacket Foundations): تعتمد تركيبات المياه العميقة بالكامل على سترات هيكلية ثقيلة مصممة بشدة لبيئات الفئة القاسية للأعاصير.\n• البنى التحتية التحتية: يعتمد التوسع المستقبلي في المنطقة الاقتصادية الخالصة بشكل كلي على الإنتاج الضخم لتصميمات قواعد عائمة شبه مغمورة معيارية.'
      },
      {
        title: 'نقل الطاقة',
        content: '• حقق نقل الطاقة تحت سطح البحر في المياه العميقة قفزة على مستوى الأجيال من خلال نشر الكابلات البحرية الثقيلة (HVDC) بقوة ±525kV بنجاح.\n• يتم الآن استخدام كابلات تيار مستمر بقلب من الألومنيوم الضخم بمساحة 5000 مم² لإخلاء جيجاواط متعدة بكفاءة من المشاريع الكبرى في EEZ.\n• استخدام قلب الألومنيوم لنقل الجهد العالي يوفر للمطورين انخفاضاً أساسياً ضخماً بنسبة 20-30٪ في (CAPEX) مقارنة بالشبكات النحاسية القديمة.\n• الكابلات البحرية الديناميكية بقوة 66kV عالية المرونة ومقاومة للإجهاد تدخل حالياً مرحلة الإنتاج الضخم بصفة خاصة لدعم المنصات العائمة.\n• تتميز هذه الكابلات الديناميكية بقوة 66kV بتدريع متعدد الطبقات عالي الجودة ومصمم بقوة لتحمل ملايين دورات الإجهاد الموجي المستمرة.'
      }
    ]
  },
  {
    id: 'offshore-infrastructure',
    title: 'البنية التحتية البحرية وخدمات الدعم',
    description: 'مراجعة الموانئ الأم المتخصصة، وسفن التركيب عالية الحمولة (WTIV)، والنظام البيئي للاختبار والبحث والتطوير على مستوى عالمي.',
    icon: Ship,
    color: '#3b82f6',
    subtopics: [
      {
        title: 'اللوجستيات البحرية',
        content: '• تقوم الصين حالياً بقوة بإعادة تصميم البنية التحتية الساحلية من خلال تطوير "موانئ الرياح البحرية الأساسية" التي تتميز بأرصفة للمياه العميقة.\n• تم تدعيم الأرصفة في مراكز التجميع هذه لتحمل حمولة هائلة تبلغ 100 طن/م²، مما يسمح بتجميع الأبراج الثقيلة بشكل عمودي.\n• توفر عمليات النشر الواسعة لسفن الجيل الرابع لتثبيت التوربينات (WTIV) سعة رفع غير مسبوقة بـ 3600 طن في عمق مياه يبلغ 70م.\n• تؤدي التكاملات المتقدمة في السفن إلى تسريع كبير لمرحلة التركيب وتحسين الاستجابة السريعة في "فترات الطقس المثالي".\n• هذه التطورات اللوجستية قللت الدورة الزمنية لأعمال تركيب كل توربين بحري منفرد من 7 أيام حتى 48 ساعة فقط.'
      },
      {
        title: 'أنظمة الإرساء',
        content: '• تقوم الصناعة بإرساء معايير فنية صارمة لأنظمة الإرساء من فئة فائقة الجودة ضمن مناطق الأعاصير.\n• يشكل النشر الموسع لسلاسل الإرساء الثقيلة من تصنيف R6 القاعدة الأساسية لضمان بقاء المنصات البحرية في فترات الطقس المتطرف.\n• تعطي تصاميم الإرساء للمياه العميقة للجيل التالي الأولوية وبوضوح للحد من التعدي على قاع البحر والتأثيرات البيئية.\n• تخضع حالياً حبال تركيب اصطناعية عالية المقاومة لاختبارات الإجهاد الصارمة المرافقة لسلاسل الصلب التقليدية لتخفيف الوزن بالمياه العميقة.\n• لابد من هندسة إرساء متقدمة قادرة بفاعلية على السيطرة على الأحمال الديناميكية للرياح والمنصات متعددة الميجاواط في الفئة الـ 5 للأعاصير.'
      },
      {
        title: 'الاختبار وإصدار الشهادات',
        content: '• يقوم المركز الوطني لشهادات الرياح بتدشين أكبر مختبر داخلي بالكامل على مستوى العالم للاختبارات الهيكلية للشفرات.\n• هذا المختبر يستطيع إجراء فحص ثنائي المحور لتجنب الإجهاد بشكل مستمر للشفرات الأطول بحجم يبلغ 150 متراً.\n• توفر المنصات الشاملة (6-DOF) للبيئة البحرية الأرضية المحاكاة الأدق لتيارات وتقلبات طاقه الرياح قبل نشر أي من الوحدات الضخمة بالبحر.\n• أصبحت الاختبارات الإلزامية الكاملة على الأحمال ضرورة كبرى لكل تصاميم أجهزة الرياح المتجاوزة للفئة الـ 20 ميجاواط.\n• يتعاون مصنعو الاجهزة الأصليون (OEMs) الآسيويون عن كثب مع (DNV) وغيرها لضمان نجاح معايير (IEC 61400-1) بكل استدامة وثبات.'
      }
    ]
  },
  {
    id: 'internationalization',
    title: 'استراتيجية التدويل',
    description: 'تحليل نموذج الخروج إلى العالمية عبر إنشاء مراكز الإنتاج المحلية، والميزة التنافسية للتصدير الصيني بالخارج.',
    icon: Briefcase,
    color: '#10b981',
    subtopics: [
      {
        title: 'نموذج "الخروج إلى العالمية"',
        content: '• انتقل المصنعون الآسيويون الرائدون صراحةً من تصدير القطع المجمعة إلى إنشاء مصانع وقواعد في قارات متعددة.\n• ترتكز منهجيات التصدير بشكل أقوى الان بمبدأ التوربين الكامل (المقاولات والترتيب المعماري والتمويل - EPC+F).\n• يستقطب الان المقاول الدولي الاسواق الحديثة والمفتقدة للسيولة التمويلية لتأمين متطلبات سلاسل توريدهم الخاصه بشكل مرن.\n• قامت الشركات المهيمنة على الصناعة بإنشاء منشئات تصنيعية كبرى للتوليد الريحي البحري ضمن البرازيل، والهند، وفيتنام.\n• تأسيس تواجد تصنيعي ومحلي بهذه القوه يعتبر الان تكتيكاً استراتيجياً لاستقطاب والالتزام بشروط نسبة المكون المحلي (LCR).'
      },
      {
        title: 'المزايا التنافسية',
        content: '• تقدم الأجهزة الآسيوية المصنعة بمقاييس عملاقة تفوقاً تنافسياً بحوالي الـ 20% وأكثر أمام النظراء بالقطاع الغربي الموازي.\n• هذا التنافس المحوري يعود أصله لسلسلة إمداد محلية متكاملة تماماً ضمن دائره مكثفة تتيح إنتاج كافة القطع الفرعية داخليا بنسبة 100٪.\n• يوفر النظام البيئي المركز داخل اطار الـ "200 كم" زمناً للتسليم أقصر بكثير وبمردود أوثق لتقليص الأثر على المتعاقدين.\n• بصرف النظر عن تكلفة راس المال، تتفوق المشاريع بمنح المطورين مواعيد تسليم قصوى لتقليص حجم الأخطار الكلية والمخاوف الميدانية.\n• حصلت بنجاح وحطمت المعايير الفائقة العديد من النماذج التجريبية وتأهلت للتصريح الفعلي بالاسواق الأوروبية الكبرى.'
      }
    ]
  },
  {
    id: 'future-outlook',
    title: 'النظرة المستقبلية والأنظمة البيئية المتكاملة',
    description: 'تطور معدلات النمو المتوقعة عالمياً والتوافق الشامل في نماذج طاقة الرياح البحرية الاقتصادية.',
    icon: Zap,
    color: '#f97316',
    subtopics: [
      {
        title: 'التوقعات (2025–2034)',
        content: '• تصب الإجماعات على الصدارة الحاسمة لهذا العقد بشكل مجزي للنمو الفوري والقوي عالمياً لكل منشئات ومقاولات هذا الحقل.\n• يُخصص النصف الاول لمواكبة تطلعات الاساسات الثقيلة وربط شبكات الكيابل لربط شبكات التوزيع العميقة بطرق محسنة.\n• تصنف مسارات السنوات ما بين (2030-2035) للوصول للاعتماد الفعلي التجريبي للمواكبه في النظم و"تسويقات الربط الطافي".\n• بحلول أطوار 2034 مِيزت الافق التراكمية العالمية لأهداف رياح الطفو بما يزيد على 19 جيجاواط من الطاقة الإدماجية الجمة.\n• يعود الهدف الأول من هذي السنين لتوجيه بوصلة التخفيض من مجمل مصاريف الأجهزة العائمة وتشييدها للتراجع عن حاجز $2000 للواط الواحد.'
      },
      {
        title: '"طاقة الرياح البحرية +"',
        content: '• يسعى نموذج الحقول الموحده لمواكبه تربويات الـ "مراعي البحرية" ليضفي تكاملية بين الثروة المائية والكهرباء بمسمى (الصوامع الزرقاء).\n• دمج المرافق الصاعد بقوه يشمل الهيدروجين النظيف بمجمع للتحليل الكهرو-عنصري لخفض هدر الفائض بأكثر الطرق ابتكاراً.\n• أنظمة الأغشية لتحلية ضخ المياه توفر نظم ديمومة خالية تماماً من الكربونة والمستهدف تدشينها بسواحل التجهيز اللوجستية.\n• يُصمم تجهيز توربينات الفتره الحاليه لبيئة الاصلاح الذاتي مع التوأمة الرقمية للتنبؤ بالمشكلات وعلاجها بالذكاء المتقدم.\n• يُشكل قطاع الطاقه المغمور هذا "جزراً محوريه" متكاملة تغذي قطاعات صناعية عملاقة للكهرباء النظيفة والبيئة الحيوية المتعددة.'
      }
    ]
  }
];
