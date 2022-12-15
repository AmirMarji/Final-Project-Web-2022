require('dotenv').config();
const AIKEY = process.env.AI ?? "";

//my fetch function
const fetchGPT = async (text) => {
    const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${AIKEY}`  //this is the key
        },
        body: JSON.stringify({
            "model": "text-davinci-003",
            "prompt": `who is ${text}?` ,
            "max_tokens": 100,
            "temperature": 0.18
        })      
    });
    const data = await response.json();
    return data.choices[0].text;
}

module.exports = {
    fetchGPT
}


