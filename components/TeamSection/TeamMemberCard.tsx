import { Card } from "@/components/ui/card";
import { Globe, Linkedin } from "lucide-react";
import Link from "next/link";

export type TeamMemberCardProps = {
  name: string;
  role: string;
  imageUrl?: string;
  linkedinUrl: string;
  websiteUrl?: string;
};

export const TeamMemberCard = (props: TeamMemberCardProps) => {
  // Extract initials for the placeholder
  const initials = props.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="flex flex-col relative w-full h-full min-h-[360px] p-6 border shrink-0 sm:shrink border-neutral-200/50 shadow-sm sm:shadow-md bg-white sm:bg-[#F9FAFB] rounded-[24px] sm:rounded-[32px] overflow-hidden justify-end hover:shadow-lg transition-all duration-300 gap-5">
      {/* Header Info */}
      <div className="flex flex-col gap-0.5">
        <h3 className="text-[1.25rem] sm:text-xl font-semibold tracking-tight text-neutral-900 leading-tight group-hover:text-neutral-800 transition-colors">
          {props.name}
        </h3>
        <p className="text-neutral-500 text-xs sm:text-sm font-medium tracking-wide">
          {props.role}
        </p>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-2">
        {props.websiteUrl && (
          <Link
            href={props.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:scale-110 hover:bg-neutral-50 transition-all text-neutral-600"
            title="Website"
          >
            <Globe size={18} />
          </Link>
        )}
        <Link
          href={props.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:scale-110 hover:bg-neutral-50 transition-all text-neutral-600"
          title="LinkedIn"
        >
          <Linkedin size={18} />
        </Link>
      </div>

      {/* Image Area */}
      <div className="relative w-full aspect-[4/3] rounded-2xl bg-[#EAECF0] overflow-hidden flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
        {props.imageUrl ? (
          <img
            src={props.imageUrl}
            alt={props.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-6xl sm:text-7xl font-bold text-neutral-400 opacity-50 tracking-tighter cursor-default select-none">
            {initials}
          </span>
        )}

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </Card>
  );
};
