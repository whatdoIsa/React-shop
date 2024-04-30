import styles from '../pages/style/ErrorPage.module.css'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useRecoilValue} from 'recoil';
import {darkModeState} from "../atoms/darkMode";

function ErrorPage() {
  const isDarkMode = useRecoilValue(darkModeState);
  const darkClass = isDarkMode ? styles.App_dark : styles.App_light;

  return (
   <>
      <div className={darkClass + " " + styles.align_center}>
        <h1>404</h1>
        <h2>페이지를 찾을 수 없습니다</h2>
        <Link to='/'><Button variant="primary" className='py-3 px-md-5 mt-3'>메인으로</Button></Link>
      </div>
   </>
  )
}

export default ErrorPage