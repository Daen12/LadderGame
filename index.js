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
        for (i = 1; i < num; i++) {
            const isStep = Math.random() >= 0.5 ? true : false;
            const step = isStep ? "-" : " ";
            level[i] = step;
        }
        console.log(level.join("|"));
    }
}
printLadder(num, height);
