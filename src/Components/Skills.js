import React from "react";
import SkillsList from "./SkillsList";
import ProgressBar from "./ProgressBar";
import Loading from "./Loading";

function Skills() {
  const [skillType, setSkillType] = React.useState(0);

  const skillName = SkillsList[skillType].map((item) => {
    return (
      <ul key={item.name}>
        <li>{item.name}</li>
        <ProgressBar className="skills_progress" completed={item.lev} />
      </ul>
    );
  });

  function onChangeSkills(skill) {
    setSkillType(skill);
  }

  return (
    <section id="skills" className="skills_section">
      <h2
        className="section__title"
        data-aos="zoom-in-down"
        data-aos-offset="300"
      >
        Skills
      </h2>
      <div className="skills_btns" data-aos="zoom-in" data-aos-offset="300">
        <button
          className={
            skillType === 0
              ? "btn skills_btn skills_btn_focus"
              : "btn skills_btn"
          }
          onClick={() => onChangeSkills(0)}
        >
          Tech Skills
        </button>
        <button
          className={
            skillType === 1
              ? "btn skills_btn skills_btn_focus"
              : "btn skills_btn"
          }
          onClick={() => onChangeSkills(1)}
        >
          Software Skills
        </button>
        <button
          className={
            skillType === 2
              ? "btn skills_btn skills_btn_focus"
              : "btn skills_btn"
          }
          onClick={() => onChangeSkills(2)}
        >
          Soft Skills
        </button>
        <button
          className={
            skillType === 3
              ? "btn skills_btn skills_btn_focus"
              : "btn skills_btn"
          }
          onClick={() => onChangeSkills(3)}
        >
          Super Powers
        </button>
      </div>
      {skillType === 3 ? (
        <div data-aos="zoom-in-up" data-aos-offset="300">
          <div className="skills_list">
            {skillName}
            <ul>
              <li>Teleport</li>
              <Loading />
            </ul>
          </div>
        </div>
      ) : (
        <div
          className="skills_list"
          data-aos="zoom-in-up"
          data-aos-offset="300"
        >
          {skillName}
        </div>
      )}
    </section>
  );
}
export default Skills;
