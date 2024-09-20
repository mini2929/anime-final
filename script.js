/*
const [btn1, btn2, btn3, btn4] = document.querySelectorAll("button");

btn1.addEventListener("click", () => {
    new Anime(window, {scroll:0}, {duration: 500});
});

btn2.addEventListener("click", () => {
    new Anime(window, {scroll: 2000}, {duration: 500});

});

btn3.addEventListener("click", () => {
    new Anime(window, {scroll: 4000}, {duration:500});
});

btn4.addEventListener("click", () => {
    new Anime(window, {scroll: 4000}
        , {duration:500});
});

*/

// 위의 3개의 이벤트 구문을 반복문을 통해 하나로 축약


/*
내 생각
변수로? 

n=0 부터 n=변수1까지
DOM명.addEventListener("click", () => {
    new Anime(window, {scroll: 변수})
    })
*/


const btns = document.querySelectorAll("button");
const posArr = [0, 2000, 2500, 3000, 3500, 4000]; // button 개수만큼 적용됨

btns.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        new Anime(window, {scroll : posArr[idx]});
    });
    });
