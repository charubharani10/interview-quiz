import Nav from "./Nav";
import Meta from "./Meta";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
