import styles, { layout } from "../../style/style";
import CustomData from "../CustomData";
import ContactData from "./ContactData";


const Contact = () => {
  return (
    <div className={`${styles.flexCenter} ${styles.marginX} ${styles.marginY}`}>
      <div className={`${styles.boxWidth}  `}>
        <section className={`${layout.section} ${styles.paddingX}`}>
            {/* left side text option*/}
            <CustomData heading={"Request for service"} tittle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus culpa veniam vero dignissimos perferendis illo dolor? Atque aliquid corporis ex autem sapiente quibusdam rerum maiores. Laboriosam perferendis id molestiae ex."}/>

            {/* right side */}
            <ContactData/>
        </section>
      </div>
    </div>
  );
};
export default Contact;
 