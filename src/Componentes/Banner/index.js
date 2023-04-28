import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'


export default function Banner() {
  return (
    <div className={styles.banner} >
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
                Blog Dev!
            </h1>

            <p className={styles.paragrafo}>
            Olá!! Sou Henrique Velardo, desenvolvedor e eterno estudante de tecnologias voltadas para front-end.
            </p>
        </div>

        <div className={styles.imagens}>
            <img 
                className={styles.circuloColorido}
                src={circuloColorido}
                aria-hidden={true}
                alt='Circulos coloridos'
            />

            <img 
                className={styles.minhaFoto}
                src='https://github.com/henriquevelardo.png'
                alt='Foto do Henrique Velardo'
            />
            
        </div>
    </div>
  )
}
