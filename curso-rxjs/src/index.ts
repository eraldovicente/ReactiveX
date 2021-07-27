import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
     next: value => console.log('siguiente [next]:', value),
     error: error => console.error('error [obs]', error),
     complete: () => console.info('completado [obs]')
};
