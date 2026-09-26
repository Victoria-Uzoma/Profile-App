import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaPaintBrush,
} from "react-icons/fa";

const iconMap = {
    html: FaHtml5,
    css: FaCss3Alt,
    javascript: FaJs,
    typescript: FaJs,
    react: FaReact,
    node: FaNodeJs,
    express: FaNodeJs,
    sql: FaDatabase,
    photoshop: FaPaintBrush,
};

function SkillOrbit({ skills }) {
    return (
        <div className="skill-orbit">
            <div className="orbit-container">
                <span>MY</span>
                <span>SKILLS</span>
            </div>

            <div className="orbit-ring">
                {skills.map((skill, index) => {
                    const Icon = iconMap[skill.icon];

                    return (
                        <div
                            className="skill-orbit-item"
                            key={skill.name}
                            style={{
                                "--index": index,
                                "--total": skills.length,
                            }}
                            title={skill.name}
                        >
                            <Icon size={30} />
                            <span>{skill.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SkillOrbit;