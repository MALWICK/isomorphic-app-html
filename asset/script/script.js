const input1 = document.querySelector('.leftinput')
const input2 = document.querySelector('.rightinput')
const displayResult = document.querySelector('.resultp')
const submitStrings = document.querySelector('.subbtn')
const resetPage = document.querySelector('.restbtn')
const map = {}
let output

submitStrings.addEventListener('click', function () {
  isomorphic()
})

function isomorphic () {
  const str1 = input1.value
  const str2 = input2.value

  if (str1.length === str2.length) {
    for (let i = 0; i < str2.length; i++) {
      if (map[str1[i]] === undefined) {
        map[str1[i]] = str2[i]
        output = true
      } else {
        if (map[str1[i]] !== str2[i]) {
          output = false
        }
      }
      displayResult.style.visibility = 'visible'

      if (output !== true) {
        displayResult.innerHTML = 'False'
      } else {
        displayResult.innerHTML = 'True'
      }
    }
  } else {
    alert('Sorry!!! The strings most have the same length')
    input1.value = ''
    input2.value = ''
  }
}

resetPage.addEventListener(
  'click',
  () => {
    window.location.reload()
  },
  1000
)
