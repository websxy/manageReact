import styles from './index.css';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

function BasicLayout(props) {
  console.log(props)
  return (
    <div >
      {/* <h1 className={styles.title}>Yay! Welcome to umi!</h1> */}
      { props.children }
    </div>
  );
}

export default BasicLayout;
