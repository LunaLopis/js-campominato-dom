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
  
    // inserisco array 16 random numeri dentro la funzione genera per generare l'array contestualmente alla griglia selezionata.
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
            const squareNumber = i + 1;
            if (randomNumbers.includes(squareNumber)) {
                this.style.backgroundColor = 'red';
                square.removeEventListener('click', myfunction);
            } else {
                this.classList.add('clicked');
            }
        })
    }
  }
  
  const generateButton = document.getElementById('generateButton');
  generateButton.addEventListener('click', generateGrid);
