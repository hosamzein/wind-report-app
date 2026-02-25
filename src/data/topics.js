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

export const topics = [
  {
    id: 'market-overview',
    title: 'Global Offshore Wind Market Overview',
    description: 'Analysis of the global market in 2024–2025, regional leaders, economic trends, and technology maturity.',
    icon: Globe2,
    color: 'var(--accent-blue)',
    subtopics: [
      {
        title: 'Current Development Status',
        content: 'The global offshore wind industry faced multiple challenges in 2024, including macroeconomic fluctuations, geopolitical conflicts, and inflation leading to increased capital costs. Despite a short-term installation slowdown, the industry exhibits long-term resilience with an anticipated compound annual growth rate (CAGR) of 15% to 28% from 2024 to 2034. By 2030, annual new installations are expected to exceed 30 GW, pushing cumulative global capacity to an estimated 441 GW by the end of 2034.'
      },
      {
        title: 'Regional Leaders',
        content: 'Growth over the next decade will be primarily driven by the Asia-Pacific region (especially China) and Europe, with these two markets continuing to dominate. Established markets in Northern Europe and China are scaling rapidly, while new emerging markets such as Vietnam, the Philippines, Japan, and South Korea are accelerating their offshore strategies. Annual installations are projected to triple by 2027 compared to 2024 baselines.'
      },
      {
        title: 'Economic Trends',
        content: 'Cost reduction remains a primary objective globally, though Western markets have faced inflation-driven Levelized Cost of Energy (LCOE) increases recently. Conversely, China maintains aggressive cost reductions; in 2024, Chinese construction costs ranged from 9,000 to 12,500 RMB/kW. Forecasts indicate that nearshore construction costs in China could fall to 7,800-10,500 RMB/kW by 2030, driving nearshore LCOE down to approximately 0.25 RMB/kWh.'
      },
      {
        title: 'Technology Maturity',
        content: 'The industry is witnessing rapid turbine upscaling. In China, the average capacity of newly installed offshore turbines reaching 9.95 MW in 2024, with 16 MW turbines entering mass application and world-record 26 MW prototypes connecting to the grid. Meanwhile, the commercialization of floating offshore wind has been postponed to post-2030, though it is expected to achieve leapfrog development thereafter, capturing a significant market share.'
      }
    ]
  },
  {
    id: 'supply-chain-status',
    title: 'Global Supply Chain Status & Challenges',
    description: 'Evaluation of manufacturing capacity, macroeconomic pressures, and geopolitical risks.',
    icon: TrendingDown,
    color: 'var(--accent-purple)',
    subtopics: [
      {
        title: 'Supply-Demand Mismatch',
        content: 'Aggressive national targets are increasingly misaligned with current manufacturing capacities. Severe global bottlenecks are anticipated for core components such as heavy castings, ultra-large gearboxes, subsea cables (particularly HVDC), and Wind Turbine Installation Vessels (WTIVs). The Latin American (LAC) region, for example, is heavily reliant on imports due to a complete absence of local offshore blade, gearbox, and generator manufacturing facilities.'
      },
      {
        title: 'Macroeconomic Pressures',
        content: 'The capital-intensive nature of offshore wind means the sector is highly vulnerable to rising interest rates and inflation. High borrowing costs coupled with supply chain constraints have forced developers to renegotiate or cancel off-take agreements in Western markets. The instability of government policies, unpredictable auction criteria, and lengthy permitting processes further hinder forward-looking investments in necessary support infrastructure like ports and transmission grids.'
      },
      {
        title: 'Geopolitical & Policy Risks',
        content: 'Geopolitical tensions and aggressive localization policies (such as the U.S. Inflation Reduction Act and Europe’s "Green Local Industry" focus) emphasize local capacity building but also risk fragmenting the global supply chain. Additionally, there are strategic "stranglehold" risks regarding critical minerals and rare earth elements (like NdFeB magnets and copper) essential for direct-drive and permanent magnet generators.'
      }
    ]
  },
  {
    id: 'lac-region',
    title: 'Latin American & Caribbean Focus',
    description: 'High wind speed potential, industrial readiness, component bottlenecks, and strategic drivers like green hydrogen.',
    icon: Wind,
    color: 'var(--accent-teal)',
    subtopics: [
      {
        title: 'Resource Endowment',
        content: 'The LAC region, particularly Brazil, Colombia, and Chile, possesses immense technical potential for offshore wind. Brazil alone is estimated to have a technical potential of 480 GW for fixed-bottom offshore wind and a massive 748 GW for floating wind. Despite this, the region plans only a few demonstration projects by 2030 due to current infrastructural barriers.'
      },
      {
        title: 'Industrial Readiness',
        content: 'While there is a functional onshore wind supply chain (e.g., WEG in Brazil for generators, various onshore tower manufacturers in Brazil and Mexico), the offshore manufacturing base is practically non-existent. There are no facilities capable of producing the long blades, large offshore gearboxes, multi-megawatt offshore generators, or specialized substructures currently demanded by the offshore market.'
      },
      {
        title: 'Component Bottlenecks',
        content: 'Specific supply and demand analysis forecasts severe bottlenecks across multiple components through 2045. For instance, the region depends heavily on imported castings (with China producing over 85% globally) due to a lack of advanced local foundries. Marine logistics also pose a massive bottleneck, with zero operational WTIVs stationed in Latin America and an urgent need for upgraded "Mother Ports" capable of marshalling floating wind foundations.'
      },
      {
        title: 'Strategic Drivers',
        content: 'To justify the massive CAPEX required for offshore wind without a mature grid, the LAC region is looking towards green hydrogen (Power-to-X) as a key strategic driver. Countries like Colombia are drafting "Green Hydrogen Roadmaps" designed to utilize offshore wind for zero-carbon fuel exports. Furthermore, robust regional copper mining (Chile and Peru) offers a steady supply of critical grid materials.'
      }
    ]
  },
  {
    id: 'china-leadership',
    title: 'China’s Offshore Wind Market Leadership',
    description: 'Implementation of targets, transition to deep-water EEZ, and floating wind milestones.',
    icon: Anchor,
    color: '#f43f5e',
    subtopics: [
      {
        title: 'Strategic Goals',
        content: 'Guided by the "15th Five-Year Plan" and the "Beijing Declaration 2.0," China aims to maintain dominant domestic expansion while driving technological innovation. The declaration mandates annual new offshore wind installations of no less than 15 GW during the next five years, aiming for a cumulative scale exceeding 150 GW by 2030, reinforcing its unbroken five-year streak as the global leader in new capacity.'
      },
      {
        title: 'Spatial Shift',
        content: 'Chinese offshore development is rapidly transitioning from nearshore (30–50 meter depths) to deep-water Exclusive Economic Zones (EEZ). Based on provincial long-term plans, projects situated in the EEZ will account for roughly 66% of Guangdong’s new capacity by 2030. This shift is driving demand for ultra-high voltage transmission and robust floating substructures.'
      },
      {
        title: 'Floating Wind Milestones',
        content: 'China operates multiple floating wind demonstration projects, reaching a cumulative 22.95 MW across five initial projects (e.g., "CNOOC Guanlan" and "Fuyao"). Notable advancements include the 2024 "Mingyang Tiancheng" project featuring a dual-rotor 16.6 MW floating platform, and Huaneng’s under-development 17 MW-class direct-drive floating prototype undergoing advanced multi-field coupling and survival testing in typhoons.'
      }
    ]
  },
  {
    id: 'industrial-components',
    title: 'China’s Industrial Chain Components',
    description: 'Turbines, blades, mechanical systems, structural components, and subsea cables.',
    icon: Settings,
    color: '#eab308',
    subtopics: [
      {
        title: 'Wind Turbines & Technical Routes',
        content: 'The semi-direct drive (medium-speed permanent magnet) technical route absolutely dominates the Chinese offshore market, accounting for over 90% of newly added capacity in 2024. Seven Chinese OEMs made the global Top 10 list. A major milestone was achieved by Dongfang Electric with the successful grid connection of a 26 MW-class offshore turbine, setting world records for single-unit capacity and rotor diameter.'
      },
      {
        title: 'Blade Technology',
        content: 'China has confidently entered the 100-meter blade era, with average offshore rotor diameters hitting 235 meters in 2024 (and maxing at 292 meters). Carbon fiber spar caps are standard for 10 MW+ blades. Trailblazing sustainability, companies successfully installed the first 220m+ recyclable blades using Swancor’s "EzCiclo" resin, ensuring over 95% composite recovery post-decommissioning without pollution.'
      },
      {
        title: 'Mechanical & Electrical Systems',
        content: 'Gearboxes: NGC leads globally, delivering 20-22 MW fully integrated medium-speed drive chains with advanced sliding bearings. \nGenerators: CRRC and Yongji Electric dominate, pushing limits with 26 MW generators and breaking into the 35 kV ultra-high voltage doubly-fed era. \nConverters: Innovations by Sungrow include the rollout of 1800 V ultra-high power converters and the world\'s first 25 MW grid-forming converter.'
      },
      {
        title: 'Structural Components',
        content: 'Bearings: Domestic firms like LYC and ZYS broke the foreign monopoly on ultra-large bearings, releasing 20+ MW main shaft bearings and achieving over 70% localization. \nTowers & Foundations: Haily Wind Power and Dajia Heavy Industry provide formidable production scales. Dajia has pioneered the export of ultra-large monopiles to Europe, pushing boundaries via customized self-propelled modular transporters (SPMTs).'
      },
      {
        title: 'Transmission',
        content: 'Subsea Cable giants ZTT, Orient Cable, and Hengtong possess leading 500 kV AC track records. Notably, ZTT developed the world’s first ±550 kV 90°C DC subsea cable and massive 5000 mm² aluminum core DC cables. They have also commercialized 35 kV and 66 kV dynamic cables tailored for violent movement in floating wind applications.'
      }
    ]
  },
  {
    id: 'offshore-infrastructure',
    title: 'Offshore Infrastructure & Services',
    description: 'Marine logistics, mooring systems, testing, and full-scale blade testing laboratories.',
    icon: Ship,
    color: '#3b82f6',
    subtopics: [
      {
        title: 'Marine Logistics & Mother Ports',
        content: 'To support massive components, over ten specialized "Offshore Wind Mother Ports" are planned along the coast (e.g., Nantong, Yancheng, Shantou). China leads in vessel construction, recently launching the 4th-generation "Zhigao" WTIV capable of lifting 3600 tons, reducing installation cyclic times to 2-3 days per turbine. Chinese shipyards currently hold the bulk of European orders for new WTIVs and Service Operation Vessels (SOVs).'
      },
      {
        title: 'Mooring Systems',
        content: 'Floating wind anchors rely on ultra-high-grade mooring chains (R5/R6 grade). Jiangsu Asxing Anchor Chain is one of only two companies globally (alongside Spain\'s Vicinay) with full-class certifications for offshore marine engineering, supporting domestic floating projects and capturing significant international market share.'
      },
      {
        title: 'Testing & Certification',
        content: 'China possesses world-class R&D testing environments to validate innovations before sea deployment. The CGC National Center in Yangjiang operates the world’s largest indoor blade testing lab capable of full-scale structural testing for 150-meter blades. Simultaneously, grid integration and extreme condition tests (up to 320MW class setups) are performed at various national test bases.'
      }
    ]
  },
  {
    id: 'internationalization',
    title: 'Internationalization Strategy',
    description: 'Transition to localized manufacturing bases globally and maintaining competitive advantages.',
    icon: Briefcase,
    color: '#10b981',
    subtopics: [
      {
        title: '"Going Out" Model',
        content: 'Chinese firms are shifting from simple product exports to establishing deep localized manufacturing hubs. Goldwind operates factories in Brazil, Germany, and Spain. Sinoma Blade opened its first overseas blade factory in Bahia, Brazil, and Dajia Heavy Industry established a global floating wind R&D center in Madrid, Europe.'
      },
      {
        title: 'Competitive Advantages',
        content: 'Chinese wind equipment provides a roughly 20% price advantage over overseas competitors. Coupled with mature, stable domestic supply chains immune to Western material shortages, Chinese OEMs deliver reliable timelines. Furthermore, they offer highly flexible business models, including "Turbine + Engineering, Procurement, and Construction (EPC)" integrated solutions that appeal to emerging markets.'
      }
    ]
  },
  {
    id: 'future-outlook',
    title: 'Future Outlook & Integrated Ecosystems',
    description: 'Forecasts, expected commercialization of floating wind, and the "Offshore Wind +" integration model.',
    icon: Zap,
    color: '#f97316',
    subtopics: [
      {
        title: 'Forecast (2025–2034)',
        content: 'Global capacity is set to explode after 2027. While fixed-bottom turbines will dominate this decade, floating wind technology is expected to see a leapfrog development post-2030, climbing to 19 GW cumulative global installed capacity by 2034 with Europe and Asia-Pacific leading the charge.'
      },
      {
        title: '"Offshore Wind +" Ecosystem',
        content: 'The future of the industry revolves around multi-functional marine platforms. The "Offshore Wind +" model integrates power generation with Power-to-X (green hydrogen/ammonia production), Marine Ranching (deep-sea fisheries), and seawater desalination. This synergistic approach aims to solve curtailment issues and construct zero-carbon integrated energy islands.'
      }
    ]
  }
];
