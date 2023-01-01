import styles from './styles/page.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        
        <div className={styles.grid}>

          <img className={styles.medark} src="/IMGs/medark.svg" alt="Mario G." width="60%"/>

          <div className={styles.side}>
            <div className={styles.mobileblur}>
              <h1 className={styles.title}>
                Mario G.
              </h1>
              <p className={styles.description}>
                20 años. Programador y Aspirante a Ingeniero en Informática.
              </p>
                <hr className={styles.separador}/>

              <div className={styles.icon}>

                  <a href="https://www.instagram.com/defcxz"><img src="IMGs/instagram.svg" alt="instagram-logo"/></a>
                  <a href="mailto:mralejandrogu@gmail.com"><img src="IMGs/mail.svg" alt="mail-logo"/></a>
                  <a href="https://www.github.com/defcxz"><img src="IMGs/github.svg" alt="github-logo"/></a>
                  <a href="https://open.spotify.com/user/lameavollaiiita?si=cfad77966c8d4214"><img src="IMGs/spotify.svg" alt="spotify-logo"/></a>
              </div>
            </div>
          </div>

          {/* <a href="https://beta.nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js 13</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Explore the Next.js 13 playground.</p>
          </a>

          <a
            href="https://vercel.com/templates/next.js/app-directory?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>Deploy your Next.js site to a public URL with Vercel.</p>
          </a> */}


        </div>
      </main>
    </div>
  )
}
