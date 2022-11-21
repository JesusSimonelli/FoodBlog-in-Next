import Image from 'next/image'
import styles from './platteContent.module.css'

export default function PlatteContent(props) {
  const {title, resume, image} = props
  return (
    <section className={styles.body}>
    <div className={styles.content}>
      <h1>{title}</h1>
      <Image src={'/' + image} alt={title} width={400} height={400} priority={true} />
      <p>{resume}</p>
      </div>
    </section>
  )
}
