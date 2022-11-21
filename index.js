const num = process.argv[2];
const height = process.argv[3];
if (num < 2 || num > 8) {
    console.log("invalid input");
    process.exit();
}
