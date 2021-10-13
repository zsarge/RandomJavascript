`use strict`;
// run with `node python`

// definitions
function range(...args) {
    let start, stop, step;
    if (args.length == 1) {
        start = 0
        step = 1
        stop = args[0]
    } else if (args.length == 2) {
        [start, stop] = args
        step = 1
    } else if (args.length == 3) {
        [start, stop, step] = args
    } else {
        throw new Exception("invalid arguments")
    }
    arr = []
    for (i = start; i < stop; i += step) 
        arr.push(i)
    return arr
}

print = console.log

function def(name, func) {
    if (typeof func == 'function')
        global[name] = func
    else
        extremeDefine(name, func)
}

// idk if this is cheating or not
function extremeDefine(name, funcString) {
    str = funcString
        .replace(/(for|if|elif) (.*):$/gm, "$1 ($2)")
        .replace(/elif/g, "else if")
        .replace(/and/g, "&&")
        .replace(/:/g, "")
    global[name] = () => eval(str)
}
// end definitions

// python for loops
for (i in range(5))
    print(i)
print("")

for (i of range(1, 5))
    print(i)
print("")

for (i of range(1, 5, 2))
    print(i)
print("")

// python lambda
lambda: x = console

x.log("lambda")

lambda: increment = (n) => n + 1

print(increment(0))

// def python
print("")
print("fizzbuzz")

def ("fizzbuzz", n => {
    if (n % 15 == 0)
        return "FizzBuzz"
    else if (n % 3 == 0)
        return "Fizz"
    else if (n % 5 == 0)
        return "Buzz"
    else 
        return n.toString()
})

for (i of range(1, 20))
    print(fizzbuzz(i))


print("")
print("fizzbuzz part 2")
def ("print_fizzbuzz", `
    for i in range(20):
        if i % 3 == 0 and i % 5 == 0:
            print('FizzBuzz')
        elif i % 3 == 0:
            print('Fizz')
        elif i % 5 == 0:
            print('Buzz')
        else:
            print(i)
`)

print_fizzbuzz()

