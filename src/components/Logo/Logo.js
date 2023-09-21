import styles from './Logo.module.css';
import YourBizHere from '../../assets/YourBizHere.gif'

export default function Logo() {
return (
  <div className={styles.Logo}>
   <img src={YourBizHere} alt="logo"/>
  </div>
);
}