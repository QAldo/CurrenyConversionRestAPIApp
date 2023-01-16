const api_key = "349aa234d4-97a9d83744-rmrm8u";

function getOptions(){
    const url = `https://api.fastforex.io/fetch-all?api_key=${api_key}`;
    fetch(url)
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data);
        Object.entries(data.results).forEach(([fromCur, fromCurVal]) => {
            let fromCurOption = document.createElement("option")
            let toCurOption = document.createElement("option")
            fromCurOption.text = fromCur
            toCurOption.text =fromCur
            document.getElementById("from_sym").options.add(fromCurOption)
            document.getElementById("to_sym").options.add(toCurOption)
        });
    });
}

function currencyConvert(){
    const fromCur = document.getElementById("from_sym").value;
    const toCur = document.getElementById("to_sym").value;
    const amount = document.getElementById("amount").value
    const url = `https://api.fastforex.io/convert?api_key=${api_key}&amount=${amount}&from=${fromCur}&to=${toCur}`
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        const result = `${amount} ${fromCur} is equal to ${data.result[toCur]} ${toCur}`
        document.getElementById("answer").value = result;
    })
}