const name = "Jack" 
const name2 = "Tyler"
const name3 = "Maddi"

if (name.length === name3.length && name3.length === name2.length) {
    console.log(`All three names, ${name}, ${name2}, ${name3}, are all the same length`)

} else if (name.length > name3.length && name.length > name2.length) {
    console.log(`${name} has the longest name`)

} else if (name3.length > name.length && name3.length > name2.length) {
    console.log(`${name3} has the longest name`)

} else if (name.length === name3.length && name.length > name2.length) {
    console.log(`${name} and ${name3} have the longest name`)

} else if (name2.length > name.length && name2.length > name3.length) {
    console.log(`${name2} has the longest name`)

} else if (name.length === name2.length && name.length > name3.length) {
    console.log(`${name} and ${name2} have the longest name`)
}
else if (name2.length === name3.length && name2.length > name.length) {
    console.log(`${name2} and ${name3} have the longest name`)
}
