function ask() {
    let random = Math.floor(Math.random() * 20);
    let imageArray = 
    ["url('./img/magic/magic8ball_1.png')",
    "url('./img/magic/magic8ball_2.png')",
    "url('./img/magic/magic8ball_3.png')",
    "url('./img/magic/magic8ball_4.png')",
    "url('./img/magic/magic8ball_5.png')",
    "url('./img/magic/magic8ball_6.png')",
    "url('./img/magic/magic8ball_7.png')",
    "url('./img/magic/magic8ball_8.png')",
    "url('./img/magic/magic8ball_9.png')",
    "url('./img/magic/magic8ball_10.png')",
    "url('./img/magic/magic8ball_11.png')",
    "url('./img/magic/magic8ball_12.png')",
    "url('./img/magic/magic8ball_13.png')",
    "url('./img/magic/magic8ball_14.png')",
    "url('./img/magic/magic8ball_15.png')",
    "url('./img/magic/magic8ball_16.png')",
    "url('./img/magic/magic8ball_17.png')",
    "url('./img/magic/magic8ball_18.png')",
    "url('./img/magic/magic8ball_19.png')",
    "url('./img/magic/magic8ball_20.png')"]

    document.getElementById("answers").style.backgroundImage=imageArray[random];
}