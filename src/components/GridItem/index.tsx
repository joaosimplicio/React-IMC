import { Level } from "../../helpers/imc";
import styles from './GridItem.module.css';
import deslike from '../../assets/down.png';
import like from '../../assets/up.png';

type Props = {
  item: Level;
}

export const GridItem = ({item}: Props)=>{
  return (
    <div className={styles.main} style={{backgroundColor: item.cor}}>
      <div className={styles.gridIcone}>
       <img src={item.icone === 'like' ? like:deslike} alt="" width={30} />
      </div>

      <div className={styles.gridTitulo}>{item.titulo}</div>
      <div className={styles.gridInfo}>

        {item.yourImc && 
        <div className={styles.yourImc}>Seu IMC é de {item.yourImc} kg/m²</div>}
        
        <>
        IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
        </>
        </div>
      
      
    </div>
  )
}