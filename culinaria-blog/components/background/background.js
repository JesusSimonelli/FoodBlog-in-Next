import styles from './background.module.css'
import Images from '../../images/background.jpg'
import Image from 'next/image'

export default function Background() {
  return (
    <div className={styles.background}>
      <Image src={Images} alt='comida' width={500} height={300} priority={true} />
      <div className={styles.content}>
        <h1>Eating good everyday</h1>
        <p>This is a blog about health food ad a good life</p>
      </div>
    </div>
  )
}
