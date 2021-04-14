// assume input is a bunch of minecraft commands, seperated by semicolons.

class Commands {
	static summon(entity) {
		console.log(`Summoning ${entity}...`)
	}
	static tp(x, y, z) {
		console.log("Teleporting to", x, y, z)
	}
	static test() {
		console.log("test")
	}
}

console.log("-------------------------")
// using variables
let input = "test"

Commands[input]()
// is the same as:
Commands.test()

console.log("-------------------------")
// How to parse array of commands:

input = "summon cow"

input = input.split(" ") // turn string into array of strings
Commands[input[0]](input.slice(1))
//       "summon"  "cow"

console.log("-------------------------")
// Multiple arguments:

input = "tp ~ ~1 ~"

input = input.split(" ") // turn string into array of strings

// use array destructuring to pass as arguments instead of the raw array
Commands[input[0]](...input.slice(1)) 
// Note what happens without the dots.
Commands[input[0]](input.slice(1)) 

console.log("-------------------------")
