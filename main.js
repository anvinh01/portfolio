
const knowMeText = {
    "Nothing" :
        "<h2>Welcome to my history!</h2><br>" +
        "<p>" +
        "Here, you will have the opportunity to learn more about me, including my activities and the evolution of my skills throughout the years. " +
        "Please <b>click on one of the buttons</b> ont the side to delve deeper into each topic." +
        "</p>",
    "2019-2022": "<h2>2019-2022</h2><br>" +
        "<h3>University</h3>" +
        "<p>" +
        "From 2019 to 2022, I completed my secondary education with a <b>strong determination to pursue a career in IT</b>. " +
        "During this time, I recognized that the theoretical modules were challenging, yet I found <b>great satisfaction in applying the knowledge</b> I acquired to solve complex problems. " +
        "This experience further solidified my passion for technology and motivated me to <b>explore practical applications of my skills</b>." +
        "</p>",
    "2022-2023":
        "<h2>2022-2023</h2><br>" +
        "<h3>Student Position at BCM Solutions GmbH</h3> " +
        "<p>" +
        "I had the privilege of working at BCM Solutions GmbH as a student, where I had the opportunity to <b>apply and enhance my React.js skills</b>. " +
        "This supportive environment allowed me to collaborate with experienced professionals, expand my knowledge, and gain <b>practical experience in developing web applications</b>. " +
        "During this time, I worked on a project that involved implementing React.js components, " +
        "<b>utilizing GraphQL</b> for efficient data retrieval, and employing State Management techniques for maintaining application state." +
        "</p>",
    "Web-Dev" :
        "<h2>Web-Dev</h2><br>" +
        "<p>" +
        "Throughout my school years, I acquired knowledge of HTML/CSS and JavaScript, however, I had limited practical experience with these languages until I enrolled in university. " +
        "It was during my university studies that I realized the <b>limited job market for Python in my city.</b> " +
        "With this realization, I made a decision in 2022 to broaden my programming skills by learning a new language. " +
        "I chose <b>React.js due to its extensive ecosystem</b> and the opportunities it presented. " +
        "My journey with React.js began, and I honed my skills while <b>working as a student</b> at <b><a class='blue-link' href='https://bcmsolutions.de'>BCM Solutions GmbH</a></b>, a supportive and inspiring company. " +
        "This experience introduced me to cutting-edge technologies such as GraphQL." +
        "</p>" ,
    "Python" :
        "<h2>Python</h2><br>" +
        "<p>" +
        "I was initially <b>introduced to Python by my friend <a class='blue-link' href='https://tyfn.de'>Tayfun</a></b>, who spoke highly of the language's merits and the enjoyment he derived from programming a Telegram bot. " +
        "He strongly recommended that I learn Python, but I didn't take his advice seriously at first. " +
        "It wasn't until my mother embarked on her studies in electrical engineering, where Python was a core component, that I finally decided to delve into the language. " +
        "<b>To assist her in her studies</b>, I not only learned Python myself but also took on the role of teaching her how to utilize it effectively. " +
        "As I delved deeper into Python and guided my mother through its intricacies, I discovered an <b>unwavering fondness for the language.</b> " +
        "</p>",
    "Java/C#":
        "<h2>Java/C#</h2><br>" +
        "<p>" +
        "My first exposure to Java occurred during my time in school. However, it was in university, specifically during the <b>\"Object-Oriented Programming\" module</b>, " +
        "that I truly delved into the language and discovered <b>design patterns</b>. " +
        "This exploration was both captivating and enlightening. Additionally, during the \"Game-development\" module, I had the opportunity to work with <b>Unity and C#</b>. " +
        "The familiarity of C# with its resemblance to Java and JavaScript made it <b>easy for me to adapt</b>. " +
        "The knowledge of design patterns acquired previously proved to be valuable in this context. " +
        "Although it is <b>not my primary programming language</b>, working with Java and C# continues to bring me great joy." +
        "</p>"
}

function switchKnowMe(content){
    let knowMe = document.getElementById('tech-history');
    knowMe.innerHTML = knowMeText[content];
}

function createNewPortfolio(){
    let temp = document.createElement("div");
    temp.className = "flex-item";
}

const form = document.getElementById("contact-me")

form.addEventListener("submit", (e) => {


    window.location.href = "mailto:me@example.com"
        + "?cc=myCCaddress@example.com"
        + "&subject=" + encodeURIComponent("This is my subject")
        + "&body=" + encodeURIComponent(document.getElementById('myText').value);
})

switchKnowMe("Nothing");        // init text for skill history











