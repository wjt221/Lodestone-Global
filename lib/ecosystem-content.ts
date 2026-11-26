// Owner-approved positioning; public-facing copy only. No private client data or internal investment economics.
export type PracticeId = "e3" | "capital" | "lfa";
export type Block = {id:string;title:string;intro:string;items:{title:string;body:string}[]};
export type Practice = {name:string;href:string;canonical:string;logo:{src:string;width:number;height:number};photo:"scale"|"compound"|"steward";headline:string;lead:string;problemTitle:string;problem:string;sections:Block[];cta:string;disclosure:string};
export const practices:Record<PracticeId,Practice> = {
  "e3": {
    "name": "E3 Scale Network",
    "href": "/e3-scale-network",
    "canonical": "https://www.e3scale.com/",
    "logo": {
      "src": "/logo/e3-icon-navy.png",
      "width": 700,
      "height": 497
    },
    "photo": "scale",
    "headline": "Unlock the potential of your business.",
    "lead": "An invitation-only community of business owners, backed by accomplished operating leaders, specialist expertise and our proprietary Compass platform. We partner with management to scale rapidly and sustainably, with economics aligned to the value we create together.",
    "problemTitle": "The cost of figuring it out alone.",
    "problem": "Your team may get there on its own. But the journey takes longer, the founder stays deeply involved, and the risks of expensive mistakes are greater. E3 brings experience from people who have faced those decisions before, access to expertise that would be difficult to hire, and a disciplined system for turning ambition into results.",
    "cta": "Explore membership",
    "disclosure": "Membership and investment arrangements are subject to selection, diligence and separate agreements. Value creation is an objective, not a guarantee. Investment opportunities through affiliates are subject to separate terms and eligibility.",
    "sections": [
      {
        "id": "approach",
        "title": "Our approach",
        "intro": "We invest our time, reputation and expertise alongside the owner. Base fees are designed to cover delivery costs and overhead; our upside is tied to the value created, under the terms of each engagement.",
        "items": [
          {
            "title": "Envision",
            "body": "Develop a value creation thesis: where the business can go, what is holding it back and which economic levers matter most. Establish a baseline, ambitions and a focused first 100 days."
          },
          {
            "title": "Execute",
            "body": "Work with the CEO and leadership team to turn the thesis into a small number of priorities, decisions, owners and milestones. Bring specialist capacity to the moments it matters."
          },
          {
            "title": "Expand",
            "body": "Build the leadership and management systems that make progress repeatable. Revisit the thesis as evidence changes, and expand the opportunities available to the owner."
          }
        ]
      },
      {
        "id": "operating-partners",
        "title": "Operating Partners",
        "intro": "Exceptional business leaders who have built, scaled or transformed significant companies, selected for their judgment, coaching ability and desire to help other entrepreneurs succeed.",
        "items": [
          {
            "title": "Lead Operating Partner",
            "body": "A dedicated senior operator who understands the business, challenges assumptions, coaches the CEO and keeps attention on the highest-value priorities. Management retains responsibility for running the company."
          },
          {
            "title": "Strategic Operating Partners",
            "body": "Experienced functional leaders who bring deep specialist judgment to pivotal decisions, from pricing and leadership design to acquisitions and capital allocation."
          },
          {
            "title": "Delivery Operating Partners",
            "body": "Hands-on expertise to help the team implement defined initiatives, build capability and turn decisions into operating results."
          }
        ]
      },
      {
        "id": "functional-expertise",
        "title": "Functional expertise",
        "intro": "A business rarely has every capability it needs at every stage of growth. Members can access specialists across the operating disciplines, without building an entire executive bench in-house.",
        "items": [
          {
            "title": "Strategy & governance",
            "body": "Strategy, governance, management systems, KPI architecture, decision rights and accountability."
          },
          {
            "title": "People & organization",
            "body": "Human capital, organizational design, leadership, compensation and succession."
          },
          {
            "title": "Commercial growth",
            "body": "Sales, marketing, pricing and customer experience."
          },
          {
            "title": "Operational excellence",
            "body": "Operations, procurement, supply chain, productivity, technology and AI."
          },
          {
            "title": "Finance & capital",
            "body": "Strategic finance, capital allocation, M&A, integration and financial performance."
          }
        ]
      },
      {
        "id": "compass",
        "title": "E3 Compass",
        "intro": "Our proprietary AI-driven value creation platform gives Operating Partners a continuously evolving understanding of the business. It combines E3 knowledge with company-specific evidence and experienced human judgment.",
        "items": [
          {
            "title": "E3 knowledge",
            "body": "Operating frameworks, functional expertise and repeatable E3 Plays support the diagnosis and execution of specific business challenges."
          },
          {
            "title": "Member context",
            "body": "Strategy, financial results, operating plans, people decisions and business history provide the context for better questions."
          },
          {
            "title": "Meeting intelligence",
            "body": "Decisions, commitments and emerging evidence are tracked over time so the team can see what has changed and what still needs attention."
          },
          {
            "title": "Operating judgment",
            "body": "The Operating Partner tests hypotheses against evidence, challenges assumptions and decides when specialist support is warranted."
          },
          {
            "title": "A living Value Creation Thesis",
            "body": "Compass helps maintain a focused economic and causal thesis, distinguish symptoms from constraints, prepare for meetings and track the priorities with the greatest potential impact. AI assists judgment; verified evidence and management decisions remain authoritative."
          }
        ]
      },
      {
        "id": "network",
        "title": "Member community & academy",
        "intro": "Our ambition is a deliberately limited community of 100–400 member companies, built around trust, ambition and meaningful contribution.",
        "items": [
          {
            "title": "Forums",
            "body": "Confidential peer groups where owners can work through consequential decisions with people who understand the responsibility of ownership."
          },
          {
            "title": "Member connections",
            "body": "Curated introductions based on needs, expertise and shared opportunities."
          },
          {
            "title": "E3 Academy",
            "body": "Structured learning designed to help entrepreneurs become stronger leaders, operators and owners."
          },
          {
            "title": "Learning events & community",
            "body": "Engage with experienced leaders and specialists, build enduring relationships and share what you have learned with others."
          }
        ]
      },
      {
        "id": "institutional-partnerships",
        "title": "Institutional partnerships",
        "intro": "For private equity firms, independent sponsors and family offices making direct investments, E3 and Lodestone Global extend operating and governance capabilities across the portfolio and at the GP level.",
        "items": [
          {
            "title": "Governance at scale",
            "body": "Lodestone Global helps build and strengthen portfolio company boards, establish effective oversight and improve accountability."
          },
          {
            "title": "Execution at scale",
            "body": "E3 places Operating Partners in portfolio companies with functional expertise and Compass. Where agreed, incentives can participate in company management incentive plans."
          },
          {
            "title": "Research & investment process",
            "body": "A dedicated Operating Partner at the GP level strengthens sector research, deal diligence, value creation underwriting and post-acquisition planning."
          },
          {
            "title": "Aligned partnership",
            "body": "Institutional engagements may include an investment right in the GP, alongside portfolio company alignment. Terms are negotiated separately. E3 also supports Lodestone Capital investments and appropriate direct investments by LFA clients."
          }
        ]
      },
      {
        "id": "membership",
        "title": "Membership",
        "intro": "We select businesses as investment partners, not simply customers. Each prospective member is considered by our Investment Committee against economic and cultural criteria.",
        "items": [
          {
            "title": "An investable business",
            "body": "An attractive underlying business with credible potential to scale quickly and sustainably."
          },
          {
            "title": "A value creation thesis",
            "body": "A clear, evidence-based view of how our partnership could materially improve the business."
          },
          {
            "title": "Character and contribution",
            "body": "Integrity, humility, respect, coachability and a genuine desire to contribute to the community. We have no place for people who mistreat others."
          },
          {
            "title": "Purpose",
            "body": "Owners who want to unlock the potential of their people and business, and do something good in the world."
          }
        ]
      }
    ]
  },
  "capital": {
    "name": "Lodestone Capital",
    "href": "/lodestone-capital",
    "canonical": "https://capital.lodestoneglobal.com/",
    "logo": {
      "src": "/logo/lodestone-capital-horizontal-navy.png",
      "width": 1000,
      "height": 300
    },
    "photo": "compound",
    "headline": "Investing with an owner’s perspective.",
    "lead": "Lodestone Capital invests across private equity, real estate and alternative strategies. Our investment approach is rooted in proprietary relationships, operating expertise, disciplined governance and a long-term perspective.",
    "problemTitle": "An investment platform built around relationships.",
    "problem": "Our ecosystem brings us close to businesses and their owners. It gives us a perspective on opportunities that cannot always be gained through a conventional transaction process, and capabilities that extend beyond providing capital.",
    "cta": "Contact Lodestone Capital",
    "disclosure": "For informational purposes only. Not an offer to sell or solicitation to purchase securities. Strategies may be subject to development, availability, eligibility and definitive offering documents. Investing involves risk, including loss of principal. No investment outcome is assured.",
    "sections": [
      {
        "id": "philosophy",
        "title": "Investment philosophy",
        "intro": "Four structural advantages inform how we originate, underwrite and own investments.",
        "items": [
          {
            "title": "Proprietary origination",
            "body": "Long-standing relationships across the Lodestone ecosystem help us identify opportunities, understand context and engage with owners."
          },
          {
            "title": "Embedded operating expertise",
            "body": "E3 provides experienced operating leaders, functional specialists and Compass to support execution and build management capability in portfolio companies."
          },
          {
            "title": "Institutional governance",
            "body": "Lodestone Global brings board formation, director expertise and governance discipline to the businesses in which we invest."
          },
          {
            "title": "Patient capital",
            "body": "Our predominantly family-office investor base supports an approach that can accommodate longer investment horizons, subject to each vehicle’s terms. We seek to make exit decisions on business fundamentals, rather than a predetermined timetable."
          }
        ]
      },
      {
        "id": "strategies",
        "title": "Investment strategies",
        "intro": "Five distinct strategies reflect the breadth of opportunities across our network. Each is governed by its own investment mandate and terms.",
        "items": [
          {
            "title": "Lodestone Liquid Alternatives",
            "body": "Emerging investment managers, with first-loss capital structures designed around alignment between managers and capital providers."
          },
          {
            "title": "Lodestone Private Equity I",
            "body": "Short-duration tactical opportunities sourced through our network. We seek complex, time-sensitive transactions where familiarity with management, structuring expertise and speed of execution can matter."
          },
          {
            "title": "Lodestone Private Equity II",
            "body": "Platform building and consolidation in established, cash-generative industries, including scaffolding, roofing, environmental services, and drilling and blasting. Combine acquisitions with organic growth, operating improvements and strong governance."
          },
          {
            "title": "Lodestone Real Estate Fund",
            "body": "Short-duration real estate opportunities involving unusual asset characteristics, complexity or specific value creation catalysts, including environmentally impacted land where appropriate."
          },
          {
            "title": "E3 Founders Fund",
            "body": "A dedicated vehicle intended to hold investment rights arising from E3 member engagements. Participation is restricted to eligible LFA clients and employees, subject to applicable terms."
          }
        ]
      },
      {
        "id": "announcements",
        "title": "Selected transactions",
        "intro": "An illustration of how familiarity with management and the ability to structure capital can matter in a time-sensitive transaction.",
        "items": [
          {
            "title": "Blulabs",
            "body": "A business known through our network needed financing within weeks after winning a new contract. Lodestone Capital was able to understand the opportunity, structure financing and execute within the required timeframe. This example illustrates the approach; it is not a representation of typical results."
          }
        ]
      }
    ]
  },
  "lfa": {
    "name": "Lodestone Family Advisors",
    "href": "/family-advisors",
    "canonical": "https://www.lodestonefamilyadvisors.com/",
    "logo": {
      "src": "/logo/lodestone-family-advisors-vertical-navy.png",
      "width": 700,
      "height": 650
    },
    "photo": "steward",
    "headline": "More time for the life you want to live.",
    "lead": "A boutique, investment-led family office for entrepreneurial families. We bring clarity to the complexity of your wealth, provide experienced investment judgment and coordinate the people who advise you, so you can focus on what matters most.",
    "problemTitle": "Who is looking after the whole picture?",
    "problem": "You may have several wealth managers, private investments, operating businesses, accountants and attorneys. Each knows a part of your financial world. Few are responsible for how it all fits together. We act as your outsourced investment office, working alongside your family’s CFO and existing advisors to bring the same discipline to your wealth that you brought to building your business.",
    "cta": "Begin a private conversation",
    "disclosure": "Lodestone Family Advisors, LLC is an SEC-registered investment adviser. Registration does not imply a particular level of skill or training. Advisory services are subject to a written agreement. Affiliated businesses are optional, separately engaged and may create conflicts disclosed to clients. Investment decisions involve risk; no outcome is guaranteed. Legal and tax advice is provided by qualified external professionals.",
    "sections": [
      {
        "id": "who-we-serve",
        "title": "Who we serve",
        "intro": "We work with a select number of entrepreneurial families, generally with $25 million to $1 billion in wealth, whose financial lives warrant dedicated investment oversight. We seek enduring relationships, not a large book of accounts.",
        "items": [
          {
            "title": "Building wealth",
            "body": "Understand how the family business affects the overall financial picture, concentration, liquidity needs and personal ambitions."
          },
          {
            "title": "Realizing wealth",
            "body": "Prepare for liquidity events, coordinate with transaction, tax and estate advisors, and consider how proceeds will support the family’s goals."
          },
          {
            "title": "Living and compounding",
            "body": "Create an investment strategy around the life the family wants to live, including spending, commitments, risk, future entrepreneurial pursuits and long-term wealth."
          },
          {
            "title": "Stewarding wealth",
            "body": "Support generational transition, family governance, education, philanthropy and shared purpose. Families may move between all four stages throughout their lives."
          }
        ]
      },
      {
        "id": "investment-office",
        "title": "Outsourced Investment Office",
        "intro": "A dedicated senior investment professional leads each family relationship, supported by the LFA investment team and Investment Committee. We work across accounts and managers, rather than requiring assets to move to a new custodian.",
        "items": [
          {
            "title": "Investment policy",
            "body": "Document the family’s objectives, liquidity requirements, risk tolerance, time horizon, decision rights and portfolio guidelines in a Client Investment Policy."
          },
          {
            "title": "Portfolio construction",
            "body": "Consider public and private investments together, including concentration, underlying exposures, commitments and liquidity. Build an allocation that reflects the family’s actual needs."
          },
          {
            "title": "Manager oversight",
            "body": "Evaluate the investment strategy, track record, costs, reporting, service, risks and alignment of existing and prospective managers. Recommend changes where appropriate."
          },
          {
            "title": "Investment reporting",
            "body": "Analyze consolidated portfolio performance and risk with the family CFO’s underlying financial data. Review investment relationships, allocations and commitments regularly."
          },
          {
            "title": "Aligned advice",
            "body": "We are paid an agreed advisory fee, not product sales commissions. LFA does not receive direct compensation for recommending Lodestone Capital funds or share in their fund fees. Potential affiliate conflicts are disclosed; families retain freedom of choice."
          }
        ]
      },
      {
        "id": "private-investments",
        "title": "Private investment advisory",
        "intro": "Private markets require more than collecting fund documents. We independently examine the merits, terms, risks and portfolio fit of each opportunity, whether sourced by the family or through our relationships.",
        "items": [
          {
            "title": "Direct investment underwriting",
            "body": "Assess the business model, management, market, financial performance, downside scenarios, structure and potential value creation."
          },
          {
            "title": "Fund due diligence",
            "body": "Evaluate managers, strategy, investment process, portfolio construction, terms, fees, alignment and operational risks."
          },
          {
            "title": "Investment decisions",
            "body": "Prepare clear recommendations for the family, supported by Investment Committee review, sizing considerations and the Client Investment Policy. Non-discretionary relationships are the default."
          },
          {
            "title": "Access and ongoing oversight",
            "body": "Evaluate relevant proprietary opportunities from our network alongside third-party investments. Monitor performance, material developments and commitments after investment. No family is required to use an affiliated investment vehicle."
          }
        ]
      },
      {
        "id": "family-office",
        "title": "Family office establishment",
        "intro": "We help establish an investment office suited to the family’s complexity, with clear responsibilities and an appropriate legal and operating framework.",
        "items": [
          {
            "title": "Entity and governance framework",
            "body": "Support the family and qualified counsel in establishing its family office entity, decision rights, investment policy and coordination model."
          },
          {
            "title": "Advisor coordination",
            "body": "Work with existing custodians, wealth managers, accountants, attorneys and other specialists, clarifying responsibilities and identifying gaps."
          },
          {
            "title": "Working with your CFO",
            "body": "The family retains an internal CFO or financial administrator for accounting, NAV collection and reconciliation, capital call administration, payments and records. LFA provides strategic investment analysis and advice; it does not replace that administrative function."
          }
        ]
      },
      {
        "id": "trust-estate",
        "title": "Trust & estate planning",
        "intro": "Help families bring their ownership, estate and investment structures into alignment with their long-term intentions, working with qualified legal and tax professionals.",
        "items": [
          {
            "title": "Planning and coordination",
            "body": "Review the family’s objectives, entity and trust structure, liquidity considerations and estate planning needs with its professional advisors."
          },
          {
            "title": "Transitions and legacy",
            "body": "Help identify issues around succession, gifting, charitable giving, ownership transition and the financial implications of estate planning. Implementation is handled by the appropriate qualified professionals."
          }
        ]
      },
      {
        "id": "family-governance",
        "title": "Family governance",
        "intro": "Successful families need more than an investment strategy. They need shared expectations about how wealth is used, how decisions are made and how the next generation is prepared.",
        "items": [
          {
            "title": "Family councils and constitutions",
            "body": "Establish forums for thoughtful discussion and document shared principles, responsibilities and decision-making practices."
          },
          {
            "title": "Succession and next-generation education",
            "body": "Help prepare future stewards to understand investments, ownership, responsibility and the choices available to them."
          },
          {
            "title": "Purpose and philanthropy",
            "body": "Create space for conversations about what is enough, how the family wants to live and what positive contribution its wealth can make."
          }
        ]
      },
      {
        "id": "how-we-work",
        "title": "Our approach",
        "intro": "A thoughtful, confidential process that starts with understanding your family and its circumstances, before we propose an advisory relationship.",
        "items": [
          {
            "title": "Introduction and conflicts clearance",
            "body": "Understand objectives and fit; complete preliminary conflicts checks before the pitch and disclose relevant relationships."
          },
          {
            "title": "Mutual NDA",
            "body": "Establish confidentiality before exchanging sensitive information."
          },
          {
            "title": "Wealth diagnostic",
            "body": "Review the financial picture, investment exposures, liquidity, commitments, fees, advisor relationships and structural complexities. Present preliminary observations and a tailored proposal."
          },
          {
            "title": "100-day implementation",
            "body": "Following agreement and compliance clearance, finalize investment policy, establish reporting and coordinate investment relationships."
          },
          {
            "title": "Ongoing stewardship",
            "body": "Review investment opportunities, monitor the portfolio, conduct quarterly reviews and revisit the policy annually or as circumstances change."
          }
        ]
      },
      {
        "id": "ecosystem",
        "title": "Understanding the business behind the wealth",
        "intro": "Many families we serve created their wealth through operating businesses. Our broader ecosystem understands entrepreneurship, governance, scaling and investment, bringing valuable context to the family’s financial decisions.",
        "items": [
          {
            "title": "Govern, scale, compound, steward",
            "body": "Lodestone Global, E3 and Lodestone Capital offer distinct capabilities through separate, optional relationships. LFA focuses on the family’s investment portfolio, not the management of the operating business."
          },
          {
            "title": "A relationship built for continuity",
            "body": "We know the people, their aspirations and their concerns, not just the accounts. The purpose is to give families clarity, confidence and time back, so wealth supports the life they want."
          }
        ]
      }
    ]
  }
};
export const sharedNavigation:[string,[string,string][]][] = [
  [
    "Lodestone Global",
    [
      [
        "Build Your Board",
        "/build"
      ],
      [
        "Board Advisory & Optimization",
        "/governance-advisory"
      ],
      [
        "Board Compensation & Research",
        "/research"
      ],
      [
        "Client Results",
        "/case-studies"
      ],
      [
        "Insights",
        "/insights"
      ]
    ]
  ],
  [
    "E3 Scale Network",
    [
      [
        "Our approach",
        "/e3-scale-network/approach"
      ],
      [
        "Operating Partners",
        "/e3-scale-network/operating-partners"
      ],
      [
        "Functional expertise",
        "/e3-scale-network/functional-expertise"
      ],
      [
        "E3 Compass",
        "/e3-scale-network/compass"
      ],
      [
        "Member community & academy",
        "/e3-scale-network/network"
      ],
      [
        "Institutional partnerships",
        "/e3-scale-network/institutional-partnerships"
      ],
      [
        "Membership",
        "/e3-scale-network/membership"
      ]
    ]
  ],
  [
    "Lodestone Capital",
    [
      [
        "Investment philosophy",
        "/lodestone-capital/philosophy"
      ],
      [
        "Investment strategies",
        "/lodestone-capital/strategies"
      ],
      [
        "Selected transactions",
        "/lodestone-capital/announcements"
      ]
    ]
  ],
  [
    "Lodestone Family Advisors",
    [
      [
        "Who we serve",
        "/family-advisors/who-we-serve"
      ],
      [
        "Outsourced Investment Office",
        "/family-advisors/investment-office"
      ],
      [
        "Private investment advisory",
        "/family-advisors/private-investments"
      ],
      [
        "Family office establishment",
        "/family-advisors/family-office"
      ],
      [
        "Trust & estate planning",
        "/family-advisors/trust-estate"
      ],
      [
        "Family governance",
        "/family-advisors/family-governance"
      ],
      [
        "Our approach",
        "/family-advisors/how-we-work"
      ]
    ]
  ]
];
export const businessHomes = ["/lodestone-global",practices.e3.href,practices.capital.href,practices.lfa.href] as const;
