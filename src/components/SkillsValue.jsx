export default function SkillsValue() {
  const skills = [
    { name: "React", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "Graphic Design", level: 75 },
  ];

  return (
    <div className="min-h-[70vh] flex flex-col items-center px-6 py-10">

      <h2 className="text-white text-4xl font-bold mb-10">
        My Skills
      </h2>

      <div className="w-full max-w-2xl space-y-6">

        {skills.map((skill, index) => (
          <div key={index}>

            {/* Skill name */}
            <div className="flex justify-between mb-2">
              <span className="text-white font-semibold">
                {skill.name}
              </span>
              <span className="text-gray-300">
                {skill.level}%
              </span>
            </div>

            {/* Progress bar background */}
            <div className="w-full bg-gray-700 rounded-full h-3">

              {/* Progress bar fill */}
              <div
                className="bg-blue-500 h-3 rounded-full transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              ></div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}