import { annotate } from 'https://unpkg.com/rough-notation?module';
let n1 = document.querySelector('span')

let a1 = annotate(n1, { type: 'box', color: 'orange' })

a1.show()