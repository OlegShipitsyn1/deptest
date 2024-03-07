import debounce from 'lodash/debounce'

document.querySelector('#app').innerHTML = `
  <div>
    deptest
  </div>
`

setupCounter(document.querySelector('#counter'))
