import { fromEvent } from 'rxjs';

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac scelerisque orci, nec suscipit eros. Phasellus sollicitudin efficitur diam. Ut nec tempus nisl. Sed elementum quam a purus consectetur, semper lobortis metus egestas. Maecenas feugiat, quam eget maximus laoreet, mauris ante faucibus ex, id mattis ipsum urna quis nisi. Donec quis libero nec augue elementum mattis. Aenean blandit eros nec volutpat porttitor. Morbi ligula ex, consequat vitae ornare nec, auctor eget felis. Phasellus porttitor sapien vitae ante tristique lacinia eget at dui. Quisque in blandit dui. Integer tellus arcu, eleifend quis consequat ac, pulvinar at mi. Suspendisse ut ligula dapibus, porttitor ligula in, sodales augue. Donec lacinia lobortis scelerisque.
<br/><br/>
Aliquam at luctus velit, eget pellentesque mi. Vestibulum ornare felis ac purus auctor, ac eleifend metus accumsan. Fusce dui magna, hendrerit vel tellus vitae, maximus mattis nulla. Suspendisse sagittis, urna quis scelerisque pellentesque, orci nisl molestie lorem, a luctus leo leo a est. Proin vel eleifend neque, non consequat augue. In sollicitudin rutrum nisl, interdum semper est efficitur sed. Fusce nec nibh purus. Nulla dapibus sed quam et accumsan.
<br/><br/>
Nulla ac est ante. Suspendisse feugiat fermentum diam in lacinia. Nulla facilisi. Praesent a neque lacus. Pellentesque mattis erat ut odio tempor ultricies. Quisque interdum, quam ut scelerisque facilisis, metus augue imperdiet justo, nec ultricies arcu metus in neque. Donec nec turpis ornare, maximus elit sollicitudin, auctor mi. Donec aliquet lorem ac orci vestibulum varius. Fusce laoreet dignissim consequat.
<br/><br/>
Nulla tempus augue justo, sit amet ullamcorper mauris convallis nec. Vestibulum pretium ante est, at vehicula metus convallis id. Aliquam tortor orci, pellentesque sit amet varius consequat, rhoncus et nisl. In pharetra dignissim ante et tristique. Aliquam tempus eu nulla nec pellentesque. Fusce sed molestie libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse in tincidunt massa. Nunc lacinia sagittis pulvinar. Suspendisse pharetra vitae metus non pellentesque. Suspendisse potenti. Vivamus efficitur, metus vel aliquet egestas, diam nulla scelerisque lacus, id vehicula nibh odio consectetur mauris. Sed scelerisque aliquam tempor. Vivamus viverra vestibulum ligula sit amet mollis. Donec orci felis, vehicula ut augue gravida, posuere viverra massa.
<br/><br/>
Quisque scelerisque et lectus quis blandit. Etiam maximus mauris id mi maximus ultrices. Vestibulum volutpat lobortis velit vel convallis. Nam id scelerisque lectus. Suspendisse pellentesque luctus augue, ac euismod dolor blandit eget. Aliquam volutpat nunc vitae felis pretium, a lobortis leo aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc eu pellentesque diam. Nunc a convallis sem. Nunc justo lorem, mollis non tempus quis, cursus id tellus. Nunc consectetur mollis orci, in ultrices tortor vestibulum et. Aenean tempor ante non metus eleifend cursus.
`;


const body = document.querySelector('body');
body.append( texto );

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// funcion que haga el calculo

// Streams
const scroll$ = fromEvent( document, 'scroll');
// scroll$.subscribe( console.log );

const progress$ = scroll$.pipe();

progress$.subscribe( porcentaje => {

     progressBar.style.width = `${ porcentaje }%`;

});