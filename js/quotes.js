const quotes=[
    {
        quote:"삶이 있는 한 희망은 있다.",
        author:"-키케로"
    },
    {   quote:"산다는것 그것은 치열한 전투다",
        author:"-로망로랑"
    },
    {   quote:"피할수 없으면 즐겨라",
        author:"-로버트 엘리엇"
    },
    {   quote:"어둠이 오면 빛이 온다.",
        author:"-최승호"
    },
    {   quote:"먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에",
        author:"-엘사 맥스웰"}
];


const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");
const todaysquotes= quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todaysquotes.quote;
author.innerText=todaysquotes.author;
