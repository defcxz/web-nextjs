import styles from '../styles/page.module.css'
import { BsArrowRightShort } from 'react-icons/bs'

export function form(){
   return(
      <form action="#" method="post" className={styles.formulario}>
         <input className={styles.input} type="text" id="msg" name="msg" placeholder='Te gustaría decir algo?'/>
         <button className={styles.submit} type="submit"><BsArrowRightShort/></button>
      </form>
   )
}