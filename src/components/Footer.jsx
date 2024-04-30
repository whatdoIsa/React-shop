import styles from '../components/style/Footer.module.css'
import {BsInstagram,BsFacebook,BsGithub} from 'react-icons/bs'
import {BiCopyright} from 'react-icons/bi'
import {useRecoilValue} from 'recoil';
import {darkModeState} from '../atoms/darkMode';

function Footer() {
  const isDarkMode = useRecoilValue(darkModeState)

  return (
      <>
        <footer className={isDarkMode ? styles.footer : styles.footer_light}>
            <p>제로베이스</p>
            <ul className={styles.creditcard}>
                <li><img src='../src/assets/img/svg/visa.svg' alt="visa"/></li>
                <li><img src='../src/assets/img/svg/master.svg' alt="master"/></li>
                <li><img src='../src/assets/img/svg/paypal.svg' alt="paypal"/></li>
                <li><img src='../src/assets/img/svg/dinersClub.svg' alt="dinersClub"/></li>
                <li><img src='../src/assets/img/svg/americanExpress.svg' alt="americanExpress"/></li>
                <li><img src='../src/assets/img/svg/discover.svg' alt="discover"/></li>
            </ul>
            <div className={styles.sns}>
                <a href='https://www.facebook.com'><BsFacebook size='36'/></a>
                <a href='https://www.instagram.com'><BsInstagram size='36'/></a>
                <a href='https://www.github.com'><BsGithub size='36'/></a>
            </div>
            <p>CopyRight <BiCopyright/> 2024 Zero Base</p>
        </footer>
      </>
  )
}

export default Footer