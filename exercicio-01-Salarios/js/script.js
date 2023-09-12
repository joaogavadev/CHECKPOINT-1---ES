


// declarando os salarios e colocando a condicao <= 2000


function calcularSalarioAtualizado(salario) {
    if (salario <= 2000) {
        return salario * 1.15;
    } else {
        return salario * 1.10;
    }
}

const salariosOriginais = [1500, 3000, 1200, 900, 3000, 5000, 12000, 2000, 1000, 1600];

const salariosAtualizados = salariosOriginais.map(calcularSalarioAtualizado);

console.log(salariosAtualizados);


// filtrando salarios maiores que 2500 com filter

const salarios_Filtrados = salariosAtualizados.filter(salario => salario > 2500);


// console.log(salarios_Filtrados)

// soma dos salarios com reduce

const soma_Salarios = salarios_Filtrados.reduce((acumulador, salario) => acumulador + salario, 0);

// console.log()