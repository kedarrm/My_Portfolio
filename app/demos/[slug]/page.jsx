import Link from "next/link";
import { notFound } from "next/navigation";
import Dropdown from "./_components/Dropdown";
import RippleEffect from "./_components/RippleEffect";
import Menu from "./_components/ExpandingMenu";
import Toolbar from "./_components/Toolbar";
import AnimatedText from "./_components/Text";
import DescriptionSection from "@/app/MyWork/_components/Description";
import DemoClient from "./DemoClient";


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
          h-96 rounded-lg bg-muted/50
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
              className="text-sm font-medium text-muted-foreground hover:underline"
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
