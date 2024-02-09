/**
 * Operadores: startWith y endWith
 * https://rxjs.dev/api/operators/startWith
 * https://rxjs.dev/api/operators/endWith
 */
import { of, from } from "rxjs";
import { startWith, endWith } from "rxjs/operators";

// emite como valor inicial "Z"
// const letters$ = of("A", "B", "C", "D").pipe(startWith("Z"));
// emite como valor final "Z"
const letters$ = of("A", "B", "C", "D").pipe(endWith("Z"));
letters$.subscribe(console.log);
