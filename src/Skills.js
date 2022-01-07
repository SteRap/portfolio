import React from "react";
import SkillsList from "./SkillsList";

function Skills() {
  const [skillType, setSkillType] = React.useState(0);

  const skillName = SkillsList[skillType].map((item) => {
    return <li>{item.name}</li>;
  });

  function onChangeSkills(skill) {
    setSkillType(skill);
  }

  return (
    <section id="skills" className="skills">
      <h2 className="section__title">Skills</h2>
      <button onClick={() => onChangeSkills(0)}>Tech Skills</button>
      <button onClick={() => onChangeSkills(1)}>Soft Skills</button>
      <button onClick={() => onChangeSkills(2)}>Super Powers</button>
      <div>
        <ul>{skillName}</ul>
      </div>
    </section>
  );
}
export default Skills;
