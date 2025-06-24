function sayHello() {
    let count = 1;
    return innerSayHello = (innerName)=> {
        console.log(`Count:${count++}`)
        console.log(`Hello, ${innerName}`);

    }
}

let sayHelloWithCount = sayHello("Sucre");
sayHelloWithCount("Sucre");
sayHelloWithCount("Sucre");
sayHelloWithCount("Sucre");
sayHelloWithCount("Sucre");

function helloworld() {
    let str = "Hello, world!";
    console.log(str);
}

helloworld()

// for循环示例
console.log("For循环示例:");
for (let i = 0; i < 3; i++) {
    console.log(`第${i + 1}次循环`);
}

// while循环示例
console.log("\nWhile循环示例:");
let count = 0;
while (count < 3) {
    console.log(`当前count值: ${count}`);
    count++;
}

let count2 = 0;
do {
    console.log(`当前count2值：${count2}`);
} while(count2 < 3)

// if条件判断示例
console.log("\nIf条件判断示例:");
let score = 85;
if (score >= 90) {
    console.log("优秀");
} else if (score >= 80) {
    console.log("良好");
} else if (score >= 60) {
    console.log("及格");
} else {
    console.log("不及格");
}

// switch分支控制示例
console.log("\nSwitch分支控制示例:");
let day = new Date().getDay();
switch (day) {
    case 0:
        console.log("星期日");
        break;
    case 1:
        console.log("星期一");
        break;
    case 2:
        console.log("星期二");
        break;
    case 3:
        console.log("星期三");
        break;
    case 4:
        console.log("星期四");
        break;
    case 5:
        console.log("星期五");
        break;
    case 6:
        console.log("星期六");
        break;
    default:
        console.log("无效日期");
}
