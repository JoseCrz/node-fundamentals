//  ? Basic examples of error handling, both sync & async

const broken = () => {
    return 5 + z
}

const notBroken = () => {
    broken()
}

// * SECTION Example 1:
try {
    broken()
} catch (error) {
    console.error(error)
}

// * SECTION Example 2:
try {
    notBroken()
} catch (error) {
    console.error(error)
}
// * SECTION Example 3:
const asyncBroken = () => {
    setTimeout(() => {
        try {
            return 5 + x
        } catch (error) {
            console.error(error)
        }
    }, 1500)
}

asyncBroken()