import { useState } from "react";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiCplusplus,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";



export default function SkillsValue() {
  const [isOrbiting, setIsOrbiting] = useState(false);

  const skills = [
  { name: "React", icon: FaReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "C++", icon: SiCplusplus },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Postman", icon: SiPostman },
];
  const values = [
    {
      number: "01",
      title: "Problem Solving",
      description:
        "I focus on understanding the problem first, then breaking it down into practical and maintainable solutions.",
    },
    {
      number: "02",
      title: "Continuous Learning",
      description:
        "I actively challenge myself to learn new technologies and strengthen the skills I already have.",
    },
    {
      number: "03",
      title: "Attention to Detail",
      description:
        "I care about the details that affect both the quality of the code and the experience of the person using the product.",
    },
    {
      number: "04",
      title: "Adaptability",
      description:
        "I am comfortable learning unfamiliar tools and adjusting my approach when a project requires something new.",
    },
    {
      number: "05",
      title: "Clean & Maintainable Work",
      description:
        "I aim to write organized and understandable code that can be improved as a project grows.",
    },
    {
      number: "06",
      title: "Creativity",
      description:
        "My design background allows me to approach technical problems from both a logical and visual perspective.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#08142B] text-[#F8FAFC] px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* ================= HEADER ================= */}

        <div className="max-w-3xl mb-16">
          <p className="text-[#14B8A6] uppercase tracking-[0.25em] font-semibold text-sm mb-4">
            Skills & Values
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            The skills I use to
            <span className="text-[#3B82F6]"> build and create.</span>
          </h1>

          <p className="text-[#94A3B8] text-lg leading-8">
            My toolkit combines frontend development, backend engineering,
            databases, programming, and visual design. I continuously expand
            my skills by taking on new technical challenges.
          </p>
        </div>


        {/* ================= SKILLS ================= */}

        <div className="mb-24">

          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              My Technical Toolkit
            </h2>

            <p className="text-[#94A3B8] mt-3">
              Hover over the skills to activate the orbit.
            </p>
          </div>


          {/* ================= COMPACT ORBIT ================= */}

          <div
            className="relative mx-auto w-[330px] h-[330px] sm:w-[430px] sm:h-[430px] md:w-[500px] md:h-[500px] flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setIsOrbiting(true)}
            onMouseLeave={() => setIsOrbiting(false)}
            onClick={() => setIsOrbiting((prev) => !prev)}
          >

            {/* Soft background glow */}

            <div
              className={`absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-[#3B82F6]/10 blur-3xl transition-all duration-700 ${
                isOrbiting ? "scale-150 opacity-100" : "scale-100 opacity-60"
              }`}
            />


            {/* ================= CENTER ================= */}

            <div className="relative z-30 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-[#0F1F38] border-2 border-[#3B82F6] flex flex-col items-center justify-center text-center shadow-2xl">

              <span className="text-[#14B8A6] text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-1">
                My
              </span>

              <span className="text-lg sm:text-xl md:text-2xl font-bold">
                Skills
              </span>

            </div>


            {/* ================= SKILL ORBIT ================= */}

            <div
              className={`absolute inset-0 ${
                isOrbiting ? "animate-orbit" : ""
              }`}
            >

              {skills.map((skill, index) => {

                const angle = (360 / skills.length) * index;
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `rotate(${angle}deg) translateY(-105px) rotate(-${angle}deg)`,
                    }}
                  >

                    {/* Skill icon */}

                    <div
                      className={`group relative -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center transition-all duration-700 ${
                        isOrbiting
                          ? "scale-100 sm:scale-105"
                          : "scale-90"
                      }`}
                    >

                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-[#0F1F38] border border-[#1E3354] flex items-center justify-center shadow-lg transition-all duration-300 group-hover:border-[#14B8A6] group-hover:scale-110">

                        <Icon className="text-2xl sm:text-3xl md:text-4xl text-[#CBD5E1] group-hover:text-[#14B8A6] transition-colors duration-300" />

                      </div>


                      {/* Skill name */}

                      <span className="absolute top-full mt-2 whitespace-nowrap text-[9px] sm:text-[10px] md:text-xs text-[#94A3B8] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {skill.name}
                      </span>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>


        {/* ================= VALUES ================= */}

        <div>

          <div className="max-w-3xl mb-10">

            <p className="text-[#3B82F6] uppercase tracking-[0.25em] font-semibold text-sm mb-4">
              How I Work
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              The values behind my work.
            </h2>

            <p className="text-[#94A3B8] text-lg leading-8">
              Technology changes quickly, so I believe the way I approach
              problems and learning is just as important as the tools I use.
            </p>

          </div>


          {/* Values Grid */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {values.map((value) => (

              <div
                key={value.number}
                className="bg-[#0F1F38] border border-[#1E3354] rounded-2xl p-7 hover:border-[#14B8A6] transition-all duration-300"
              >

                <span className="text-[#14B8A6] font-semibold text-sm">
                  {value.number}
                </span>

                <h3 className="text-xl font-bold mt-4 mb-3">
                  {value.title}
                </h3>

                <p className="text-[#94A3B8] leading-7">
                  {value.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* ================= ORBIT ANIMATION ================= */}

      <style>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        .animate-orbit {
          animation: orbit 18s linear infinite;
        }
      `}</style>

    </section>
  );
}