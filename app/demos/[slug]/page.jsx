import Link from "next/link";
import { notFound } from "next/navigation";
import Dropdown from "./_components/Dropdown";
import RippleEffect from "./_components/RippleEffect";
import Menu from "./_components/ExpandingMenu";
import Toolbar from "./_components/Toolbar";
import AnimatedText from "./_components/Text";
import DescriptionSection from "@/app/MyWork/_components/Description";
import DemoClient from "./DemoClient";
import Badge from "./_components/Badge";
import NewComp from "./_components/TextSwitcher";
import TextSwitcher from "./_components/TextSwitcher";
import VerticalSkeletonLoader from "./_components/Loader";
import GridLayout from "./_components/Grid";
import Breadcrumb from "./_components/Breadcrums";


const demos = [
  {
    slug: "dropdown",
    name: "Animated Dropdown",
    description:
      "Animated DropDown Menu in React with Framer Motion and Tailwind CSS.",
    code: "https://github.com/yourname/animated-dropdown",
    component: Dropdown,
    details: {
      overview:
        "A modern and flexible animated dropdown component built for clean, interactive user interfaces. It features smooth micro-animations, icon-enhanced options, click-outside dismissal, and theme-aware styling for seamless integration into modern web applications.",
      useCases: [
        "Navigation menus",
        "Filter controls",
        "Settings panels",
        "Dashboard actions",
      ],
      whyUse: [
        "Better UX than native select",
        "Fully themeable (light/dark)",
        "Smooth animations",
        "Reusable & scalable",
      ],
      tech: ["React", "Framer Motion", "Tailwind CSS", "Lucide Icons"],
    },
  },
  {
    slug: "ripple",
    name: "Ripple Button",
    description: "Material-style ripple effect on click.",
    code: "https://github.com/yourname/ripple-button",
    component: RippleEffect,
    details: {
      overview:
        "A modern ripple effect component inspired by Material Design that provides smooth, responsive visual feedback on user interactions using lightweight, performant animations.",
      useCases: [
        "Buttons",
        "Clickable cards",
        "Image thumbnails",
        "CTA elements",
      ],
      whyUse: [
        "Enhances interaction feedback",
        "Lightweight and reusable",
        "Customizable ripple color",
        "Works with any child element",
      ],
      tech: ["React", "Framer Motion", "Tailwind CSS", "Next.js"],
    }
  },
  {
    slug: "menu",
    name: "Expanding Menu",
    description: "Expanding Menu or Navbar with React and Tailwind CSS.",
    code: "https://github.com/yourname/modal-component",
    component: Menu,
    details: {
      overview:
        "A modern expanding navigation menu that reveals labels on hover, combining icons and smooth transitions for a clean, space-efficient user experience.",
      useCases: [
        "Dashboard navigation",
        "Admin panels",
        "Compact menus",
        "Portfolio UI components",
      ],
      whyUse: [
        "Space-efficient design",
        "Improves visual clarity",
        "Smooth, intuitive interactions",
        "Easy to scale and customize",
      ],
      tech: ["React", "Tailwind CSS", "Lucide Icons"],
    }
  },
  {
    slug: "text",
    name: "Animated Text",
    description: "Animated text with blur effect that smoothly reveals content, guiding attention and adding a modern, polished visual impact to your UI.",
    code: "https://github.com/yourname/form-input",
    component: AnimatedText,
    details: {
      overview:
        "A smooth animated text component that reveals content word by word using blur, opacity, and subtle motion to create an engaging and polished reading experience.",
      useCases: [
        "Hero sections",
        "About sections",
        "Marketing copy",
        "Portfolio introductions",
      ],
      whyUse: [
        "Creates strong visual impact",
        "Guides user attention naturally",
        "Lightweight and performant",
        "Clean, modern animation style",
      ],
      tech: ["React", "Framer Motion", "Tailwind CSS"],
    }
  },
  {
    slug: "toolbar",
    name: "Directional Toolbar",
    description: "Contextual toolbar appearing from different directions.",
    code: "https://github.com/yourname/directional-toolbar",
    component: Toolbar,
    details: {
      overview:
        "A flexible and accessible tooltip component that displays contextual information on hover or focus, with smooth micro-animations and support for multiple placement directions.",
      useCases: [
        "Inline help text",
        "Form hints",
        "Status explanations",
        "Dashboard tooltips",
      ],
      whyUse: [
        "Keeps interfaces clean",
        "Improves usability without clutter",
        "Keyboard accessible",
        "Supports multiple placements",
      ],
      tech: ["React", "Tailwind CSS"],
    }
  },
  {
  slug: "badge",
  name: "Badge Component",
  description:
    "A lightweight, theme-aware badge component for labels, tags, and status indicators with full light and dark mode support.",
  code: "https://github.com/yourname/badge-component",
  component: Badge,
  details: {
    overview:
      "A minimal yet polished badge component designed for modern UIs. It automatically adapts to light and dark themes using Tailwind CSS, providing consistent contrast, subtle depth, and a clean pill-shaped design.",
    useCases: [
      "Skill tags in portfolios",
      "Status indicators (Active, Beta, New)",
      "Category labels",
      "Feature highlights",
      "Metadata chips",
    ],
    whyUse: [
      "Theme-aware out of the box (light & dark)",
      "No JavaScript required",
      "Consistent design system friendly",
      "Accessible contrast and spacing",
      "Easy to reuse across projects",
    ],
    variants: [
      "Default",
      "With icon",
      "Status badge (success / warning / error)",
      "Clickable tag",
    ],
    tech: [
      "React",
      "Tailwind CSS",
    ],
  },
},
{
  slug: "animated-text",
  name: "Animated Text Rotator",
  description:
    "A smooth, motion-driven text rotation component for highlighting key words or phrases in headings and hero sections.",
  code: "https://github.com/yourname/animated-text-rotator",
  component: TextSwitcher,
  details: {
    overview:
      "A modern animated text component built with React and Framer Motion. It cycles through a predefined set of words using elegant enter and exit animations, adding visual interest and emphasis to headlines without overwhelming the UI.",
    useCases: [
      "Hero section headlines",
      "Marketing landing pages",
      "Product highlight messaging",
      "Portfolio intros",
      "Call-to-action emphasis",
    ],
    whyUse: [
      "Smooth, polished animations with Framer Motion",
      "Zero external state management",
      "Minimal and readable component structure",
      "Easy word customization",
      "Perfect for modern, animated UIs",
    ],
    variants: [
      "Static text with animated keywords",
      "Custom animation timing",
      "Vertical or fade-only transitions",
      "Theme-adapted (light / dark)",
    ],
    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
},
{
  slug: "Loader",
  name: "Vertical Skeleton Loader",
  description:
    "A vertical, animated skeleton loader for list-based layouts that simulates content loading with smooth motion and depth.",
  code: "https://github.com/yourname/vertical-skeleton-loader",
  component: VerticalSkeletonLoader,
  details: {
    overview:
      "A sleek skeleton loading component designed for vertical lists such as feeds, menus, or cards. Built with Framer Motion and Tailwind CSS, it animates rows from top to bottom with subtle opacity and movement, enhanced by gradient fades for a premium loading experience.",
    useCases: [
      "Feed and list loading states",
      "Sidebar or menu placeholders",
      "Dashboard content loading",
      "Search result skeletons",
      "Mobile-style list loaders",
    ],
    whyUse: [
      "Visually communicates loading progress",
      "Smooth infinite animation loop",
      "Elegant top and bottom fade masking",
      "No layout shift when content loads",
      "Highly reusable across list-based UIs",
    ],
    variants: [
      "Adjustable row count",
      "Horizontal skeleton layout",
      "Avatar-only loader",
      "Shimmer-enhanced skeleton",
    ],
    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
},
{
  slug: "Grid",
  name: "Masonry Grid",
  description:
    "A responsive masonry-style grid layout for displaying uneven content blocks with smooth entry animation.",
  code: "https://github.com/yourname/masonry-grid-layout",
  component: GridLayout,
  details: {
    overview:
      "A clean and modern masonry grid layout inspired by brick-wall and Pinterest-style designs. It arranges items into multiple columns with varying heights, minimizing vertical gaps and creating a natural, staggered flow. A subtle blur-to-sharp animation enhances the initial render for a polished visual experience.",
    useCases: [
      "Image galleries",
      "Portfolio showcases",
      "Blog card layouts",
      "Pinterest-style feeds",
      "Content-heavy landing sections",
    ],
    whyUse: [
      "Visually appealing staggered layout",
      "No complex grid calculations required",
      "Smooth entrance animation",
      "Lightweight and easy to customize",
      "Works well with variable-height content",
    ],
    variants: [
      "Configurable column count",
      "Responsive breakpoints (2 / 3 / 4 columns)",
      "Card-based masonry items",
      "Animated hover states",
    ],
    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
},

{
  slug: "Breadcrumb",
  name: "Animated Breadcrumb Navigation",
  description:
    "A motion-enhanced breadcrumb navigation component with icon support and an animated active-state indicator.",
  code: "https://github.com/yourname/animated-breadcrumb",
  component: Breadcrumb,
  details: {
    overview:
      "A modern breadcrumb navigation component designed for Next.js App Router. It highlights the active route using a smooth, shared-layout animated underline while providing subtle hover and tap interactions for inactive items. Icon support improves visual clarity and scanability across navigation paths.",
    useCases: [
      "Dashboard navigation",
      "Documentation hierarchies",
      "Multi-level UI sections",
      "Portfolio and project pages",
      "App router–based layouts",
    ],
    whyUse: [
      "Animated active indicator using shared layout",
      "Built for Next.js App Router",
      "Icon-enhanced readability",
      "Subtle micro-interactions on hover and tap",
      "Accessible and SEO-friendly markup",
    ],
    variants: [
      "Dynamic breadcrumb generation from route segments",
      "Icon-only breadcrumb mode",
      "Compact mobile variant",
      "Custom separators (slash / dot / arrow)",
    ],
    tech: [
      "Next.js",
      "React",
      "Framer Motion",
      "Tailwind CSS",
      "Lucide Icons",
    ],
  },
},


];


export function generateStaticParams() {
  return demos.map((d) => ({ slug: d.slug }));
}


export default async function DemoPage({ params }) {
  const { slug } = await params;

  const demo = demos.find((d) => d.slug === slug);

  if (!demo) notFound();

  const PreviewComponent = demo.component;

  return (
    <>
    <DemoClient>
      <div className="min-h-screen bg-background text-foreground p-6">
        <header className="max-w-3xl mx-auto mb-8">
          <h1 className="text-3xl font-semibold mb-2">
            {demo.name}
          </h1>
          <p className="text-muted-foreground">
            {demo.description}
          </p>
        </header>


        <main className="max-w-3xl mx-auto">
          <div className="
          h-96 rounded-lg bg-muted/70
          flex items-center justify-center
          mb-6 
        ">
          {PreviewComponent ? (
              <PreviewComponent />
            ) : (
              <p className="text-sm text-muted-foreground">
                Preview will be added very soon…
              </p>
            )}
          </div>


          <div className="flex gap-4">
            {/* <a
            href={demo.code}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium hover:underline"
          >
            View Code
          </a> */}

            <Link
              href="/MyWork"
              className="text-md font-medium text-muted-foreground hover:text-foreground transition"
            >
              Back to Components
            </Link>
          </div>

          <div className="pt-2">
            <DescriptionSection details={demo.details} />
          </div>
        </main>
      </div>
      </DemoClient>
    </>
  );
}
