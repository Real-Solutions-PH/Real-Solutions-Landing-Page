"use client";

import { TeamMemberCard } from "./TeamMemberCard";

export const TeamCarousel = () => {
  const teamMembers = [
    {
      name: "Kairus Noah Tecson",
      role: "AI/ML Engineer",
      imageUrl: "",
      imageVariant: "md:aspect-[auto_1200_/_1200]",
      linkedinUrl: "https://www.linkedin.com/in/kairus-tecson/",
      websiteUrl: "https://www.schadenkai.space",
      linkedinIconUrl: "https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-40.svg"
    },
    {
      name: "Ervin Vince Piol",
      role: "Full Stack Engineer",
      imageUrl: "",
      imageVariant: "md:aspect-[auto_833_/_673]",
      linkedinUrl: "https://www.linkedin.com/in/ervin-piol/",
      websiteUrl: "https://ervin-piol.netlify.app",
      linkedinIconUrl: "https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-40.svg"
    },
    {
      name: "John Luis Gomez",
      role: "UI/UX Designer",
      imageUrl: "",
      imageVariant: "md:aspect-[auto_800_/_1200]",
      linkedinUrl: "http://linkedin.com/in/john-luis-gomez-a44b2b263/",
      linkedinIconUrl: "https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-40.svg"
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 h-auto w-full">
      {teamMembers.map((member, index) => (
        <div key={index} className="w-full max-w-[400px]">
          <TeamMemberCard {...member} />
        </div>
      ))}
    </div>
  );
};
