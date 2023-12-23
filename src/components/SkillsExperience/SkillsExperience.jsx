
import skills from "../../data/skills.json"
import experience from "../../data/experience.json"
import { getImageUrl } from "../../utils";
import styles from "./SkillsExperience.module.css";

export const SkillsExperience = () => {
    
    return (
        <section id="skillsExperience" className={styles.container}>
            <h2 className={styles.title}>Skills & Experience</h2>

            <div className={styles.content}>
                <div className={styles.skills}>{
                    skills.map((skill,id)=>{
                        return <div key={id} className={styles.skill}>
                             <div className={styles.skillImgContainer}> <img src={getImageUrl(skill.imageSrc)} alt={skill.title} /></div>
                             <p>{skill.title}</p>
                            </div>
                    })
                
                }</div>

                <ul className={styles.experience}>{
                    experience.map((expItem,id)=>{
                        return <li key={id}className={styles.expItem}>
                            <img src={getImageUrl(expItem.imageSrc)} alt={`${experience.organisation} logo`}/>

                            <div className={styles.expItemDetails}>
                                <h3>{`${expItem.role},${expItem.organisation}`}</h3>
                                <p>{`${expItem.startDate}-${expItem.endDate}`}</p>
                                <ul>{
                                     expItem.experiences.map((exp,id)=>{
                                        return <li key={id}>
                                             {exp}
                                        </li>
                                     })
                                    }</ul>
                            </div>
                        </li>
                    })
                }</ul>
            </div>

        </section>
    );
}