 let minhaConta = {
     receitas: [20,70,46,63,24],
     despesas: [54,82,35,23,131]
 }

function calcularSaldo(conta) {
    let minhaReceita = 0
    let minhaDespesa = 0
    for(let receita of conta.receitas) {
        minhaReceita += receita
    }
    for(let despesa of conta.despesas) {
        minhaDespesa += despesa
    } 
    let meuSaldo = minhaReceita - minhaDespesa
    if (meuSaldo <= 0 ) {
        return `Saldo negativo: R$${meuSaldo}`
    } 
    return `Saldo positivo: R$${meuSaldo}`
} 
function calcularSaldo2(conta){
    const minhasDespesas = conta.despesas.reduce((agg, curr) => agg+curr);
    const minhasReceitas = conta.receitas.reduce((agg, curr) => agg + curr);
    return (minhasReceitas - minhasDespesas) > 0 ?
      `saldo positivo: ${minhasReceitas - minhasDespesas}` :
    `saldo negativo: ${minhasReceitas - minhasDespesas}`
  } 
 console.log(calcularSaldo2(minhaConta));

