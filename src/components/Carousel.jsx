import {Carousel} from 'react-bootstrap'
import styles from '../components/style/Carousel.module.css'
import { Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import {useRecoilValue} from 'recoil';
import {darkModeState} from "../atoms/darkMode";

function CarouselComponent() {
    const isDarkMode = useRecoilValue(darkModeState);
    const darkClass = isDarkMode ? styles.App_dark : styles.App_light;

    return (
        <>
            <div className={darkClass + " " + styles.Carousel}>
                <Carousel interval ={5000}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../src/assets/img/carousel/img_shop_fashion.jpeg"
                            alt='introduction'
                        />
                        <div className={styles.caption}>
                            <h3>물빠진 청바지!</h3>
                            <p>이제 막 도착한 패션 청바지를 둘러보세요</p>
                            <Link to='/fashion'>
                                <Button className={styles.btnShortcut} variant='dark' size='1g'>바로가기<BsArrowRight/></Button>
                            </Link>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../src/assets/img/carousel/img_shop_digital.jpeg"
                            alt="Second slide"
                        />
                        <div className={styles.caption}>
                        <h3>신속한 업무처리!</h3>
                        <p>다양한 디지털 상품을 둘러보세요</p>
                        <Link to='/digital'>
                            <Button className={styles.btnShortcut} variant='dark' size='lg'>바로가기 <BsArrowRight/></Button>
                        </Link>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="../src/assets/img/carousel/img_shop_grocery.jpeg"
                        alt="Third slide"
                        />
                        <div className={styles.caption}>
                        <h3>신선한 식품!</h3>
                        <p>농장 직배송으로 더욱 신선한 식료품을 만나보세요</p>
                        <Link to='/grocery'>
                            <Button className={styles.btnShortcut} variant='dark' size='lg'>바로가기 <BsArrowRight/></Button>
                        </Link>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default CarouselComponent