import FrameBox from "@/components/intersection";
import ContactSection from "@/components/sections/Contact";
import EducationSection from "@/components/sections/Education";
import ExperienceTimeline from "@/components/sections/Experience";
import FooterSection from "@/components/sections/Footer";
import HeroSection from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/Projects";
import SkillsSection from "@/components/sections/skills";
import { ModeToggle } from "@/components/togglebutton";

export default function Home() {
  return (
    <>
      <nav
        className="
          fixed top-0 right-2 sm:right-6 md:right-10
          z-50
          bg-background/80 backdrop-blur
        "
      >
        <ModeToggle />
      </nav>

      {/* Page Wrapper */}
      <main className="min-h-screen bg-background text-foreground">
        <div
          className="
            mx-auto
            w-full
            max-w-3xl lg:max-w-4xl
            px-4 sm:px-6 md:px-8
            py-10 sm:py-14 md:py-20
          "
        >
          <FrameBox>
            <div
              className="
                space-y-10
                sm:space-y-8
                md:space-y-10
              "
            >
              <HeroSection />
              <SkillsSection />
              <ExperienceTimeline />
              <ProjectsSection />
              <EducationSection />
              <ContactSection />
              <FooterSection />
            </div>
          </FrameBox>
        </div>
      </main>
    </>
  );
}
