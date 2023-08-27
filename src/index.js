/**
 * Operadores: mergeWith, mergeAll y mergeMap
 * https://rxjs.dev/api/index/function/mergeWith
 * https://rxjs.dev/api/index/function/mergeAll
 * https://rxjs.dev/api/index/function/mergeMap
 */

import { from, fromEvent, interval } from "rxjs";
import { mergeWith, map, mergeAll, mergeMap } from "rxjs/operators";

// Aplicando mergeWith()
// combina los resultados de multiples observables en un solo resultado observable 
// const onClick$ = fromEvent(document, "click").pipe(map((event) => event.type));
// const onMouseMove$ = fromEvent(document, "mousemove").pipe(
//   map((event) => event.type)
// );

// verificamos que el observable se emita bien aplicandole un console.log a cada uno
// onClick$.subscribe(console.log);
// onMouseMove$.subscribe(console.log);
 
// const eventDocument$ = onMouseMove$.pipe(mergeWith(onClick$)).subscribe(value => {
//   console.log('obs: ', value);
// });


// Aplicando mergeAll()
// convierte un observable de orden-superior en un observable de primer-orden que entrega simultaneamente 
// todos los valores que se emiten en los observables internos
// const onClick$ = fromEvent(document, "click");
// const ordenSuperior$ = onClick$.pipe(map(() => interval(1000)));
// const primerOrden$ = ordenSuperior$.pipe(mergeAll());

// primerOrden$.subscribe(console.log);

// Aplicando mergeMap()
// proyecta cada valor de fuente a un observable que se fusiona en la salida de un observable
const letras$ = from(["A", "B", "C"]);
const resultado$ = letras$.pipe(
  mergeMap((letter) => interval(1000).pipe(map((second) => letter + second)))
);

resultado$.subscribe(console.log);
