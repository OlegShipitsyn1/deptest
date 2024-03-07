import debounce from 'lodash/debounce'

const x = debounce((v) => v ** 2)
document.addEventListener('DOMContentLoaded', x)

document.querySelector('#app').innerHTML = `
  <div>
    deptest
  </div>
`

setupCounter(document.querySelector('#counter'))
