function createSquareElement() {
    let square = document.createElement('div');
    square.classList.add('square');
    return square;
  }
  
  function generateGrid() {
    const gridSizeSelect = document.getElementById('gridSizeSelect');
    const gridSize = parseInt(gridSizeSelect.value);
  
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    grid.className = 'grid-' + gridSize;
    let game= false;
  

    const randomNumbers = [];
    while (randomNumbers.length < 16) {
      const randomNumber = Math.floor(Math.random() * gridSize) + 1;
      if (!randomNumbers.includes(randomNumber)) {
          randomNumbers.push(randomNumber);
          console.log(randomNumbers);
      }
  }
  
    for (let i = 0; i < gridSize; i++) {
        let square = createSquareElement();
        grid.append(square);
        square.innerText = i + 1;
  
        square.addEventListener('click', function myfunction() {
            if (!game) {
            const squareNumber = i + 1;
            if (randomNumbers.includes(squareNumber)) {
                this.style.backgroundColor = 'red';
                alert('game over!');
                game= true;
                const squares = document.getElementsByClassName('square');
                for (let j = 0; j < squares.length; j++) {
                    squares[j].removeEventListener('click', myfunction);
                  }
            } 
             else {
                this.classList.add('clicked');
            }
        }
        })
    }  }
 
  const generateButton = document.getElementById('generateButton');
  generateButton.addEventListener('click', generateGrid);
