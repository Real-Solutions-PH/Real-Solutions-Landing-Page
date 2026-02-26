"use client";

import { TeamMemberCard } from "./TeamMemberCard";

export const TeamCarousel = () => {
  const teamMembers = [
    {
      name: "Kairus Noah Tecson",
      role: "AI/ML Engineer",
      imageUrl: "https://scontent.fmnl33-5.fna.fbcdn.net/v/t39.30808-1/271778610_1982853981881216_3277426939702205412_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=WBgpxGuqIqAQ7kNvwH1TX3_&_nc_oc=AdngaBEplcduDZ3PorwL_m-A-FI5bh_RcfZttKuYTL_2m9_9l6Y1mQFQW9x9zZ2fEzkbAPMhDzXhyUTL2rTyfRag&_nc_zt=24&_nc_ht=scontent.fmnl33-5.fna&_nc_gid=eiNEOy52EFJ-c7UOQWWbrg&oh=00_AftJc_B1NnIeFqoybENorm-6epRn7KCXck_A0IEVwRlV7g&oe=69988F2D",
      imageVariant: "md:aspect-[auto_1200_/_1200]",
      twitterUrl: "https://twitter.com/",
      instagramUrl: "https://www.instagram.com/",
      linkedinUrl: "https://www.linkedin.com/",
      twitterIconUrl: "https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-38.svg",
      instagramIconUrl: "https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-39.svg",
      linkedinIconUrl: "https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-40.svg"
    },
    {
      name: "Ervin Vince Piol",
      role: "Full Stack Engineer",
      imageUrl: "https://scontent.fmnl33-3.fna.fbcdn.net/v/t39.30808-1/505382496_1373687917077790_5350788905457625684_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=x_y8Gn8EglIQ7kNvwHDlQHF&_nc_oc=AdntUnbWEw-5IJ2E8H8rsKHBalepnAoQEQLunbvm1FqyjbtyOKZ_QUnIJuG55NnnjSVIZDkndac2HcCtxVuPz2vN&_nc_zt=24&_nc_ht=scontent.fmnl33-3.fna&_nc_gid=2Y3vCMt-vWDr8Y6tPy-r_g&oh=00_AftT4ZZWK8HNHBhenrnC2VfNwR6gkk1PY4_A8v_w8tzrXA&oe=6998A297",
      imageVariant: "md:aspect-[auto_833_/_673]",
      twitterUrl: "https://twitter.com/",
      instagramUrl: "https://www.instagram.com/",
      linkedinUrl: "https://www.linkedin.com/",
      twitterIconUrl: "https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-38.svg",
      instagramIconUrl: "https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-39.svg",
      linkedinIconUrl: "https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-40.svg"
    },
    {
      name: "John Luis Gomez",
      role: "UI/UX Designer",
      imageUrl: "https://scontent.fmnl33-4.fna.fbcdn.net/v/t39.30808-1/510256309_1025979536388708_4901170426082359253_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=111&ccb=1-7&_nc_sid=1d2534&_nc_ohc=rLYjXsCeW7MQ7kNvwGzUz5B&_nc_oc=AdlTqDrUutEWO-WzYVo3cDSOIzYTGawc7vKo0I89CLmZj34CKLokDHjwN0wUnRKn15PiewZHmlZxF8dC1rYQu6KW&_nc_zt=24&_nc_ht=scontent.fmnl33-4.fna&_nc_gid=IFB_41qye8Q5F4Gc5IRh6w&oh=00_Aft48QZztlHTVDj77UKZ-Y2I6QcX70Vqe3CTNnTmrn-flQ&oe=69988D90",
      imageVariant: "md:aspect-[auto_800_/_1200]",
      twitterUrl: "https://twitter.com/",
      instagramUrl: "https://www.instagram.com/",
      linkedinUrl: "https://www.linkedin.com/",
      twitterIconUrl: "https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-38.svg",
      instagramIconUrl: "https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-39.svg",
      linkedinIconUrl: "https://c.animaapp.com/mloikyq0WG9Ud9/assets/icon-40.svg"
    },
  ];

  return (
    <div className="flex justify-center gap-6 h-[514px] w-full overflow-hidden">
        {teamMembers.map((member, index) => (
          <div key={index} className="shrink-0 w-[300px] md:w-[350px]">
            <TeamMemberCard {...member} />
          </div>
        ))}
    </div>
  );
};
