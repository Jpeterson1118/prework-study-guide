const topics = ["HTML", "CSS", "Git", "JavaScript"];

const randomTopic = topics[Math.floor(Math.random() * topics.length)]

const selectTopic = () => {
    if (randomTopic === ("HTML")){
        console.log("let's study HTML!");
    }
    else if (randomTopic === ("CSS")){
        console.log("Let's study CSS!");
    }
    else if (randomTopic === "Git"){
        console.log("Let's study Git!");
    }
    else if (randomTopic === "JavaScript"){
        console.log("Let's study JavaScript!");
    }
    else {
        console.log("Please try again.");
    }
}

for (let topic = 0; topic < topics.length; topic++){
    console.log(topics[topic])
}

/*const listTopics = () =>{
    {
        for (topic in topics){
            console.log(topics[topic]);
        }
    }
}*/

console.log('Here are the topics we learned through Prework:')
listTopics()

const topicSelector = () => {
    console.log("Which topic should we study?"); 
}

topicSelector()

selectTopic(topics)