document.body.innerHTML = `<h1>${d3.version}</h1>`

// var linearScale = d3.scaleLinear()
// .domain([0, 100])
// .range([0, 1])
// .clamp(true)
//
// console.log(linearScale.invert(0))

var timeScale = d3.scaleTime().domain([new Date(2016, 0, 1), new Date()]).range([0, 100])

console.log(timeScale(new Date(2016, 3, 15)))
console.log(timeScale.invert(50))
