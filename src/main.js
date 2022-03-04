import giveMeAJoke from 'give-me-a-joke';
import axios from 'axios';

giveMeAJoke.getRandomDadJoke((joke)=>{
    console.log("De grap is: " + joke);
})

async function fetchJoke() {
    try {
        const result = await axios.get('https://api.chucknorris.io/jokes/random');
        console.log(result);
    } catch(e) {
        console.error(e);
    }
}

fetchJoke()
