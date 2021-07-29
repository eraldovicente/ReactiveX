import { interval, timer } from 'rxjs';

const observer = {
     next: val => console.log('next:', val),
     complete: () => console.log('Completado')     
}

const interval$ = interval(1000);
const timer$ = timer(1000);

console.log('Inicio');
// interval$.subscribe( observer );
timer$.subscribe( observer );
console.log('Fin');
