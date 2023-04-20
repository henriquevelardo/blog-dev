import styles from "./Rodape.module.css"
import { ReactComponent as MarcaRegistrada } from "assets/assets/marca_registrada.svg";

export default function Rodape() {
  return (
    <footer className={styles.rodape} >
        <MarcaRegistrada />

        Desenvolvido acadêmicamente por Henrique.
    </footer>
  )
}
