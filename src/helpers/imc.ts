export type Level = {
  titulo: string;
  cor: string;
  icone: 'like' | 'deslike';
  imc: number[],
  yourImc?: number;
}

export const levels: Level[] = [
  {titulo: 'Magreza', cor: '#96A3AB', icone: 'deslike', imc: [0,18.5]},

  {titulo: 'Normal', cor: '#0ead69', icone: 'like', imc: [18.6, 24.9]},

  {titulo: 'Sobrepeso', cor: '#E2B039', icone: 'deslike', imc: [25, 30]},

  {titulo: 'Obesidade', cor: '#C3423F', icone: 'deslike', imc: [30.1, 99]}

];

export const calculateImc = (altura: number, peso: number) =>{

const imc = peso / (altura * altura);

for (let i in levels){
  if (imc >= levels[i].imc[0] && imc <= levels[i].imc[1]){
    let levelCopy = {...levels[i]}
    levelCopy.yourImc = parseFloat(imc.toFixed(2));
    return levelCopy;
  }
}
return null;
}