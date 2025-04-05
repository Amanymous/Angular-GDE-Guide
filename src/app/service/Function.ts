import { Observable } from 'rxjs';

export function functionObs() {
  console.log('funciton call');
  return '1';
  return '2'; // dead code
}

export const functionObservable = new Observable((observer) => {
  console.log('Observable Call');
  observer.next('1');
  observer.next('2');
  setTimeout(() => {
    observer.next('3');
  }, 2000);
});
