const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    let arr = [];
    let $linea = '';
    for (let i = 1; i <= 50; i++) {
        if(i %2 ==0){
            arr[i] = i + ' Soy Par!'
            
            
        }else{
            arr[i] = i + ' Soy Impar!'
        }
        $linea += `<p>${arr[i]}</p>`  ;
        
    }
 
    res.send($linea);

    




  
});

app.listen(3000, () => console.log('Listening on port 3000!'));