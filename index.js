const axios = require("axios");
const appid = "be8b5a409db5a652138d22f3a50368f9";
const q = "Sao Paulo";
const units = "metric";
const lang = "pt_BR";
const cnt = "10";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${units}&appid=${appid}&lang=${lang}&cnt=${cnt}`;
console.log(url);

// faz a requisição
axios.get(url)
    .then(res => {
        //mostra o resultado e devolve somente a parte de interesse
        console.log("1 Promise ##########################################################################");
        console.log(res);
        return res.data;
    })
    .then(res => {
        //mostra o total e devolve o resultado
        console.log("2 Promise ##########################################################################");
        console.log(res.cnt);
        return res;
    })
    .then(res => {
        console.log("3 Promise ##########################################################################");
        console.log(`País: ${res.city.country}`);
        console.log(`Latitude: ${res.city.coord.lat} / Longitude: ${res.city.coord.lon}`);
        console.log(`População: ${res.city.population}`);
        return res;
    })
    .then(res => {
        //devolve somente a lista de previsões
        console.log("4 Promise ##########################################################################");
        console.log("aqui", res);
        return res["list"];
    })
    .then(res => {
        //para cada resultado, mostra algumas informações
        console.log("5 Promise ##########################################################################");
        for (let previsao of res) {
            console.log(`
            ${new Date(+previsao.dt * 1000).toLocaleDateString()},
            ${new Date(+previsao.dt * 1000).toLocaleTimeString()},
            ${'Temperatura: ' + previsao.main.temp}\u00B0C,
            ${'Min: ' + previsao.main.temp_min}\u00B0C,
            ${'Max: ' + previsao.main.temp_max}\u00B0C,
            ${'Percepção: ' + previsao.main.feels_like}\u00B0C,
            ${'Hum: ' + previsao.main.humidity}%,
            ${previsao.weather[0].description}
            `);
        }
        console.log()
        return res;
    })
    .then(res => {
        //verifica quantas previsões têm percepção humana de temperatura acima de 30 graus
        console.log("6 Promise ##########################################################################");
        const lista = res.filter(r => r.main.feels_like >= 30);
        console.log(`${lista.length} previsões têm percepção humana de temperatura acima de 30 graus`);
    });

