//sum 1 基本类型 string boolean number Array
let myName: string = "Mike";
let bSimplified: boolean = false;
let score: number = 90;
let lists: string[] = ["a", "b", "c", "d"];

//sum 2 方法
function change(module: string): void {
  console.log(`已经将模块修改为${module}`);
}
change("ts");

//sum 3 匿名函数
const nameList = ["YZH", "SFG", "CKX"];
nameList.forEach((e) => {
  console.log(e.concat(":"));
});

//sum 4 Object类型
function printScore(person: string, score: number) {
  console.log(`${person}的得分是${score}`);
}
printScore("Mike", 98);

//sum 5  可选类型
function printName(lastName: string, firstName?: string) {
  if (firstName) {
    console.log(`姓名为${lastName}${firstName}`);
  } else {
    console.log(`姓氏为${lastName}`);
  }
}
printName("乔", "阳");

//sum 6 Union types 联合类型
function printID(id: number | string) {
  //特别注意这里的方法受到限制，比如想使用toUpper或者lower都不行，因为number不支持
  if (typeof id === "string") {
    id.toLowerCase(); //使用narrow细化的方法才可以使用
  }
  console.log("Your ID IS" + id);
}
//* 或者我们也可以使用ID来定义这个新类型
type ID = string | number;
printID("395274361");
printID(5792361);

//sum 7 类型别名
type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  console.log("The x coordinate is " + pt.x);
  console.log("The y coordinate is" + pt.y);
}
printCoord({ x: 100, y: 50 });

//sum 8 接口
interface Nodes {
  value: number;
  id: string;
}
function createNode(node: Nodes) {
  console.log("当前node的data为" + node.value + "当前node的id为" + node.id);
}
createNode({ value: 3, id: "9372514" });

//* 接口可以继承，type不能继承
interface Animal {}

interface Bear extends Animal {}

//* type一经创建不可修改
/*type door = {
  title: string;
};
type door = {
  ts: number;
};
*/
//* interface创建之后还可以进行修改
interface set {
  title: string;
}
interface set {
  id: number;
}

//sum 9 类型断言
//本身ts只能知道这是一种HTML元素，但是可以使用typeassertion，设置成更明确的类型
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");

//sum 10 literalTypes
function printText(s: string, alignment: "left" | "right" | "center") {}
printText("Hello", "left");

//sum 11 !操作符的使用
function nullAssetion(x?: number | null) {
  //使用！表示自己知道这个值肯定不为null
  console.log(x!.toExponential());
}
