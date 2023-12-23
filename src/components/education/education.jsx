
import educatiom from "../../data/education.json"
import { getImageUrl } from "../../utils";
import styles from "./education.module.css";
export const Education=()=>{

    return (
        <section id="education" className={styles.container}>
          <h2 className={styles.title}>Education</h2>
          <div className={styles.content}>

          <ul className={styles.education}>{
                    educatiom.map((eduItem,id)=>{
                        return <li key={id}className={styles.eduItem}>
                            <img src={getImageUrl(eduItem.imageSrc)} alt={`${educatiom.Institute} logo`}/>

                            <div className={styles.eduItemDetails}>
                                <h3>{`${eduItem.Degree},${eduItem.Institute}`}</h3>
                                <p>{`${eduItem.startDate}-${eduItem.endDate}`}</p>
                                <ul>{
                                     eduItem.description.map((edu,id)=>{
                                        return <li key={id}>
                                             {edu}
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
};