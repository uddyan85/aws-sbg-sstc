"use client";

const tracks = [
  {
    level: "Beginner",
    title: "AWS Foundations",
    description:
      "Explore core AWS services like EC2, S3, IAM, and cloud fundamentals while building a strong foundation for your cloud journey.",
    topics: [
      "AWS Console Fundamentals",
      "Launch EC2 Instances",
      "Store Data with Amazon S3",
      "Secure Resources using IAM",
    ],
    color: "from-emerald-500 to-teal-500",
  },
  {
    level: "Intermediate",
    title: "Cloud & AI Workshops",
    description:
      "Dive into hands-on sessions covering serverless architectures, AI/ML with Amazon Bedrock, infrastructure automation, and observability.",
    topics: [
      "Serverless Application Design",
      "AI/ML with Amazon Bedrock",
      "Infrastructure as Code",
      "Monitoring & Observability",
    ],
    color: "from-sky-500 to-cyan-500",
  },
  {
    level: "Career",
    title: "Career Growth",
    description:
      "Learn how to build your professional profile, prepare for certifications, and connect with industry experts and recruiters.",
    topics: [
      "Resume & Portfolio Reviews",
      "LinkedIn & GitHub Optimization",
      "Interview Preparation",
      "AWS Certification Roadmap",
    ],
    color: "from-violet-500 to-pink-500",
  },
];

export default function Tracks() {
  return (
    <section
      id="tracks"
      className="relative overflow-hidden bg-[#050816] py-32"
    >
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

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto max-w-5xl text-center">
          <div className="absolute left-1/2 top-14 h-px w-72 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#A45AFA]/60 to-transparent" />

          <span className="inline-flex rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-5 py-2 text-sm font-semibold tracking-[0.3em] text-[#DDBEFF] backdrop-blur-xl">
            LEARNING TRACKS
          </span>

          <h2 className="mt-8 text-6xl md:text-8xl font-black leading-none tracking-tight text-white">
            Choose Your
            <span className="block bg-gradient-to-r from-[#A45AFA] via-[#F0E1FF] to-[#A45AFA] bg-clip-text text-transparent">
              Cloud Journey
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg md:text-xl leading-relaxed text-slate-400">
            Whether you're beginning your cloud journey, exploring AI-powered
            solutions, or preparing for your next career milestone, there's a
            dedicated track built for you.
          </p>
        </div>

        {/* TRACKS */}
        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {tracks.map((track) => (
            <div
              key={track.title}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-[#A45AFA]/30
              "
            >
              {/* HOVER GLOW */}
              <div
                className={`
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-20
                  bg-gradient-to-br
                  ${track.color}
                `}
              />

              {/* TOP ACCENT */}
              <div
                className={`h-1 w-full bg-gradient-to-r ${track.color}`}
              />

              {/* NUMBER */}
              <div className="absolute right-6 top-5 text-6xl font-black text-white/5">
                {track.level === "Beginner"
                  ? "01"
                  : track.level === "Intermediate"
                  ? "02"
                  : "03"}
              </div>

              <div className="relative z-10 p-8">
                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-white">
                  {track.level}
                </span>

                <h3 className="mt-6 text-3xl font-black text-white">
                  {track.title}
                </h3>

                <p className="mt-5 text-slate-400 leading-relaxed">
                  {track.description}
                </p>

                {/* TOPICS */}
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#A45AFA]">
                    Learning Outcomes
                  </p>

                  <div className="space-y-4">
                    {track.topics.map((topic, idx) => (
                      <div
                        key={idx}
                        className="flex gap-4"
                      >
                        <div className="mt-2 h-2 w-2 rounded-full bg-[#A45AFA]" />

                        <span className="text-slate-300">
                          {topic}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-[#A45AFA]/50 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* ROADMAP STRIP */}
        <div className="mt-24 overflow-hidden rounded-[40px] border border-[#A45AFA]/20 bg-white/[0.03] backdrop-blur-xl">
          <div className="relative">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#A45AFA]/15 blur-[120px]" />

            <div className="relative z-10 flex flex-col items-center justify-between gap-10 p-10 lg:flex-row">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#A45AFA]">
                  Builder Progression
                </p>

                <h3 className="mt-4 text-4xl md:text-5xl font-black text-white">
                  Learn → Build → Get Hired
                </h3>

                <p className="mt-5 max-w-2xl text-slate-400 leading-relaxed">
                  Progress from cloud fundamentals to AI-powered applications
                  and career-ready skills through a carefully curated learning
                  experience designed by AWS community leaders.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-[#A45AFA] via-[#F0E1FF] to-[#A45AFA] bg-clip-text text-7xl md:text-8xl font-black text-transparent">
                  AWS
                </div>

                <p className="mt-2 text-sm uppercase tracking-[0.4em] text-slate-500">
                  COMMUNITY DAY
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-28 grid gap-10 md:grid-cols-3">
          {[
            {
              value: "3",
              label: "Learning Tracks",
            },
            {
              value: "12+",
              label: "Hands-on Sessions",
            },
            {
              value: "100%",
              label: "Community Driven",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-[#A45AFA] to-[#F0E1FF] bg-clip-text text-6xl font-black text-transparent">
                {item.value}
              </div>

              <p className="mt-4 text-sm uppercase tracking-[0.35em] text-slate-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}