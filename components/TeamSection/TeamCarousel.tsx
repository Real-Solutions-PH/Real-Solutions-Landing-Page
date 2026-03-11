"use client";

import { TeamMemberCard } from "./TeamMemberCard";

export const TeamCarousel = () => {
  const teamMembers = [
    {
      name: "Kairus Noah Tecson",
      role: "AI/ML Engineer",
      imageUrl: "",
      linkedinUrl: "https://www.linkedin.com/in/kairus-tecson/",
      websiteUrl: "https://www.schadenkai.space",
    },
    {
      name: "Ervin Vince Piol",
      role: "Full Stack Engineer",
      imageUrl: "",
      linkedinUrl: "https://www.linkedin.com/in/ervin-piol/",
      websiteUrl: "https://ervin-piol.netlify.app",
    },
    {
      name: "John Luis Gomez",
      role: "UI/UX Designer",
      imageUrl: "",
      linkedinUrl: "http://linkedin.com/in/john-luis-gomez-a44b2b263/",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={index} {...member} />
      ))}
    </div>
  );
};
