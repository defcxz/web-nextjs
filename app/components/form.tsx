'use client'

import { useState } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import styles from '../styles/form.module.css'

export function Form(){

   const [msg, setMsg] = useState('')
   const [opacity, setOpacity] = useState(1)

   const handleSubmit = async (event) => {
      
      setOpacity(.5)
      setMsg('Enviando mensaje...')

      event.preventDefault();

      try {
         const response = await fetch('/api/Inquiry', {
         method: 'POST',
         body: JSON.stringify({ msg }),
         headers: {
            'Content-Type': 'application/json'
         }
         });

         const data = await response.json();
         console.log(data);
         setOpacity(1)
         setMsg('Mensaje enviado! :D')
         
      } catch (error) {
         console.error(error);
      }
      
      
   }
   
   
   return(
      <form onSubmit={ handleSubmit } method="POST" className={styles.formulario}>
         <input className={styles.input} required minLength={10} onChange={ (e) => setMsg(e.target.value) } value={ msg } type="text" id="msg" name="msg" placeholder='Te gustaría decir algo?'/>
         <button style={{ opacity, transition: 'opacity .3s ease-in-out' }} className={styles.submit} type="submit"><BsArrowRightShort/></button>
      </form>
   )
}