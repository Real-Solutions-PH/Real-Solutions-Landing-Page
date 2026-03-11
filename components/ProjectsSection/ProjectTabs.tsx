"use client";

import { Project } from "./types";

export const ProjectTabs = ({
  projectsData,
  activeTab,
  setActiveTab,
}: {
  projectsData: Project[];
  activeTab: string;
  setActiveTab: (id: string) => void;
}) => {
  return (
    <div className="flex flex-col sm:flex-row w-full gap-2 sm:gap-4 mb-10">
      {projectsData.map((project) => {
        const isActive = activeTab === project.id;
        return (
          <button
            key={project.id}
            onClick={() => setActiveTab(project.id)}
            className={`relative flex-1 py-4 px-6 text-xs md:text-sm font-semibold tracking-wide uppercase transition-colors duration-300 rounded-lg leading-none outline-none font-satoshi shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset] ${
              isActive
                ? "text-black"
                : "text-neutral-400 hover:text-neutral-600 opacity-50"
            }`}
          >
            {project.tabLabel}
          </button>
        );
      })}
    </div>
  );
};
