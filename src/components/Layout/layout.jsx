/* eslint-disable react/prop-types */
import styles from "../../style/style";

const Layout = ({ children }) => {
  return (
    <div className={`${styles.flexCenter} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>{children}</div>
    </div>
  );
};
export default Layout;
