/*const topic = "HTML"

if (topic === "HTML"){
    console.log("let's study HTML!")
}
else if (topic === "CSS"){
    console.log("Let's study CSS!")
}
else if (topic === "Git"){
    console.log("Let's study Git!")
}
else if (topic === "Javascript"){
    console.log("Let's study Javascript!")
}
else {
    console.log("Please try again.")
}*/

const topics = ["HTML", "CSS", "Git", "Javascript"]

/*for (let topic = 0; topic < topics.length; topic++){
    console.log(topics[topic])
}*/

for (topic in topics)(
    console.log(topics[topic])
)