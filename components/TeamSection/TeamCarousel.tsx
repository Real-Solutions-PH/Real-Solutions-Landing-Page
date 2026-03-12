"use client";

import { TeamMemberCard } from "./TeamMemberCard";
import { teamMembers } from "./teams";

export const TeamCarousel = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={index} {...member} />
      ))}
    </div>
  );
};
