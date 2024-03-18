const topics = "HTML, CSS, Git, JavaScript";
const randomTopic = topics[Math.floor(Math.random()* topics.length)];

function listTopics() {
    for (let x = 0; x < topics.length; x++) {
      console.log(topics[x]);
    }
  }

const shapes = ["triangle", "square", "pentagon", "circle"];
console.log(shapes[0]);
console.log(shapes[1]);
console.log(shapes[2]);
console.log(shapes[3]);


  function selectTopic() {
    if (randomTopic === 'HTML') {
      console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
      console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
      console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
      console.log("Let's study JavaScript!");
    } else {
      console.log('Please try again!');
    }
  }


  console.log('Here are the topics we learned through Prework:');
listTopics();

console.log('Which topic should we study first?');
selectTopic();

<ul>
<li>A variable is a named container that allows us to store data in our code.</li>
<li>Control flow is the order in which a computer executes code in a script.</li>
<li>Working on the website even though its still breaking for some reason</li>
</ul>