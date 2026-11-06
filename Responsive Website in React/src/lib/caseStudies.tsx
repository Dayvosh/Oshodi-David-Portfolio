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
  link?: { label: string; href: string }
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
  title: string
  copy?: string
  paragraphs?: string[]
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
    meta: CaseMetaItem[]
  }
  about: {
    eyebrow: string
    title: string
    paragraphs: string[]
    emphasis?: string
  }
  problem: {
    eyebrow: string
    title: string
    intro: string
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
  }
  designProcess: {
    eyebrow: string
    title: string
    intro?: string[]
    startVisual?: { src: string; alt: string }
    flowSection?: CaseDesignFlowSection
    steps?: CaseDesignStep[]
    visual?: { src: string; alt: string }
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
            <br />
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
        src: `${A}/alat-review-1.png`,
        alt: "Customer review: Horrible app, do not recommend",
      },
      {
        src: `${A}/alat-review-2.png`,
        alt: "Customer review: Transfer exposes balance",
      },
      {
        src: `${A}/alat-review-3.png`,
        alt: "Customer review: Don't use the ALAT app to buy electricity",
      },
      {
        src: `${A}/alat-review-4.png`,
        alt: "Customer review: Worst bank experience ever, avoid",
      },
      {
        src: `${A}/alat-review-5.png`,
        alt: "Customer review: Transfer issues from Okuku, Osun state",
      },
      {
        src: `${A}/alat-review-1.png`,
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
          src: `${A}/alat-old-ui-1.png`,
          alt: "Previous ALAT app interface, screen one",
        },
        {
          src: `${A}/alat-old-ui-2.png`,
          alt: "Previous ALAT app interface, screen two",
        },
        {
          src: `${A}/alat-old-ui-3.png`,
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
      src: `${A}/alat-design-process-visual.png`,
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
        image: `${A}/Payment Hub.svg`,
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
        image: `${A}/Local Transfer 1.svg`,
        image2: `${A}/Local transfer 2.png`,
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
        image: `${A}/Data.png`,
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
        image: `${A}/Bill Payment.svg`,
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
        image: `${A}/Gift card.svg`,
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
            <br />
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
      image: `${A}/truck-product-owner.png`,
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
          src: `${A}/truck-old-ui-1.png`,
          alt: "Old Truck App login screen",
        },
        {
          src: `${A}/truck-old-ui-2.png`,
          alt: "Old Truck App trips screen",
        },
        {
          src: `${A}/truck-old-ui-3.png`,
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
      src: `${A}/truck-design-start.png`,
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
                src: `${A}/truck-final-nav-old.png`,
                alt: "Truck App old bottom navigation design",
                label: "OLD DESIGN",
                labelTop: "55.63%",
              },
              {
                src: `${A}/truck-final-nav-new.png`,
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
                src: `${A}/truck-final-nav-explore.png`,
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
                src: `${A}/truck-final-home-old.png`,
                alt: "Truck App old home page design",
                label: "OLD DESIGN",
                labelTop: "3.24%",
              },
              {
                src: `${A}/truck-final-home-new.png`,
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
                src: `${A}/truck-final-home-explore.png`,
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
          "Rescue Truck: Drivers can enter the truck number to locate a truck in need of assistance. The app displays its location and key details, with a direct link to Google Maps for navigation.",
          "Search for a Truck: Drivers can search for trucks within a specific radius by entering a location and distance. Available trucks are displayed directly on the map, along with relevant information.",
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
                src: `${A}/truck-final-trucks-old.png`,
                alt: "Truck App old trucks nearby search and rescue flow",
                label: "OLD DESIGN",
                labelTop: "4.08%",
              },
              {
                src: `${A}/truck-final-trucks-new.png`,
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
                src: `${A}/truck-final-notification.png`,
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
                src: `${A}/truck-final-about-old.png`,
                alt: "Truck App old about truck page",
                label: "OLD DESIGN",
                labelTop: "3.24%",
              },
              {
                src: `${A}/truck-final-about-new.png`,
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
                src: `${A}/truck-final-design-system.png`,
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
      "Simplifying personal finance and business financial operations in one platform",
    visual: "tpay",
    meta: [
      { label: "My Role", value: "Product Designer" },
      { label: "Timeline", value: "3 month" },
      {
        label: "Responsibilities",
        value: (
          <>
            UI Design, UX Design, User Research, Wireframing, Prototyping,
            <br />
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
      "Tpay is a fintech platform that brings personal finance and business financial operations together in one place. It supports everyday payments as well as the tools businesses need to manage money with confidence.",
      "As the platform grew, the experience became harder to navigate. Related tasks were spread across different areas, and users had to work harder to understand where to go and what to do next.",
      "The opportunity was to create a clearer, more cohesive product that makes payments, payroll, and financial operations feel connected rather than separate.",
    ],
    emphasis:
      "The redesign focused on simplifying core financial workflows, improving visibility across accounts and transactions, and creating a consistent system that can scale with the product.",
  },
  problem: {
    eyebrow: "THE PROBLEM",
    title: "Reason For The Redesign",
    intro:
      "The problems identified were informed by user feedback, product usage patterns, and a review of the key tasks people perform most often across the platform.",
    screenshots: [
      {
        src: `${A}/Tpay.svg`,
        alt: "Tpay dashboard screen",
      },
    ],
    screenshotsLabel: "Screens from the Tpay experience",
    coreProblems: [
      {
        title: "Disconnected Financial Tools",
        body: "Payments, payroll, and financial operations lived in separate areas, making it difficult for users to understand how the pieces fit together.",
      },
      {
        title: "Slow Reconciliation",
        body: "Users had to piece together transaction information from multiple views, which made reviewing and reconciling activity more time-consuming.",
      },
      {
        title: "Unclear Payroll Workflows",
        body: "Payroll tasks lacked a clear structure, making it harder to know what had been completed and what still needed attention.",
      },
      {
        title: "Inconsistent UI Patterns",
        body: "Screens followed different layouts and interaction patterns, reducing predictability and making the product harder to learn.",
      },
      {
        title: "Limited Operational Visibility",
        body: "Important account and transaction information was not easy to scan, making it harder for users to stay on top of their finances.",
      },
    ],
  },
  goals: {
    eyebrow: "GOALS",
    title: "What Should The Redesign Do Better?",
    paragraphs: [
      "The goal was to create a unified financial experience that makes core tasks easier to find, understand, and complete. The redesign focused on clearer information hierarchy, simpler workflows, and a consistent visual system.",
      "Ultimately, the aim was to help individuals and businesses manage money with greater confidence while supporting the platform's continued growth.",
    ],
  },
  designProcess: {
    eyebrow: "DESIGN PROCESS",
    title: "Turning Insights Into Meaningful Design Decisions",
    steps: [
      {
        title: "Understanding Core Financial Tasks",
        copy: [
          "I reviewed feedback and usage patterns to identify the tasks users rely on most often, from making payments to managing payroll and reviewing transactions. This helped highlight where the experience added unnecessary effort.",
        ],
      },
      {
        title: "Structuring The Platform",
        copy: [
          "I mapped the main journeys and grouped related tasks into a clearer information architecture. I also looked at established fintech products to identify patterns that could improve clarity without making the product feel generic.",
          "These insights informed a simpler navigation structure and a more predictable approach to common financial actions.",
        ],
      },
      {
        title: "Design, Prototype & Test",
        copy: [
          "I refined the flows through low-fidelity prototypes before moving into high-fidelity designs. Feedback from each round helped simplify the experience and remove unnecessary steps.",
          "I then built out a reusable visual system that supports consistency across current and future features.",
        ],
      },
    ],
    visual: {
      src: `${A}/Tpay.svg`,
      alt: "Tpay dashboard",
    },
  },
  finalProduct: {
    eyebrow: "FINAL PRODUCT",
    title: "High Fidelity Designs",
    blocks: [
      {
        title: "Payments Overview",
        copy: "A clearer starting point for understanding account activity and moving into common financial tasks.",
        improvements: [
          {
            label: "Unified account view",
            body: "Brought balances, recent activity, and key actions into one focused overview.",
          },
          {
            label: "Clear transaction hierarchy",
            body: "Presented transaction information so users can scan and understand activity quickly.",
          },
          {
            label: "Consistent components",
            body: "Created reusable patterns that make the platform easier to learn and navigate.",
          },
        ],
        image: `${A}/Tpay.svg`,
      },
      {
        title: "Payroll & Operations",
        copy: "A more structured experience for managing payroll and day-to-day financial operations.",
        improvements: [
          {
            label: "Clear payroll steps",
            body: "Organised payroll tasks into a predictable sequence with visible progress.",
          },
          {
            label: "Better operational visibility",
            body: "Surfaced the information users need to review and confirm activity with confidence.",
          },
          {
            label: "Scalable structure",
            body: "Built a flexible layout that can support additional financial tools as the platform grows.",
          },
        ],
        image: `${A}/Tpay.svg`,
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
      "Redesigning the digital experience for a logistics platform aiming at improving the day to day for truck drivers",
    visual: "thr",
    meta: [
      { label: "My Role", value: "Product Designer" },
      { label: "Timeline", value: "3 month" },
      {
        label: "Responsibilities",
        value: (
          <>
            UI Design, UX Design, User Research, Wireframing, Prototyping,
            <br />
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
    title: "What Is THR?",
    paragraphs: [
      "THR is an HR platform supporting a logistics business and the people who keep it moving. It brings employee records, attendance, and everyday people operations into one place.",
      "As the business grew, the experience became harder to navigate. Information was spread across different views, and routine HR tasks took more steps than they should.",
      "The opportunity was to create a clearer, more consistent experience that helps teams manage people operations efficiently while giving drivers and staff a smoother day-to-day experience.",
    ],
    emphasis:
      "The redesign focused on simplifying core HR workflows, improving visibility across employee information, and establishing a consistent system that supports future growth.",
  },
  problem: {
    eyebrow: "THE PROBLEM",
    title: "Reason For The Redesign",
    intro:
      "The problems identified were informed by feedback from internal teams, a review of recurring people operations tasks, and an audit of the existing interface.",
    screenshots: [
      {
        src: `${A}/THR.svg`,
        alt: "THR dashboard screen",
      },
      {
        src: `${A}/THR.png`,
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
      src: `${A}/THR.svg`,
      alt: "THR dashboard",
    },
  },
  finalProduct: {
    eyebrow: "FINAL PRODUCT",
    title: "High Fidelity Designs",
    blocks: [
      {
        title: "Employee Dashboard",
        copy: "A clearer overview of people information and the tasks that need attention.",
        improvements: [
          {
            label: "Centralised employee records",
            body: "Brought key employee information into one consistent view.",
          },
          {
            label: "Clear information hierarchy",
            body: "Presented the most important details first so teams can scan and act quickly.",
          },
          {
            label: "Consistent visual language",
            body: "Introduced reusable components and patterns to make the platform easier to learn.",
          },
        ],
        image: `${A}/THR.svg`,
      },
      {
        title: "People Operations",
        copy: "A more structured experience for managing attendance, leave, and everyday HR tasks.",
        improvements: [
          {
            label: "Simplified workflows",
            body: "Reduced the steps required to complete routine people operations tasks.",
          },
          {
            label: "Better visibility",
            body: "Made attendance and leave information easier to review at a glance.",
          },
          {
            label: "Scalable structure",
            body: "Built a flexible layout that can support additional HR tools as the business grows.",
          },
        ],
        visuals: 2,
        image: `${A}/THR.png`,
        image2: `${A}/THR.svg`,
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
