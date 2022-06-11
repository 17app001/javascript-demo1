// 宣告空二維陣列
// 請使用prompt輸入學生個數
// 每個學生有姓名/國文/英文/數學(const)
let students = [];
const count = prompt("輸入學生個數:");
const SUBJECTS = ["國文", "英文", "數學"];

for (let i = 0; i < count; i++) {
    let data = [];
    data.push(prompt("輸入姓名:"));
    let j=0;
    for (; j < SUBJECTS.length;) {
        let score=prompt(`請輸入${SUBJECTS[j]}分數:`);
        if (isNaN(score)){                  
            continue;
        }
        j++;
        data.push(Number(score));
    }
    students.push(data);
}

console.log(students);

let str="";
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
    let name = students[i][0];
    let scores = students[i].slice(1, students[i].length);
    console.log(scores);
    let total = 0;
    for (let j = 0; j < scores.length; j++) {
        total += scores[j];
    }

    let avg = total / scores.length;
    console.log(name, total, avg.toFixed(2));
    str+=`<h2>${name} ${total} ${avg.toFixed(2)}</h2>`;
}

document.write(str);

    // let x = -8.6;

    // console.log(Math.abs(x));
    // console.log(Math.ceil(x));
    // console.log(Math.floor(x));
    // console.log(Math.round(x));

    // console.log(Math.random());

    // console.log(Math.random() * 10);
    // // 0~9
    // console.log(Math.floor(Math.random() * 10));
    // // 1~10
    // console.log(Math.floor(Math.random() * 10) + 1);
    // // 10~100
    // let end = 49;
    // let start = 1;
    // console.log(Math.floor(Math.random() * (end - start + 1)) + start);

    // const count = 5;


    // console.log("===========================");

    // //使用雙迴圈 輸出5筆樂透號碼 +``
    // for (let i = 0; i < count; i++) {
    //     document.write(`<h1>第${i + 1}組號碼</h1>`);
    //     let lotto = [];
    //     let str = "<ul>";
    //     for (let j = 0; j < 6; j++) {
    //         let x = Math.floor(Math.random() * (end - start + 1)) + start;
    //         lotto.push(x);
    //     }


    //     str += `<li>${lotto.join(" ")}</li>` + "</ul>";
    //     document.write(str);


    //     console.log(lotto);
    //     console.log(lotto.length);
    //     console.log(lotto.join(","));
    

    // while (true) {
    //     let x = Math.floor(Math.random() * (end - start + 1)) + start;
    //     console.log(x);
    //     if (x == start || x == end) {
    //         break;
    //     }
    // }

    // console.log(x / 2);
    // console.log(x >> 1);
    // console.log(x * 2);
    // console.log(x << 1);

    // if (x > y & x++ == 10) {
    //     console.log("1");
    // }

    // console.log(x, y);

    // console.log(Number("10"));
    // console.log(String("a"));
    // console.log(Boolean(''));



    // const PI = 3.1415926;
    // console.log(PI);

    // const email = "Jerry@gmail.com";
    // console.log(email.length);
    // console.log(email[email.length - 1]);
    // console.log(email.includes("jerry"));
    // console.log("Jerry" == "Jerry");
    // // 型態跟值一致 ===
    // console.log("5" === 5);

    // // i++  i+=1
    // let i = 0;
    // for (; i < email.length;) {
    //     console.log(i, email[i++]);
    //     // i+=1
    //     console.log(i);
    // }


    // x = ++i;
    // console.log(x, i);
    // let x = Number(prompt("number1"));
    // let y = Number(prompt("number2"));
    // document.write("結果為:" + (x + y));
    // alert("結果為:" + (x + y));

    // let r = prompt("請輸入半徑:");
    // console.log(r, typeof (r));
    // let area = 0;
    // area = r ** 2 * PI;
    // if (r >= 10) {
    //     let r = "5";
    //     console.log(r ** 2 * PI);
    //     area = r ** 2 * PI;
    // }

    // 輸出面積
    // console.log(r, typeof (r));
    // document.write("<h2>面積為" + area + "</h2>");
    // alert("面積為" + area);