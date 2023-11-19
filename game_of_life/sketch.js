/* 
Conway's Game of Life
Desarrollado por el Grupo Visuales Ilegales
Integrantes: 
Daniel Leonardo Sanchez Galindo
Andres Fernando Rojas Pedraza
Juan Diego Ramirez Lemos
Juan Jose Ramirez Gomez
*/


let cols, rows;
let grid;
let resolution = 10;
let isPlaying = false; // Variable para rastrear si el juego está en marcha
let configuracion1, configuracion2, configuracion3; //botones de configuraciones
let value = 0; //indicador de carga

function setup() {
  createCanvas(800, 600);
  cols = width / resolution;
  rows = height / resolution;

  // Inicializa la cuadrícula con celdas muertas
  grid = createEmptyGrid(cols, rows);
  console.log(cols, rows);

  // Inicializa las configuraciones
  configuracion1 = createEmptyGrid(cols, rows);
  configuracion2 = createEmptyGrid(cols, rows);
  configuracion3 = createEmptyGrid(cols, rows);

  // Crea un botón para iniciar y detener el juego
  let button = createButton('Iniciar/Detener');
  button.mousePressed(toggleGame);

  // Crea un botón para reiniciar el juego
  let resetButton = createButton('Reiniciar');
  resetButton.mousePressed(resetGame);

  //Botones para guardar configuraciones
  let saveButton1 = createButton('Guardar Configuración 1');
  saveButton1.mousePressed(() => guardarConfiguracion(1));

  let saveButton2 = createButton('Guardar Configuración 2');
  saveButton2.mousePressed(() => guardarConfiguracion(2));

  let saveButton3 = createButton('Guardar Configuración 3');
  saveButton3.mousePressed(() => guardarConfiguracion(3));

  //cargar las configuraciones
  cargarConfiguracion(value);
}

function draw() {
  background(255);

  // Dibuja la cuadrícula
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      if (grid[i][j] === 1) {
        fill(0);
        stroke(255);
        rect(x, y, resolution - 1, resolution - 1);
      }
    }
  }

  // Aplica las reglas del juego de la vida si el juego está en marcha
  if (isPlaying) {
    let next = createEmptyGrid(cols, rows);
    next = generateNextGrid(grid, next);
    grid = next;
  }
}

function mousePressed() {
  // Convierte las coordenadas del mouse a las coordenadas de la cuadrícula
  console.log("Mouse pressed");
  let i = floor(mouseX / resolution);
  let j = floor(mouseY / resolution);
  console.log(i, j);

  // Cambia el estado de la célula al hacer clic solo si el juego está detenido
  if (!isPlaying && i >= 0 && i < cols && j >= 0 && j < rows) {
    grid[i][j] = 1 - grid[i][j];
  }
}

function keyPressed() {
  if (key === '1' || key === '2' || key === '3') {
    value = int(key);
    cargarConfiguracion(value);
  }
}

function generateNextGrid(grid, next) {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];
      // Calcula el número de vecinos vivos
      let neighbors = countNeighbors(grid, i, j);

      // Aplica las reglas del juego
      if (state === 0 && neighbors === 3) {
        next[i][j] = 1; // Nace una nueva célula
      } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
        next[i][j] = 0; // Muere por soledad o sobrepoblación
      } else {
        next[i][j] = state; // Mantiene su estado actual
      }
    }
  }
  return next;
}

function countNeighbors(grid, x, y) {
  let sum = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += grid[col][row];
    }
  }
  sum -= grid[x][y]; // Resta el estado actual
  return sum;
}

function createRandomGrid(cols, rows) {
  let grid = new Array(cols);
  for (let i = 0; i < cols; i++) {
    grid[i] = new Array(rows);
    for (let j = 0; j < rows; j++) {
      grid[i][j] = floor(random(2));
    }
  }
  return grid;
}

function createEmptyGrid(cols, rows) {
  let emptyGrid = new Array(cols);
  for (let i = 0; i < cols; i++) {
    emptyGrid[i] = new Array(rows).fill(0);
  }
  return emptyGrid;
}

function toggleGame() {
  isPlaying = !isPlaying; // Cambia el estado del juego al hacer clic en el botón
}

function resetGame() {
  // Reinicia la cuadrícula a un estado inicial
  if(isPlaying){
    isPlaying = false;
  }
  grid = createEmptyGrid(cols, rows);
  // isPlaying = true;
}

function guardarConfiguracion(numeroConfiguracion) {
  let configuracionActual = JSON.stringify(grid);
  localStorage.setItem(`configuracion${numeroConfiguracion}`, configuracionActual);
}

function cargarConfiguracion(numeroConfiguracion) {
  // Carga la configuración de la cuadrícula desde el almacenamiento local
  let configuracionActual = localStorage.getItem(`configuracion${numeroConfiguracion}`);
  if (configuracionActual) {
    grid = JSON.parse(configuracionActual);
  }
}
