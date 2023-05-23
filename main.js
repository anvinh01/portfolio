
const knowMeText = {
    "Nothing" : "Click a Hobby or SKill to know more",
    "front-end" :
        "I knew HTML/CSS and JS since I was in school, " +
        "but have never worked with it, except in university. " +
        "After I looked for Jobs for python, it was very clear to me, that there is no market for Python near my city. " +
        "So I decided to learn a new programming language in year 2022 and started with React.js, because it had a huge ecosystem." +
        "I <b>developed my skills in React.js</b>, by working in a lovely and supportive company " +
        "<a href='https://bcmsolutions.de'>BCM Solutions GmbH</a> as a Student. I was introduced to new technologies " +
        "like <b>GraphQL</b>, <b>State Management</b>." ,
    "Python" :
        "Python was my first programming language. My friend introduced me to learn Python in 2019. " +
        "",
    "Tennis" : "This is Tennis",
    "Piano" : "This is Climbing",
    "Climbing" : "This is <b>Climbing</b>",
    "Volleyball" : "This is Volleyball"
}

function switchKnowMe(content){
    let knowMe = document.getElementById('tech-history');
    knowMe.innerHTML = knowMeText[content];
}













