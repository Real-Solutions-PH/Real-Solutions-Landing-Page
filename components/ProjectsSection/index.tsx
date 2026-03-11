"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import ArnoldAI from "@/public/projects/ArnolAI.webp";
import { FadeIn } from "@/utils/animation";
import { ProjectTabs } from "./ProjectTabs";
import { ProjectContent } from "./ProjectContent";
import { Project } from "./types";

const projectsData: Project[] = [
  {
    id: "project-1",
    tabLabel: "PROJECT 1",
    number: "01",
    title: "MedixCare — AI Triage Assistant for Healthcare",
    description:
      "We built a custom AI triage assistant that evaluates symptoms and routes patients to the appropriate care level.",
    image: ArnoldAI,
    stats: [
      { value: "40 %", label: "Reduced average wait" },
      { value: "30 %", label: "Rise in patient satisfaction" },
    ],
  },
  {
    id: "project-2",
    tabLabel: "PROJECT 2",
    number: "02",
    title: "FinSmart — Predictive Analytics for Finance",
    description:
      "Developed a predictive model to help financial institutions identify market trends and optimize their investment portfolios in real time.",
    image: ArnoldAI,
    stats: [
      { value: "25 %", label: "Increase in ROI" },
      { value: "1.5 x", label: "Faster decision making" },
    ],
  },
  {
    id: "project-3",
    tabLabel: "PROJECT 3",
    number: "03",
    title: "EcoLogix — Supply Chain Optimization",
    description:
      "Implemented an AI-driven logistics platform that significantly reduces carbon footprint while streamlining delivery routes.",
    image: ArnoldAI,
    stats: [
      { value: "50 %", label: "Lower carbon emissions" },
      { value: "20 %", label: "Cost reduction" },
    ],
  },
  {
    id: "project-4",
    tabLabel: "PROJECT 4",
    number: "03",
    title: "EcoLogix — Supply Chain Optimization",
    description:
      "Implemented an AI-driven logistics platform that significantly reduces carbon footprint while streamlining delivery routes.",
    image: ArnoldAI,
    stats: [
      { value: "50 %", label: "Lower carbon emissions" },
      { value: "20 %", label: "Cost reduction" },
    ],
  },
];

export const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState(projectsData[0].id);

  const activeProject =
    projectsData.find((p) => p.id === activeTab) || projectsData[0];

  return (
    <section
      id="projects"
      className="relative content-center items-center bg-neutral-100 box-border caret-transparent gap-x-10 flex flex-col shrink-0 justify-center gap-y-10 w-full z-[2] overflow-hidden px-6 py-20 scroll-mt-2.5 md:px-12 lg:px-20 md:py-[100px]"
    >
      <div className="relative content-center items-center box-border caret-transparent gap-x-11 flex flex-col shrink-0 justify-center max-w-[1240px] gap-y-11 w-full z-[2]">
        <FadeIn>
          <SectionHeader
            iconUrl="https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-3.svg"
            label="PROJECTS"
            title="Proven Impact & Results"
            description="Explore Projects that reflect our AI expertise & real world impact"
          />
        </FadeIn>
        <FadeIn delay={0.2} fullWidth>
          <div className="relative content-center items-center box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-start gap-y-0 w-full z-[1] md:content-start md:items-start shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset] rounded-[20px] p-6">
            {/* Tabs */}
            <ProjectTabs
              projectsData={projectsData}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            {/* Content */}
            <ProjectContent activeProject={activeProject} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
