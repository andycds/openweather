/*
async function hello(nome) {
    return "Oi, " + nome;
}

const boasVindas = hello("João");
console.log(boasVindas);
boasVindas.then(girafa => console.log(girafa));
*/

async function fatorial(n) {
    if (n < 0) {
        return Promise.reject("Valor não pode ser negativo");
    }
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res *= i; // res = res * i
    }
    return Promise.resolve(res);
}
/*
function chamadaComThenCatch() {
    fatorial(5)
        .then(r => console.log(r))
        .catch(r => console.log("Deu erro! " + r));
    fatorial(-1)
        .then(r => console.log(r))
        .catch(r => console.log("Deu erro! " + r));
}
chamadaComThenCatch();
*/
// para usar await tem que ser async
async function chamadaComAwait() {
    //note que não há paralelismo implícito
    //somente haverá paralelistmo se a função chamada ulizar explicitamente
    const f1 = await fatorial(5);
    console.log(f1);
    const f2 = await fatorial(10);
    console.log(f2);
}
chamadaComAwait();
