const dateEl = document.querySelectorAll(".date");
const lottoEl = document.querySelector("div.lotto-number ul");
const startEl = document.querySelector("#start");

console.log(startEl);

const randInt = (start, end) => Math.floor(Math.random() * (end - start + 1)) + start;

dateEl.forEach(element => element.innerText = "2022/06/11");


startEl.addEventListener("click", () => {
    // 清空元素內容
    lottoEl.innerHTML = "";

    for (let i = 0; i < 6; i++) {
        const numbers = getLottoNumber(1, 49, 6, true).join(" ");
        lottoEl.innerHTML += `<li>${numbers}</li>`;
    }

    const lottoLi = document.querySelectorAll(".lotto-number ul li");
    for (let i = 0; i < lottoLi.length; i++) {
        if (i % 2 == 0) {
            lottoLi[i].style.color = "orange";
            lottoLi[i].style.backgroundColor = "black";
        }
    }

    console.log(lottoLi);
});

function getBmi(height, weight, point = 2) {
    return (weight / (height / 100) ** 2).toFixed(point);
}

function getLottoNumber(start, end, numbers, special = false) {
    let lotto = [];
    do {
        let x = randInt(start, end);
        if (!lotto.includes(x)) {
            lotto.push(x);
        }

    } while (lotto.length < numbers);

    lotto.sort((a, b) => a - b);

    if (special) {
        lotto.push(randInt(start, end));
    }

    return lotto;
}



