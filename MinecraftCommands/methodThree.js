const commands = {
	summon: function(entity) {
		console.log(`Summoning ${entity}...`)
	},
	tp: function(x, y, z) {
		console.log("Teleporting to", x, y, z)
	},
	test: function() {
		console.log("test")
	}
}

console.log("-------------------------")
// using variables
let input = "test"

commands[input]()
// is the same as:
commands.test()

console.log("-------------------------")
// How to parse array of commands:

input = "summon cow"

input = input.split(" ") // turn string into array of strings
commands[input[0]](input.slice(1))
//       "summon"  "cow"

console.log("-------------------------")
// Multiple arguments:

input = "tp ~ ~1 ~"

input = input.split(" ") // turn string into array of strings

// use array destructuring to pass as arguments instead of the raw array
commands[input[0]](...input.slice(1)) 
// Note what happens without the dots.
commands[input[0]](input.slice(1)) 

console.log("-------------------------")
