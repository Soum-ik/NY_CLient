/* eslint-disable react/prop-types */
import styles from "../../style/style";

const DeshBorad = ({ children }) => {
  return (
    <div className={`${styles.flexCenter} ${styles.paddingX}`}>
      <div className={`xl:max-w-[600px] max-w-[850px] mb-10 w-full`}>
        {children}
      </div>
    </div>
  );
};
export default DeshBorad;
