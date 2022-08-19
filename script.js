const OddApostaOriginal = document.getElementById('OddApostaOriginal')
const ValorOriginal = document.getElementById('ValorDaApostaOriginal')
const OddCobertura = document.getElementById('OddCobertura')
const ValorDaCobertura = document.getElementById('ValorDaCobertura')
const RetornoCobertura = document.getElementById('RetornoCobertura')
const MontanteTotal = document.getElementById('MontanteTotal')
const Pagamento = document.getElementById('Pagamento')
const LucroPerca = document.getElementById('lucro-unidade')
const select = document.getElementById('select')
const tabela = document.getElementById('tabela1')
let montante = 0


const ApostaOriginal = () =>{
    const RetornoOriginal = document.getElementById('RetornoOriginal')
    let retorno1 = OddApostaOriginal.value * ValorOriginal.value
    
    RetornoOriginal.innerHTML = new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }
).format(retorno1);


Pagamento.innerHTML = new Intl.NumberFormat('pt-BR',
{ style: 'currency', currency: 'BRL' }
).format(retorno1);

}

const Cobertura = () =>{

    let valueCobertura = (OddApostaOriginal.value * ValorOriginal.value) / OddCobertura.value
    let retorno2 = OddCobertura.value * valueCobertura

    ValorDaCobertura.innerHTML = new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }
).format(valueCobertura);

RetornoCobertura.innerHTML = new Intl.NumberFormat('pt-BR',
{ style: 'currency', currency: 'BRL' }
).format(retorno2);

montante = ValorOriginal.value*1 + valueCobertura 

MontanteTotal.innerHTML = new Intl.NumberFormat('pt-BR',
{ style: 'currency', currency: 'BRL' }
).format(montante);

let lucro = retorno2 - montante

LucroPerca.innerHTML = new Intl.NumberFormat('pt-BR',
{ style: 'currency', currency: 'BRL' }
).format(lucro);

}

select.addEventListener('change',()=>{    
    if(select.value === 'Trilateral'){

        tabela.insertRow(3).innerHTML = ` <tr>
        <th>Cobertura Trilateral</th>
        <th><input id="OddCoberturaTrilateral" class="input" type="number" placeholder="Inserir a Probabilidade"></th>
        <th id="ValorDaCoberturaTrilateral" class="caixa-de-numero">-</th>
        <th id="RetornoCoberturaTrilateral" class="caixa-de-numero">-</th>
    </tr>`
    const OddCoberturaTrilateral = document.getElementById('OddCoberturaTrilateral')
    const ValorDaCoberturaTrilateral = document.getElementById('ValorDaCoberturaTrilateral')
    const RetornoCoberturaTrilateral = document.getElementById('RetornoCoberturaTrilateral')

    OddCoberturaTrilateral.addEventListener('keyup',coberturaTrilateral)
    
}

    else{
        tabela.deleteRow(3) 
    }
    
})
    
    
    
    const coberturaTrilateral = () =>{
        let ValorCoberturaTrilateral = (OddApostaOriginal.value * ValorOriginal.value) / OddCoberturaTrilateral.value
        let retornoTrilateral = (OddCoberturaTrilateral.value* ValorCoberturaTrilateral)

       ValorDaCoberturaTrilateral.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(ValorCoberturaTrilateral);
    
    RetornoCoberturaTrilateral.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(retornoTrilateral);

   let montanteTri = (montante + ValorCoberturaTrilateral)

    MontanteTotal.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(montanteTri);
    }
ValorOriginal.addEventListener('keyup',ApostaOriginal)
ValorOriginal.addEventListener('keyup',Cobertura)
OddApostaOriginal.addEventListener('keyup', ApostaOriginal)
OddApostaOriginal.addEventListener('keyup', Cobertura)
OddCobertura.addEventListener('keyup',Cobertura)

