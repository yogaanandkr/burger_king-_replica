let ans = fetch("https://api.github.com/users")
let y = ans.then((a) => {
  return a.json()
})
let data = y.then((a) => {
  console.log(a);
  return a

})

export default data