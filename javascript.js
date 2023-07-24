function hover(event){
    if(event.target.style.backgroundColor = 'rgb(255, 255, 255)'){
        console.log(typeof event.target.style.backgroundColor);
        event.target.style.backgroundColor = 'rgb(0, 0, 0)'//'rgb('+Math.random()*256+', '+Math.random()*256+', '+Math.random()*256+')';
    }
    else if (event.target.style.backgroundColor == 'rgb(0, 0, 0'){
        console.log(event.target.style.backgroundColor);
        event.target.style.backgroundColor = 'rgb(255, 255, 255)';
    }
}

const textBox = document.getElementById('noOfSquares');
const enterButton = document.getElementById('enterButton');
const outerBox = document.getElementById('outerBox');

//gridUnit.setAttribute('id', 'gridUnit');

outerBox.style.display = 'flex';
outerBox.style.marginTop = '3%';
outerBox.style.marginLeft = '3%';

enterButton.addEventListener('click', ()=>{
    x = parseInt(textBox.value);
    
    outerBox.innerHTML = '';

    for (i = 0; i<x; i++){
        let row = document.createElement('div');
        outerBox.appendChild(row);
        for (j = 0; j<x; j++){
            const gridUnit = document.createElement('div');
            gridUnit.className = 'gridUnit'
            gridUnit.style.width = 960/x+'px';
            gridUnit.style.border = '3px solid black';
            gridUnit.style.height = 960/x+'px';
            gridUnit.onclick = hover;
    
            row.appendChild(gridUnit);
        }
    }
    let buttonDiv2 = document.createElement('div');
    let resetButton = document.createElement('button');
    resetButton.textContent = 'Reset Colours';
    resetButton.style.height = '100px';
    resetButton.style.width = '150px';
    resetButton.style.marginTop = '480px';
    resetButton.style.marginLeft = '50%';
    outerBox.appendChild(buttonDiv2);
    buttonDiv2.appendChild(resetButton);

    resetButton.addEventListener('click', ()=>{
        for (i = 0; i<document.getElementsByClassName('gridUnit').length; i++){
            document.getElementsByClassName('gridUnit')[i].style.backgroundColor = 'rgb(255, 255, 255)';
        }
    })
})