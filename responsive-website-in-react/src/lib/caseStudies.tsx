import type { ReactNode } from "react"

export type CaseTheme = "banking" | "truck" | "tpay" | "thr"

export interface CaseMetaItem {
  label: string
  value: ReactNode
  wide?: boolean
}

export interface CaseScreenshot {
  src: string
  alt: string
}

export interface CaseProblemItem {
  title: string
  body: string
}

export interface CaseDesignStep {
  title: string
  copy: string[]
  link?: {
    label: string
    href: string
  }
}

export interface CaseDesignFlow {
  title: string
  oldFlow: string[]
  newFlow: string[]
}

export interface CaseDesignFlowSection {
  title: string
  paragraphs: string[]
  diagrams: CaseDesignFlow[]
}

export interface CaseImprovement {
  label?: string
  body: string
}

export interface CaseFinalVisual {
  src: string
  alt: string
  label?: "OLD DESIGN" | "NEW DESIGN"
  labelTop?: string
  framed?: boolean
  inset?: boolean
}

export interface CaseFinalGroup {
  copy?: string[]
  layout: "pair" | "pair-wide" | "stack" | "single" | "full"
  images: CaseFinalVisual[]
}

export interface CaseFinalIllustration {
  src?: string
  alt?: string
  wide?: boolean
}

export interface CaseFinalBlock {
  title?: string
  copy?: string
  paragraphs?: ReactNode[]
  improvementsTitle?: string
  improvements: CaseImprovement[]
  groups?: CaseFinalGroup[]
  visuals?: number
  image?: string
  image2?: string
}

export interface CaseStudyData {
  slug: string
  metadata: {
    title: string
    description: string
  }
  hero: {
    eyebrow: string
    title: string
    subtext: string
    visual: CaseTheme
    liveApp?: boolean
    liveAppUrl?: string
    meta: CaseMetaItem[]
  }
  about: {
    eyebrow: string
    title: string
    paragraphs: ReactNode[]
    emphasis?: string
  }
  problem: {
    eyebrow: string
    title: string
    intro?: string
    quote?: {
      text: string
      author: string
      role: string
      image: string
    }
    screenshots?: CaseScreenshot[]
    screenshotsLabel?: string
    coreProblems: CaseProblemItem[]
    oldUi?: {
      label: string
      variant?: "default" | "truck"
      images: CaseScreenshot[]
    }
  }
  goals: {
    eyebrow: string
    title: string
    paragraphs: string[]
    emphasizeFirst?: boolean
    visual?: {
      src: string
      alt: string
    }
  }
  designProcess: {
    eyebrow: string
    title: string
    intro?: string[]
    startVisual?: {
      src: string
      alt: string
    }
    flowSection?: CaseDesignFlowSection
    steps?: CaseDesignStep[]
    visual?: {
      src: string
      alt: string
    }
  }
  finalProduct: {
    eyebrow: string
    title: string
    illustrationsSection?: {
      title: string
      paragraphs: string[]
      items: CaseFinalIllustration[]
    }
    blocks: CaseFinalBlock[]
  }
  conclusion: {
    eyebrow: string
    title: string
    paragraphs: string[]
    emphasis?: string
  }
}

export interface MoreStudy {
  title: string
  year: string
  category: string
  description: string
  theme: CaseTheme
  href: string
}

const A = "/assets"

export const moreCaseStudies: MoreStudy[] = [
  {
    title: "ALATbyWEMA",
    year: "2025",
    category: "Banking",
    description:
      "Reimagining payments to make everyday banking simpler, faster, and more trustworthy",
    theme: "banking",
    href: "/work/alatbywema",
  },
  {
    title: "Truck App",
    year: "2024",
    category: "Logistics",
    description:
      "Streamlining daily tasks to help drivers manage deliveries, navigate routes, and stay informed.",
    theme: "truck",
    href: "/work/truck-app",
  },
  {
    title: "Tpay",
    year: "2025",
    category: "Fintech",
    description:
      "Simplifying personal finance and business financial operations in one platform",
    theme: "tpay",
    href: "/work/tpay",
  },
  {
    title: "THR",
    year: "2025",
    category: "Human Resource (HR)",
    description:
      "Redesigning the digital experience for a logistics platform aiming at improving the day to day for truck drivers",
    theme: "thr",
    href: "/work/thr",
  },
]

const alatbywema: CaseStudyData = {
  slug: "alatbywema",
  metadata: {
    title: "ALATbyWEMA — Case Study — Oshodi David",
    description:
      "ALAT by Wema is Nigeria's first fully digital bank, enabling customers to open accounts and manage their finances entirely online",
  },
  hero: {
    eyebrow: "2025 • Banking • Case study",
    title: "ALATbyWEMA",
    subtext:
      "ALAT by Wema is Nigeria's first fully digital bank, enabling customers to open accounts and manage their finances entirely online",
    visual: "banking",
    liveApp: true,
    meta: [
      { label: "My Role", value: "Product Designer" },
      { label: "Timeline", value: "2 month" },
      {
        label: "Responsibilities",
        value: (
          <>
            UI Design, UX Design, User Research, Wireframing, Prototyping,
            Information Architecture, User Flows
          </>
        ),
        wide: true,
      },
      { label: "Tools", value: "Figma, Figjam, Teams" },
      { label: "Platform", value: "Mobile" },
    ],
  },
  about: {
    eyebrow: "ABOUT THE PROJECT",
    title: "What Is ALATbyWEMA?",
    paragraphs: [
      "Wema Bank is the pioneer of Africa's first fully digital bank, ALAT, and one of Nigeria's most resilient banks. With decades of experience in the business of banking, the Bank has remained innovative in delivering value to its stakeholders.",
      "The publicly quoted Nigerian company has successfully built a legacy of trust and resilience that has won it the loyalty of its customers. The Bank is constantly introducing products and services tailored to the needs of its customers at every stage of their lives.",
      "ALAT brings essential banking services to customers' fingertips, allowing them to manage their finances and complete transactions such as money transfers, bill payments, airtime purchases, loan requests and many more directly from their mobile devices all without visiting a physical bank branch.",
      "As the app brings multiple financial services into one experience, usability becomes critical. The opportunity was to create a more intuitive, user-centered interface that makes these services easier to discover, understand, and use.",
    ],
    emphasis:
      "As part of a collaborative design team, each designer was assigned specific areas of the app to work on. I was responsible for the Payments section, covering core activities such as transfers, airtime and data purchases, and bill payments. This case study focuses on my contribution to the Payments experience and the design decisions behind the improvements I made",
  },
  problem: {
    eyebrow: "THE PROBLEM",
    title: "Reason For The Redesign",
    intro:
      "The problems identified were informed by multiple sources, including customer ratings and reviews on app stores, complaints shared across social media, and direct feedback from ALAT customers who use the mobile banking app frequently",
    screenshots: [
      {
        src: `${A}/alat-review-1.webp`,
        alt: "Customer review: Horrible app, do not recommend",
      },
      {
        src: `${A}/alat-review-2.webp`,
        alt: "Customer review: Transfer exposes balance",
      },
      {
        src: `${A}/alat-review-3.webp`,
        alt: "Customer review: Don't use the ALAT app to buy electricity",
      },
      {
        src: `${A}/alat-review-4.webp`,
        alt: "Customer review: Worst bank experience ever, avoid",
      },
      {
        src: `${A}/alat-review-5.webp`,
        alt: "Customer review: Transfer issues from Okuku, Osun state",
      },
      {
        src: `${A}/alat-review-1.webp`,
        alt: "Customer review of the ALAT app",
      },
    ],
    screenshotsLabel: "Customer reviews of the ALAT app",
    coreProblems: [
      {
        title: "Complex Payment Navigation",
        body: "Customers had to move through multiple screens to find and access payment services. This made common tasks such as transfers, airtime purchases, and bill payments feel more cumbersome than necessary.",
      },
      {
        title: "Poor Feature Discoverability",
        body: "Some payment features were not immediately obvious or easy to find within the app. This made it harder for customers to understand what services were available and where to access them",
      },
      {
        title: "Too Many Steps for Everyday Transactions",
        body: "Simple banking activities required users to go through several steps before completing a transaction. This added unnecessary friction to tasks that customers perform frequently",
      },
      {
        title: "Inconsistent UI patterns across screens",
        body: "Similar payment experiences did not always follow consistent layouts, interactions, or visual patterns. This made the interface less predictable and increased the effort required to learn and navigate different parts of the app.",
      },
      {
        title: "Outdated Visual Experience",
        body: "The old design felt dated and lacked the clarity and polish found in newer digital banking products. This created an opportunity to modernize the interface while making important payment information and actions easier to understand",
      },
    ],
    oldUi: {
      label: "OLD UI",
      images: [
        {
          src: `${A}/alat-old-ui-1.webp`,
          alt: "Previous ALAT app interface, screen one",
        },
        {
          src: `${A}/alat-old-ui-2.webp`,
          alt: "Previous ALAT app interface, screen two",
        },
        {
          src: `${A}/alat-old-ui-3.webp`,
          alt: "Previous ALAT app interface, screen three",
        },
      ],
    },
  },
  goals: {
    eyebrow: "GOALS",
    title: "What Should The Redesign Do Better?",
    paragraphs: [
      "The goal was to transform ALAT's Payments experience into an intuitive, efficient, and trustworthy way for customers to manage everyday transactions. The redesign focused on simplifying payment flows, improving feature discoverability, and establishing a consistent, scalable design system",
      "Ultimately, the aim was to help customers complete transactions with greater ease and confidence while strengthening trust in the platform, encouraging continued usage, and supporting customer retention.",
    ],
  },
  designProcess: {
    eyebrow: "DESIGN PROCESS",
    title: "Turning Insights Into Meaningful Design Decisions",
    steps: [
      {
        title: "Discovering and Understanding User Pain Points",
        copy: [
          "I synthesized feedback from app store reviews, social media complaints, and direct feedback from frequent ALAT users to identify recurring pain points. These insights were then translated into the core problems (listed above) that shaped the direction of the redesign",
        ],
      },
      {
        title: "Competitive Analysis & Ideation",
        copy: [
          "I conducted a competitive analysis to understand how leading banks approached similar challenges and identify opportunities to improve on existing solutions. I looked beyond traditional banking apps and also explored fintech products that offered innovative approaches to payments, navigation, and user experience.",
          "These insights helped me identify useful patterns, interaction ideas, and opportunities for differentiation, which I then used as inspiration when developing solutions to the core problems identified earlier",
        ],
        link: { label: "View Insights", href: "#design-process" },
      },
      {
        title: "Design, Prototype & Test",
        copy: [
          "I validated my ideas early using low-fidelity prototypes before moving into high-fidelity designs. These prototypes were created and tested in Figma with a group of users provided by the bank. I iterated the designs based on each round of feedback, refining the experience until the key flows were clear and intuitive",
          "After validating ideas through low-fidelity prototypes, I progressed to high-fidelity designs. I also worked closely with the bank's management team throughout the process, presenting each major feature and incorporating feedback to ensure everyone remained aligned on the product's visual direction",
          "I contributed to developing the project's design system, creating reusable components and visual patterns that would ensure consistency across the product and support future designs",
        ],
      },
    ],
    visual: {
      src: `${A}/alat-design-process-visual.webp`,
      alt: "ALAT send money and transfer success screens",
    },
  },
  finalProduct: {
    eyebrow: "FINAL PRODUCT",
    title: "High Fidelity Designs",
    blocks: [
      {
        title: "Payments Hub",
        copy: "This page brings together all the payment services available on the platform, making them easy to access in one place.",
        improvements: [
          {
            label: "Centralized payment services",
            body: "Brought all payment services into one view, with a search function to help users quickly find what they need.",
          },
          {
            label: "Quick beneficiary management",
            body: "Made it easier for users to access and manage their beneficiaries directly from the Payment Hub.",
          },
          {
            label: "Clear visual hierarchy",
            body: "Introduced distinct, colorful icons to make each payment service easier to recognize and understand.",
          },
          {
            label: "Scalable design",
            body: "Created a flexible layout that can accommodate additional payment services as the product grows.",
          },
        ],
        image: `${A}/Payment Hub-hq.webp`,
      },
      {
        title: "Local Transfer",
        copy: "A streamlined experience for sending money to Nigerian banks, making transfers simpler, recipients easier to find and transaction updates clearer",
        improvements: [
          {
            label: "Real time Bank Name Lookup",
            body: "Automatically displays the bank name and the bank's uptime percentage as users enter an account number, helping them verify the recipient bank and assess the bank's transfer reliability before proceeding",
          },
          {
            label: "Real-Time Account Lookup",
            body: "Automatically retrieves the recipient's name, bank, and account number when customers enter the details (name/account number) of a previously saved beneficiary, eliminating the need to re-enter their information and making repeat transfers faster and easier",
          },
          {
            label: "Easier Access to Beneficiaries",
            body: "Placed beneficiaries section below the account number field and grouped them into Frequent and Saved categories, helping customers find and select recipients faster without re-entering their details",
          },
          {
            label: "Clear Transaction Confirmation",
            body: "Redesigned the success screen to clearly communicate transaction status and display a timeline of key transfer updates",
          },
        ],
        visuals: 2,
        image: `${A}/Local Transfer 1-hq.webp`,
        image2: `${A}/Local transfer 2-hq.webp`,
      },
      {
        title: "Airtime/Data",
        copy: "A unified experience for purchasing airtime and mobile data, making everyday top-ups easier and faster",
        improvements: [
          {
            label: "Unified Airtime & Data",
            body: "Combined airtime and data purchases on one page, using tabs to help users switch easily between the two services",
          },
          {
            label: "Faster Repeat Transactions",
            body: "Displayed previous recipients automatically as users enter a phone number, making repeat purchases quicker and easier.",
          },
        ],
        image: `${A}/Data-hq.webp`,
      },
      {
        title: "Bill Payment",
        copy: "A simple, centralized experience for finding billers and paying for everyday services",
        improvements: [
          {
            label: "Quick Access to Popular Billers",
            body: "Displayed popular billers under each category, allowing users to select frequently used services without browsing the full list.",
          },
          {
            label: "Clear Category Layout",
            body: "Grouped billers into well-defined categories, making services easier to browse and find",
          },
          {
            label: "Scalable Design",
            body: "Created a flexible layout that supports additional billers and payment categories as the platform grows.",
          },
        ],
        image: `${A}/Bill Payment-hq.webp`,
      },
      {
        title: "Gift card/Evoucher",
        improvements: [
          {
            label: "Organized Gift Card Categories",
            body: "Grouped gift cards into clear categories for easier discovery and access",
          },
          {
            label: "Clean, Scannable Layout",
            body: "Created a well-structured layout that makes gift cards easier to browse and find.",
          },
        ],
        image: `${A}/Gift card-hq.webp`,
      },
    ],
  },
  conclusion: {
    eyebrow: "CONCLUSIONS",
    title: "Reflection & Key takeaways",
    paragraphs: [
      "This project reinforced my belief that good product design goes beyond creating a visually appealing interface. Working on ALAT Payments experience taught me to look deeper into the problems customers were facing, understand the reasons behind those problems, and use those insights to guide design decisions.",
      "I also learned the importance of balancing user needs, business requirements, and stakeholder expectations. Working closely with the product owner and other stakeholders throughout the design process helped me understand how important communication and alignment are when designing products that serve a large number of users.",
      "Most importantly, the project challenged me to think about how small improvements to navigation, information hierarchy, and interaction patterns can make everyday financial tasks feel significantly simpler. It strengthened my approach to designing experiences that are not only clean and modern, but also useful, intuitive, and purposeful.",
    ],
  },
}

const truckApp: CaseStudyData = {
  slug: "truck-app",
  metadata: {
    title: "Truck App — Case Study — Oshodi David",
    description:
      "Streamlining daily tasks to help drivers manage deliveries, navigate routes, and stay informed.",
  },
  hero: {
    eyebrow: "2024 • Logistics • Case study",
    title: "Truck App",
    subtext:
      "Truck App is a driver companion platform designed to help truck drivers stay on top of their daily deliveries",
    visual: "truck",
    meta: [
      { label: "My Role", value: "Product Designer" },
      { label: "Timeline", value: "1 month" },
      {
        label: "Responsibilities",
        value: (
          <>
            UI Design, UX Design, User Research, Wireframing, Prototyping,
            Information Architecture, User Flows
          </>
        ),
        wide: true,
      },
      { label: "Tools", value: "Figma, Figjam, Teams" },
      { label: "Platform", value: "Mobile" },
    ],
  },
  about: {
    eyebrow: "ABOUT THE PROJECT",
    title: "What Is Truck App?",
    paragraphs: [
      "Truck App is a driver companion platform built to give drivers better visibility and control throughout their day. It brings together their trips and deliveries, performance insights, and truck status, helping them stay informed and focused while on the road.",
      "To make navigation familiar and frictionless, the app integrates with Google Maps, a tool most drivers already use and understand",
    ],
  },
  problem: {
    eyebrow: "THE PROBLEM",
    title: "Reason For The Redesign",
    intro:
      "The Product Owner's feedback captured the broader challenges with the old design. I used these observations to identify the core problems the redesign needed to address and define a clear focus for the project.",
    quote: {
      text: "“The app feels outdated, we want a modern and engaging experience. Our drivers need quick access to the information they rely on every day, so we also want to reduce the number of clicks needed to get to key information”",
      author: "Oluwafemi Emmanuel",
      role: "Product Owner @Truck App",
      image: `${A}/truck-product-owner.webp`,
    },
    coreProblems: [
      {
        title: "Too Much Friction",
        body: "Drivers had to navigate through multiple screens to access important day-to-day information. This created unnecessary friction, especially for information they need before or during a trip",
      },
      {
        title: "Confusing Workflows",
        body: "Some parts of the app were difficult for drivers to understand or navigate. As a result, certain features were rarely used or eventually abandoned",
      },
      {
        title: "Outdated User Interface",
        body: "The existing interface felt dated compared to other competitor apps, making the overall experience less engaging and harder to navigate.",
      },
      {
        title: "Navigation Wasn't Seamlessly Connected to the Workflow",
        body: "Drivers had to copy delivery location from the app, and paste in google maps, creating friction in an otherwise straightforward workflow",
      },
      {
        title: "The Design Wasn't Built to Scale",
        body: "As the product evolved, the existing design made it difficult to introduce new features and maintain consistency across screens. There was no structured component library or design system in Figma, so similar UI elements often had to be recreated from scratch",
      },
    ],
    oldUi: {
      label: "OLD UI",
      variant: "truck",
      images: [
        {
          src: `${A}/truck-old-ui-1.webp`,
          alt: "Old Truck App login screen",
        },
        {
          src: `${A}/truck-old-ui-2.webp`,
          alt: "Old Truck App trips screen",
        },
        {
          src: `${A}/truck-old-ui-3.webp`,
          alt: "Old Truck App trucks near me screen",
        },
      ],
    },
  },
  goals: {
    eyebrow: "GOALS",
    title: "What Should The Redesign Do Better?",
    paragraphs: [
      "Create a simpler, more efficient experience that helps drivers get their jobs done with less friction",
      "The redesign focused on making key information easier to access, simplifying everyday workflows, and connecting navigation more seamlessly to drivers’ trips. At the same time, to establish a scalable design system to improve consistency and make it easier for the team to introduce new features as the product grows. ",
    ],
    emphasizeFirst: true,
  },
  designProcess: {
    eyebrow: "DESIGN PROCESS",
    title: "How it Started",
    intro: [
      "I jumped on a call with Oluwafemi Emmanuel, the Product Owner at Truck App. Femi walked me through the product, the challenges drivers were experiencing with the existing app, and what the team hoped to achieve with the redesign",
      "I started by reviewing the product's vision and goals with the Product Owner. He walked me through the PRD and other project documentation, then took me through the existing Figma screens, highlighting the issues he had identified with the current experience. This gave me the initial context I needed to understand the product, the problems in the old design, and where I needed to dig deeper.",
    ],
    startVisual: {
      src: `${A}/truck-design-start.webp`,
      alt: "Figma screens and product requirement document reviewed for the Truck App redesign",
    },
    flowSection: {
      title: "User Flows",
      paragraphs: [
        "I mapped the existing flows to identify unnecessary steps and redesigned key journeys to help drivers complete tasks faster with less friction. The existing experience had several friction points that made important tasks feel more difficult and stressful than they needed to be.",
      ],
      diagrams: [
        {
          title: "Navigate to Google maps",
          oldFlow: [
            "View delivery details",
            "Copy delivery location",
            "Open google map",
            "Paste delivery location",
          ],
          newFlow: [
            "View delivery details",
            "Click button to open in google maps",
          ],
        },
        {
          title: "Trucks Nearby (Search Trucks)",
          oldFlow: [
            "Trucks Near me",
            "Search Trucks",
            "Enter location & distance radius",
            'Click on "Find Trucks" Button',
            "See summary of all trucks",
            "View full trucks info",
          ],
          newFlow: [
            "Nearby (Search Trucks)",
            "Enter location & distance radius",
            "View summary and all trucks info",
          ],
        },
        {
          title: "Trucks Nearby (Rescue Trucks)",
          oldFlow: [
            "Trucks Near me",
            "Rescue Trucks",
            "Enter truck code",
            "Trucks' distance",
          ],
          newFlow: [
            "Nearby (Rescue Trucks)",
            "Enter truck code",
            "Truck's distance",
          ],
        },
      ],
    },
  },
  finalProduct: {
    eyebrow: "FINAL PRODUCT",
    title: "High Fidelity Designs",
    illustrationsSection: {
      title: "Custom Illustrations",
      paragraphs: [
        "I designed custom illustrations in Figma to bring more visual personality to the app while making key moments in the experience feel clearer and more engaging",
      ],
      items: [
        {
          src: `${A}/truck-illustration-back-view.svg`,
          alt: "Back view illustration of a truck",
          wide: false,
        },
        {
          src: `${A}/truck-illustration-package.svg`,
          alt: "Package illustration",
          wide: false,
        },
        {
          src: `${A}/truck-illustration-truck-1.svg`,
          alt: "Truck illustration 1",
          wide: true,
        },
        {
          src: `${A}/truck-illustration-truck-2.svg`,
          alt: "Truck illustration 2",
          wide: true,
        },
      ],
    },
    blocks: [
      {
        title: "Navigation",
        copy: "The bottom navigation provides drivers with quick access to the app's core sections. The previous design relied mainly on icons, making it difficult to immediately understand what each destination represented",
        improvements: [
          {
            body: "Added clear labels alongside icons so drivers can understand each destination without having to guess what an icon means.",
          },
          {
            body: "Used familiar iconography to make navigation easier to recognize at a glance.",
          },
          {
            body: "Improved the active state treatment to make it clearer which section the driver is currently viewing.",
          },
          {
            body: "Explored different navigation layouts and visual treatments before settling on the final direction, considering clarity, hierarchy, and consistency with the redesigned interface.",
          },
        ],
        groups: [
          {
            layout: "pair",
            images: [
              {
                src: `${A}/truck-final-nav-old-hq.webp`,
                alt: "Truck App old bottom navigation design",
                label: "OLD DESIGN",
                labelTop: "55.63%",
              },
              {
                src: `${A}/truck-final-nav-new-hq.webp`,
                alt: "Truck App redesigned bottom navigation with clear labels",
                label: "NEW DESIGN",
                labelTop: "55.63%",
              },
            ],
          },
          {
            copy: [
              "I explored multiple navigation styles and color variations before arriving at the final direction. This helped me evaluate different approaches and choose an option that balanced usability with the look and feel of the new design.",
            ],
            layout: "single",
            images: [
              {
                src: `${A}/truck-final-nav-explore-hq.webp`,
                alt: "Explorations of different navigation styles and color variations",
              },
            ],
          },
        ],
      },
      {
        title: "Home Page",
        copy: "The home page gives drivers a quick overview of their day, bringing their active trip, navigation, notifications, and performance progress into one place. It is designed to help drivers understand what needs their attention and access their most important actions without having to move through multiple screens.",
        improvements: [
          {
            body: "Made the daily trip the primary focus so drivers can quickly see their active delivery, key trip details, and current status.",
          },
          {
            body: "Added direct Google Maps navigation, allowing drivers to start their journey directly from the home screen instead of copying and pasting the delivery location.",
          },
          {
            body: "Made notifications more visible by introducing a prominent notification entry point, making important updates easier to access.",
          },
          {
            body: "Surfaced performance insights so drivers can quickly see relevant statistics and their progress toward their targets.",
          },
        ],
        groups: [
          {
            layout: "pair-wide",
            images: [
              {
                src: `${A}/truck-final-home-old-hq.webp`,
                alt: "Truck App old home page design",
                label: "OLD DESIGN",
                labelTop: "3.24%",
              },
              {
                src: `${A}/truck-final-home-new-hq.webp`,
                alt: "Truck App redesigned home page with trip details and notifications",
                label: "NEW DESIGN",
                labelTop: "2.91%",
              },
            ],
          },
          {
            copy: [
              "I tried different directions and layouts while carrying the client along until we arrived at the current design",
            ],
            layout: "single",
            images: [
              {
                src: `${A}/truck-final-home-explore-hq.webp`,
                alt: "Explorations of different home page layouts",
              },
            ],
          },
        ],
      },
      {
        title: "Trucks Nearby - Rescue & Search",
        copy: "The Trucks Nearby feature helps drivers quickly locate nearby trucks or get to trucks that needs rescue or assistance.",
        paragraphs: [
          <>
            <span className="case-final-lead">Rescue Truck</span>: Drivers can
            enter the truck number to locate a truck in need of assistance. The
            app displays its location and key details, with a direct link to
            Google Maps for navigation.
          </>,
          <>
            <span className="case-final-lead">Search for a Truck</span>: Drivers
            can search for trucks within a specific radius by entering a
            location and distance. Available trucks are displayed directly on
            the map, along with relevant information.
          </>,
        ],
        improvementsTitle: "What I improved",
        improvements: [
          {
            body: "Combined search and rescue into one experience, keeping the map and key actions on a single screen instead of making drivers navigate between pages.",
          },
          {
            body: "Added direct Google Maps navigation so drivers can get directions to a truck's location immediately.",
          },
          {
            body: "Simplified the rescue flow by allowing drivers to locate a truck and access its details with fewer steps.",
          },
          {
            body: "Improved the visual hierarchy and interface to make the experience cleaner, more modern, and easier to scan.",
          },
        ],
        groups: [
          {
            layout: "stack",
            images: [
              {
                src: `${A}/truck-final-trucks-old-hq.webp`,
                alt: "Truck App old trucks nearby search and rescue flow",
                label: "OLD DESIGN",
                labelTop: "4.08%",
              },
              {
                src: `${A}/truck-final-trucks-new-hq.webp`,
                alt: "Truck App redesigned trucks nearby search and rescue flow",
                label: "NEW DESIGN",
                labelTop: "3.34%",
              },
            ],
          },
        ],
      },
      {
        title: "Notification Page",
        copy: "The old design didn't account for a notification page, which I found surprising. I realized how important this page is for drivers because they encounter situations where clients decide to change the delivery location while on the road.",
        improvementsTitle: "What I improved",
        improvements: [
          {
            body: "Added a dedicated notification center where drivers can view new and previously missed notifications.",
          },
          {
            body: "Introduced push notifications to surface important updates directly on the driver's phone.",
          },
          {
            body: "Added delivery milestone notifications so drivers receive updates as they reach key stages of a delivery.",
          },
          {
            body: "Recommended SMS alerts for critical changes, such as delivery location diversions, to provide an additional layer of communication.",
          },
        ],
        groups: [
          {
            layout: "single",
            images: [
              {
                src: `${A}/truck-final-notification-hq.webp`,
                alt: "Truck App notification page with delivery and location updates",
              },
            ],
          },
        ],
      },
      {
        title: "About Truck",
        copy: "This page gives drivers a complete overview of their assigned truck, including its health status, number of trips, tyre condition, and other important vehicle information. The old design had users scroll through the page to get relevant information, which can be tiring for users.",
        improvements: [
          {
            body: "Organized truck information into clear sections so drivers can quickly navigate to specific details, instead of scrolling through one long list as in the previous design.",
          },
          {
            body: "Improved information hierarchy by grouping related details such as truck health, trips, and tyre condition, making important information easier to find and scan.",
          },
          {
            body: "Introduced an interactive truck illustration that allows drivers to explore different parts of the truck while making the experience more visually engaging and intuitive.",
          },
          {
            body: "Reduced unnecessary scrolling by structuring the information around how drivers are likely to look for and consume it.",
          },
        ],
        groups: [
          {
            layout: "pair-wide",
            images: [
              {
                src: `${A}/truck-final-about-old-hq.webp`,
                alt: "Truck App old about truck page",
                label: "OLD DESIGN",
                labelTop: "3.24%",
              },
              {
                src: `${A}/truck-final-about-new-hq.webp`,
                alt: "Truck App redesigned about truck page with sectioned information",
                label: "NEW DESIGN",
                labelTop: "2.91%",
              },
            ],
          },
        ],
      },
      {
        title: "Design System",
        copy: "Not every product requires a design system, but because of the goal and scale of the vision at Truck App, I created a scalable design system and a component library, which I and other future designers and engineers could work with.",
        improvements: [],
        groups: [
          {
            layout: "full",
            images: [
              {
                src: `${A}/truck-final-design-system-hq.webp`,
                alt: "Truck App design system including brand colors, typography, and components",
              },
            ],
          },
        ],
      },
    ],
  },
  conclusion: {
    eyebrow: "CONCLUSIONS",
    title: "Reflection & Key takeaways",
    emphasis:
      "This project reinforced for me that good product design is often about removing friction rather than adding more features.",
    paragraphs: [
      "This project reinforced for me that good product design is often about removing friction rather than adding more features. Working through the driver’s day-to-day journey helped me see how small moments of confusion, an unclear icon, an extra step, or information being difficult to find can make a product feel significantly harder to use.",
      "I also learned to look beyond individual screens and think about the experience as a connected system. Simplifying the navigation to Google Maps flow, bringing Trucks Nearby into a single experience, and introducing notifications were not just UI improvements; they were opportunities to make the overall workflow more predictable and useful for drivers.",
      "If I were taking the project further, I would validate the redesigned flows with more drivers and measure task completion, time taken, and error points. This would help identify whether the improvements I designed translate into a genuinely faster and less stressful experience in real world driving conditions.",
    ],
  },
}

const tpay: CaseStudyData = {
  slug: "tpay",
  metadata: {
    title: "Tpay — Case Study — Oshodi David",
    description:
      "Simplifying personal finance and business financial operations in one platform",
  },
  hero: {
    eyebrow: "2025 • Fintech • Case study",
    title: "Tpay",
    subtext:
      "TPay is an all-in-one financial platform designed to simplify how individuals manage everyday finances and how businesses handle payments, payroll, invoicing, and other essential financial operations",
    visual: "tpay",
    liveApp: true,
    liveAppUrl: "https://tpay.com.ng",
    meta: [
      { label: "My Role", value: "Product Designer" },
      { label: "Timeline", value: "3 month" },
      {
        label: "Responsibilities",
        value: (
          <>
            UI Design, UX Design, User Research, Wireframing, Prototyping,
            Information Architecture, User Flows
          </>
        ),
        wide: true,
      },
      { label: "Tools", value: "Figma, Figjam, Teams" },
      { label: "Platform", value: "Web & Mobile" },
    ],
  },
  about: {
    eyebrow: "ABOUT THE PROJECT",
    title: "What Is Tpay?",
    paragraphs: [
      "TPay is a financial platform designed to simplify how individuals and businesses manage their financial activities. By bringing essential financial services into a connected digital experience, the platform aims to make everyday financial tasks more accessible, convenient, and efficient.",
      <>
        <strong>TPay Personal</strong> caters to individuals, providing access
        to personal financial services and everyday transactions.
      </>,
      <>
        <strong>TPay Corporate</strong> on the other hand, is designed for
        businesses, bringing together financial operations such as payments,
        payroll, invoicing, expense management, tax compliance, and vendor
        payments. Together, these offerings address the financial needs of users
        across both personal and business contexts.
      </>,
      "The design challenge was to create clear, intuitive experiences that serve these different user groups and their distinct needs. While individual users need a straightforward way to manage everyday financial activities, business users require greater visibility, control, and structure when handling complex financial workflows",
    ],
  },
  problem: {
    eyebrow: "THE PROBLEM",
    title: "Reason For The Redesign",
    coreProblems: [
      {
        title: "Friction in Everyday Transactions",
        body: "Routine financial activities should be straightforward to complete. Unclear navigation, unnecessary steps, or confusing transaction feedback can create friction for individuals making payments and businesses processing financial transactions",
      },
      {
        title: "Complexity in Business Financial Operations",
        body: "Businesses must coordinate activities such as payroll, invoicing, expense tracking, taxes, and vendor payments. Managing these responsibilities can become complicated when workflows are difficult to navigate or financial information is not easy to access.",
      },
      {
        title: "Disconnected Financial Needs",
        body: "Individuals and businesses have different financial responsibilities, but both need convenient ways to manage transactions and access financial services. Experiences that do not clearly address these different needs can make it harder for users to find the right tools for their situation.",
      },
    ],
  },
  goals: {
    eyebrow: "GOALS",
    title: "What Are We Planning To Achieve?",
    paragraphs: [
      "To create a clear, intuitive, and connected financial experience that helps individuals manage everyday transactions with ease while enabling businesses to handle complex financial operations more efficiently.",
      "The design goal was to simplify key user journeys, improve navigation and information hierarchy, and make essential financial services easier to discover and use. At the same time, the experience needed to accommodate the distinct needs of personal and corporate users, from straightforward everyday transactions to more structured business workflows.",
      "Ultimately, the aim was to make financial management feel more accessible for individuals and more efficient, transparent, and manageable for businesses",
    ],
    visual: {
      src: `${A}/tpay-goals-phones.webp`,
      alt: "TPay mobile app screens",
    },
  },
  designProcess: {
    eyebrow: "DESIGN PROCESS",
    title:
      "Understanding problems, exploring possibilities, refining solutions",
    steps: [
      {
        title: "Understanding two different financial audiences",
        copy: [
          "I focused on understanding the financial needs of individuals and businesses. While individuals need convenient ways to manage everyday finances, businesses require broader tools for payroll, invoicing, vendor payments, and tax compliance. These insights shaped a platform that serves both audiences with experiences tailored to their needs.",
        ],
      },
      {
        title: "Defining the product experience",
        copy: [
          "With a clearer understanding of user needs, I defined how TPay's personal and corporate services would be structured, ensuring features were easy to find and the platform could scale without compromising usability.",
        ],
      },
      {
        title: "Structuring the user journeys",
        copy: [
          "With the product structure and key workflows defined, I translated them into interface concepts that balanced clarity, usability, and visual consistency. I explored how information should be prioritized, how complex financial data could be presented clearly, and how users could recognize important actions.",
        ],
      },
      {
        title: "Validating the experience through real-world scenarios",
        copy: [
          "I used interactive prototypes to explore how the proposed journeys would work beyond static screens. I considered realistic scenarios, such as a personal user completing a transaction or a business user processing a payment and reviewing its status. These scenarios helped evaluate whether the information was clear, the next steps were predictable, and users could understand the outcome of their actions. Feedback and testing, where available, would inform further iterations before the designs were finalized.",
        ],
      },
    ],
  },
  finalProduct: {
    eyebrow: "FINAL PRODUCT",
    title: "High Fidelity Designs",
    blocks: [
      {
        title: "Dashboard",
        copy: "Users can see their balance, start transactions and also view history on every transactions they have made",
        improvements: [],
        groups: [
          {
            layout: "full",
            images: [
              {
                src: `${A}/tpay-final-01-hq.webp`,
                alt: "TPay Corporate dashboard",
                framed: true,
              },
              {
                src: `${A}/tpay-final-02-hq.webp`,
                alt: "TPay Personal dashboard",
                framed: true,
              },
              {
                src: `${A}/tpay-final-03-hq.webp`,
                alt: "TPay wallet dashboard",
                framed: true,
              },
              {
                src: `${A}/tpay-final-04-hq.webp`,
                alt: "Dashboard screen 4",
                framed: true,
              },
            ],
          },
        ],
      },
      {
        title: "Payments",
        copy: "Users make payments such as sending money, buying airtme/data and also carry out other bill payments here. It also lets users see beneficiaries making repeat transactions  quicker and easier",
        improvements: [],
        groups: [
          {
            layout: "full",
            images: [
              {
                src: `${A}/tpay-final-05-hq.webp`,
                alt: "Payments screen 1",
                framed: true,
              },
              {
                src: `${A}/tpay-final-06-hq.webp`,
                alt: "Payments screen 2",
                framed: true,
              },
            ],
          },
        ],
      },
      {
        title: "Invoicing",
        copy: "Users can create, request and manage all their invoices here. They can also track invoices that have been sent out and do followups",
        improvements: [],
        groups: [
          {
            layout: "full",
            images: [
              {
                src: `${A}/tpay-final-07-hq.webp`,
                alt: "Invoicing screen 1",
                framed: true,
              },
              {
                src: `${A}/tpay-final-08-hq.webp`,
                alt: "Invoicing screen 2",
                framed: true,
              },
            ],
          },
        ],
      },
      {
        title: "Transaction History",
        copy: "A dedicated page for transaction history. Users can also generate account statement",
        improvements: [],
        groups: [
          {
            layout: "full",
            images: [
              {
                src: `${A}/tpay-final-09-hq.webp`,
                alt: "Transaction history screen 1",
                framed: true,
              },
              {
                src: `${A}/tpay-final-10-hq.webp`,
                alt: "Transaction history screen 2",
                framed: true,
              },
            ],
          },
        ],
      },
      {
        title: "Auth Pages",
        copy: "The login portal where uses login to their account, and also where users can create new account to access the platform",
        improvements: [],
        groups: [
          {
            layout: "full",
            images: [
              {
                src: `${A}/tpay-final-12-hq.webp`,
                alt: "Auth screen 1",
                framed: true,
              },
              {
                src: `${A}/tpay-final-13-hq.webp`,
                alt: "Auth screen 2",
                framed: true,
              },
              {
                src: `${A}/tpay-final-14-hq.webp`,
                alt: "Auth screen 3",
                framed: true,
              },
            ],
          },
        ],
      },
    ],
  },
  conclusion: {
    eyebrow: "CONCLUSIONS",
    title: "Reflection & Key takeaways",
    paragraphs: [
      "This project reinforced how important structure is in financial products. When related tasks are connected and easy to find, users can act with more confidence and spend less time figuring out the interface.",
      "It also highlighted the value of consistency. A shared visual and interaction system makes a growing platform feel more dependable and easier to learn.",
      "Most importantly, the project strengthened my approach to designing financial experiences that are clear, scalable, and built around the tasks people perform every day.",
    ],
  },
}

const thr: CaseStudyData = {
  slug: "thr",
  metadata: {
    title: "THR — Case Study — Oshodi David",
    description:
      "Redesigning the digital experience for a logistics platform aiming at improving the day to day for truck drivers",
  },
  hero: {
    eyebrow: "2025 • Human Resource (HR) • Case study",
    title: "THR",
    subtext:
      "THR is a Human Resource and Payroll Management platform developed to assist organizations in managing employee records, payroll processing, attendance management, statutory remittances, leave administration, and other workforce-related activities.",
    visual: "thr",
    meta: [
      { label: "My Role", value: "Product Designer" },
      { label: "Timeline", value: "2 month" },
      {
        label: "Responsibilities",
        value: (
          <>
            UI Design, UX Design, User Research, Wireframing, Prototyping,
            Information Architecture, User Flows
          </>
        ),
        wide: true,
      },
      { label: "Tools", value: "Figma, Figjam, Teams" },
      { label: "Platform", value: "Web" },
    ],
  },
  about: {
    eyebrow: "ABOUT THE PROJECT",
    title: "About THR",
    paragraphs: [
      "THR is an all-in-one Human Resource Management System (HRMS) that helps organisations simplify workforce operations. It centralises employee records, attendance, leave, payroll and performance management, reducing manual work and improving efficiency.",
      "By replacing disconnected tools and manual workflows, THR helps HR teams maintain accurate records, monitor employee performance and manage workforce activities. Its structured processes improve operational visibility and support better decision-making.",
      "Beyond HR administration, THR makes workplace services more accessible to employees through its integrated ecosystem of learning, visitor management and payment solutions. It helps businesses create a connected workplace, improve productivity and focus on developing their people.",
    ],
  },
  problem: {
    eyebrow: "THE PROBLEM",
    title: "Reason For The Redesign",
    intro:
      "The problems identified were informed by feedback from internal teams, a review of recurring people operations tasks, and an audit of the existing interface.",
    screenshots: [
      {
        src: `${A}/THR-preview-hq.webp`,
        alt: "THR dashboard screen",
      },
      {
        src: `${A}/THR-detail.webp`,
        alt: "THR employee management screen",
      },
    ],
    screenshotsLabel: "Screens from the THR experience",
    coreProblems: [
      {
        title: "Fragmented Employee Records",
        body: "Employee information was spread across different areas, making it harder for teams to find what they needed and keep records consistent.",
      },
      {
        title: "Slow Onboarding",
        body: "Onboarding required several disconnected steps, which made the process harder to track for both administrators and new team members.",
      },
      {
        title: "Unclear Attendance & Leave",
        body: "Attendance and leave information was not easy to scan, making routine reviews more time-consuming than necessary.",
      },
      {
        title: "Inconsistent UI Patterns",
        body: "Screens followed different layouts and interaction patterns, reducing predictability and increasing the effort required to learn the platform.",
      },
      {
        title: "Outdated Visual Experience",
        body: "The interface felt dated and lacked the clarity needed for a tool used every day. There was an opportunity to modernise the experience while improving information hierarchy.",
      },
    ],
  },
  goals: {
    eyebrow: "GOALS",
    title: "What Should The Redesign Do Better?",
    paragraphs: [
      "The goal was to create a more dependable HR experience that makes people operations easier to manage. The redesign focused on clearer records, simpler workflows, and a consistent visual system.",
      "Ultimately, the aim was to help teams work more efficiently while giving employees a smoother, more transparent experience.",
    ],
  },
  designProcess: {
    eyebrow: "DESIGN PROCESS",
    title: "Turning Insights Into Meaningful Design Decisions",
    steps: [
      {
        title: "Understanding People Operations",
        copy: [
          "I reviewed feedback from internal teams and mapped the tasks they perform most often, from updating employee records to reviewing attendance and managing leave. This helped identify where the experience created unnecessary work.",
        ],
      },
      {
        title: "Structuring The Experience",
        copy: [
          "I grouped related information and tasks into a clearer information architecture. I also looked at established HR products to identify patterns that could improve clarity and consistency.",
          "These insights informed a simpler navigation structure and a more predictable approach to common HR actions.",
        ],
      },
      {
        title: "Design, Prototype & Test",
        copy: [
          "I validated the structure with low-fidelity prototypes before moving into high-fidelity designs. Feedback from each round helped simplify the workflows and remove unnecessary steps.",
          "I then built out a reusable visual system that supports consistency across current and future HR features.",
        ],
      },
    ],
    visual: {
      src: `${A}/THR-preview-hq.webp`,
      alt: "THR dashboard",
    },
  },
  finalProduct: {
    eyebrow: "FINAL PRODUCT",
    title: "High Fidelity Designs",
    blocks: [
      {
        improvements: [],
        groups: [
          {
            layout: "stack",
            images: [
              {
                src: `${A}/thr-final-01-hq.webp`,
                alt: "THR leave request dashboard",
                framed: true,
              },
              {
                src: `${A}/thr-final-02-hq.webp`,
                alt: "THR update password settings",
                framed: true,
              },
              {
                src: `${A}/thr-final-03-hq.webp`,
                alt: "THR payroll approvals",
                framed: true,
              },
              {
                src: `${A}/thr-final-04-hq.webp`,
                alt: "THR leave details",
                framed: true,
              },
              {
                src: `${A}/thr-final-05-hq.webp`,
                alt: "THR resource bank",
                framed: true,
              },
              {
                src: `${A}/thr-final-06-hq.webp`,
                alt: "THR structured payroll settings",
                framed: true,
              },
              {
                src: `${A}/thr-login-page.svg`,
                alt: "THR login page",
                framed: true,
                inset: true,
              },
              {
                src: `${A}/thr-forgot-password.svg`,
                alt: "THR forgot password resend code page",
                framed: true,
                inset: true,
              },
              {
                src: `${A}/thr-create-account.svg`,
                alt: "THR create account page",
                framed: true,
                inset: true,
              },
              {
                src: `${A}/thr-create-account-1.svg`,
                alt: "THR create account page variant",
                framed: true,
                inset: true,
              },
              {
                src: `${A}/thr-create-account-2.svg`,
                alt: "THR create account page variant",
                framed: true,
                inset: true,
              },
            ],
          },
        ],
      },
    ],
  },
  conclusion: {
    eyebrow: "CONCLUSIONS",
    title: "Reflection & Key takeaways",
    paragraphs: [
      "This project reinforced the importance of structure in everyday operational tools. When related information and tasks are organised clearly, teams can work with less friction and more confidence.",
      "It also highlighted how much consistency contributes to trust. A shared visual and interaction system makes a growing platform feel more dependable and easier to use.",
      "Most importantly, the project strengthened my approach to designing HR experiences that are clear, efficient, and built around the people who rely on them every day.",
    ],
  },
}

export const caseStudies = {
  alatbywema,
  "truck-app": truckApp,
  tpay,
  thr,
} satisfies Record<string, CaseStudyData>

export type CaseStudySlug = keyof typeof caseStudies
