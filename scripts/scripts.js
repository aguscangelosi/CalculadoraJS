const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
const botonBorrar = document.getElementById('botonBorrar')
const botonBorrarTodo = document.getElementById('botonBorrarTodo')

const display = new Display(displayValorActual, displayValorAnterior);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonBorrar.addEventListener('click', () => display.borrar());
botonBorrarTodo.addEventListener('click', () => display.borrarTodo());

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => {
        display.computar(boton.value);
    })
})