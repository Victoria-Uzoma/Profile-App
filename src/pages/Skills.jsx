import SkillOrbit from "../components/SkillOrbit";
import { skills } from "../data/data.js";

function Skills() {
    return (
        <section className="page-section-skills-page">
         <div className="page-header">
            <p className="eyebrow">WHAT I KNOW</p>
            <h1>Skills & <span>Values.</span></h1>
            <p> Technologies I work with and the principles I try to bring into everything I build.</p>
         </div>
         <SkillOrbit skills={skills} />
         <div className="skills-details">
            <div className="skill-detail">
                <p className="eyebrow">01</p>
                <h2>Frontend</h2>
                <p>Building interfaces with HTML, CSS, JavaScript, and React.</p>
            </div>
            <div className="skill-detail">
                <p className="eyebrow">02</p>
                <h2>Backend</h2>
                <p>Work with Node.js, Express, APIs, Databases and Backend Architecture.</p>
            </div>
            <div className="skill-detail">
             <p className="eyebrow">03</p>
             <h2>My Values</h2>
             <p>Learning, Creativity, Problem Solving, Consistency and Building Useful Solutions.</p>
            </div>
         </div>
        </section>
        );
}

export default Skills;