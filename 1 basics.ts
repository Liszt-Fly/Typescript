//sum 1 静态类型检查
const message = "Hello,Typescript!";
console.log(message.toLowerCase());
//* 当我们尝试调用message为函数的时候就会报错
//message();//* 如果使用JavaScript在执行前不会报错

//sum 2 未知属性错误
const course = {
  name: "如何学好javaScript",
  price: 35,
};
//course.location //* 报错 属性未知错误
//sum 3  显式类型
function greet(person: string): void {
  console.log(`你好,${person}`);
}
greet("YZH"); //* typescript在进行编译的时候会降级到ECMAScript2013，可以在tsconfig中进行调整设置

//sum 总的来说typescript就是一个类型检查器，可以用于避免错误，更加严格 比如null/undefined和类型错误
