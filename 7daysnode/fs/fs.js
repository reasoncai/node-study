var fs = require('fs');
//小文件复制
function copy1(src, dst) {
    fs.writeFileSync(dst, fs.readFileSync(src));
}
//大文件复制
function copy2(src, dst) {
    fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

function main(argv) {
    copy1(argv[0], argv[1]);
    copy2(argv[0], argv[1]);
}

main(process.argv.slice(2));