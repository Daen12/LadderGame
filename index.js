const num = process.argv[2];
const height = process.argv[3];
if (num < 2 || num > 8) {
    console.log("invalid input");
    process.exit();
}

function printLadder(num, height) {
    let count = 0;
    while (count < height) {
        count++;
        let level = new Array(num + 1);
        level[0] = "";
        level[num] = ""; //배열의 맨앞과 맨뒤에 "|" 넣을수 있게 빈자리 만들어주기
        for (let i = 1; i < num; i++) {
            const isStep = Math.random() >= 0.5;
            level[i] = isStep ? "-" : " ";
        }
        console.log(level.join("|"));
    }
}
printLadder(num, height);

// 2차원 배열로 푸는 버전 (문제 다시 읽고 추가..)

function printLadder2(num, height) {
    let count = 0;
    const wholeLadder = [];
    while (count < height) {
        count++;
        const level = new Array(num + 1);
        level[0] = "";
        level[num] = "";
        for (let i = 1; i < num; i++) {
            const isStep = Math.random() >= 0.5;
            level[i] = isStep ? "-" : " ";
        }
        wholeLadder.push(level);
    }
    return wholeLadder.map((i) => i.join("|") + "\n").join("");
}
console.log(printLadder2(num, height));
