import Image from 'next/image'
import Link from 'next/link'
import styles from './sportItems.module.css'

export default function SportItems(props) {
  const {id, title, resume} = props
  return (
    <li className={styles.item}>
      <h1>{title}</h1>
       <p>{resume}</p>
       <div className={styles.link}>
        <Link href='#'>Read more</Link>
       </div>
    </li>
  )
}
