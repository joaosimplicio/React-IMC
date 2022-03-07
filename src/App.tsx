import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import deslike from './assets/down.png';
import like from './assets/up.png';
import arrowImage from './assets/leftarrow.png';
import {levels, calculateImc, Level} from './helpers/imc';
import {GridItem} from './components/GridItem';
import { useState } from 'react';

function App() {
  
  const [altura, setAltura] = useState<number>(0)
  const [peso, setPeso] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null)

  const calculate = ()=>{
    if (altura && peso) {
        setToShow(calculateImc(altura, peso))
    } else {
      alert("Preencha todos os campos.")
    }
  }

  const handleBackButton = ()=>{
    setToShow(null);
    setAltura(0);
    setPeso(0);
  }

  return (
    <div className={styles.main}>
        <header>
          <div className={styles.headerContainer}>
            <img src={poweredImage} alt="" width={150}/>
          </div>
        </header>

  <div className={styles.container}>

    <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
    <p>IMC é a sigla para índice de Massa Corpórea, parâmetro adotado pela Organização Mundial da Saúde para calcular o peso idieal de cada pessoa.</p>

    <input className={styles.altura} type="number" placeholder='Digite a sua altura. Ex: 1.5 (em metros)'value={altura > 0 ? altura : ''} 
    onChange={e => setAltura(parseFloat(e.target.value))}
    disabled={toShow ? true: false}/>

    <input className={styles.peso} type="number" placeholder='Digite seu peso. Ex: 75.3 (em kg)'
    value={peso > 0 ? peso : ''} 
    onChange={e => setPeso(parseFloat(e.target.value))}
    disabled={toShow ? true: false}/>

    <button className={styles.btn} onClick={calculate} disabled={toShow ? true: false}>Calcular</button>
    </div>


    <div className={styles.rightSide}>
      {!toShow &&
       <div className={styles.grid}>
          {levels.map((item, key)=>(
            <GridItem  key={key} item={item}/>
          ))}
       </div>
      }{toShow && 
        <div className={styles.rightBig}>
          <div className={styles.rightArrow} onClick={handleBackButton}>
            <img src={arrowImage} alt="back" width={25} />
          </div>
          <GridItem item={toShow}/>
        </div>
      }
    </div>
        </div>
    </div>
  );
}

export default App;
