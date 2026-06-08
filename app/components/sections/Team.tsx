import { AtSign, GitBranch, Link2 } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";

const teamMembers = [
  {
    name: "Your Name",
    role: "Community Lead",
    bio: "AWS Community Builder passionate about cloud education",
    image: "https://via.placeholder.com/300x300?text=Team",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Team Member 2",
    role: "Technical Lead",
    bio: "Solutions Architect helping others learn AWS",
    image: "https://via.placeholder.com/300x300?text=Team",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Team Member 3",
    role: "Events Lead",
    bio: "Organizing tech events for student communities",
    image: "https://via.placeholder.com/300x300?text=Team",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Team Member 4",
    role: "Marketing Lead",
    bio: "Building community connections and partnerships",
    image: "https://via.placeholder.com/300x300?text=Team",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-28 overflow-hidden bg-[#050816] text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-[550px] w-[550px] rounded-full bg-[#A45AFA]/15 blur-[150px]" />

        <div className="absolute -right-32 bottom-0 h-[650px] w-[650px] rounded-full bg-[#A45AFA]/10 blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(164,90,250,.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(164,90,250,.35) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[#A45AFA]/40 animate-pulse"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 29) % 100}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mx-auto mb-10 max-w-5xl text-center">
          <span className="inline-flex rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-5 py-2 text-sm font-semibold tracking-[0.3em] text-[#DDBEFF] backdrop-blur-xl">
            Team
          </span>

          <h2 className="mt-8 text-6xl md:text-8xl font-black leading-none tracking-tight text-white">
            {/* Powered By */}
            <span className="block bg-gradient-to-r from-[#A45AFA] via-[#F0E1FF] to-[#A45AFA] bg-clip-text text-transparent">
               Meet the Team
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg md:text-xl leading-relaxed text-slate-400">
            The minds behind AWS Student Community Day Bhilai
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-xl transition-all duration-300 hover:-translate-y-3 hover:border-[#A45AFA]/50"
            >

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-b from-[#A45AFA]/20 to-transparent" />

              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-52 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="relative p-6">

                <h3 className="text-xl font-bold">{member.name}</h3>

                <p className="text-[#A45AFA] font-semibold mt-1">
                  {member.role}
                </p>

                <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                  {member.bio}
                </p>

                {/* SOCIALS */}
                <div className="mt-6 flex flex-col gap-3">

                  {/* LinkedIn Primary Button */}
                  <a
                    href={member.social.linkedin}
                    className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-[#0A66C2]/20 border border-[#0A66C2]/40 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                    LinkedIn
                  </a>

                  {/* Other Icons */}
                  <div className="flex justify-center gap-5 text-gray-400">
                    <a href={member.social.twitter} className="hover:text-[#1DA1F2] transition">
                      <AtSign className="w-5 h-5" />
                    </a>
                    <a href={member.social.github} className="hover:text-white transition">
                      <GitBranch className="w-5 h-5" />
                    </a>
                    <a href={member.social.linkedin} className="hover:text-[#0A66C2] transition">
                      <Link2 className="w-5 h-5" />
                    </a>
                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}