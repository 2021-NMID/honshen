# js笔记

[TOC]



## 正则表达式

**/runoob/i** 是一个正则表达式。

**runoob** 是一个**正则表达式主体** (用于检索)。

**i** 是一个**修饰符** (搜索不区分大小写)。

var str = "Visit Runoob!";  

var n = str.search(/Runoob/i);  6



var str = document.getElementById("demo").innerHTML;  

var txt = str.replace(/microsoft/i,"Runoob");

不区分大小写 microsoft替换为runoob

![image-20210520113910423](C:\Users\王贤宇\AppData\Roaming\Typora\typora-user-images\image-20210520113910423.png)



test() 方法是一个正则表达式方法。

test() 方法用于检测一个字符串是否匹配某个模式，如果字符串中含有匹配的文本，则返回 true，否则返回 false。

/e/.test("The best things in life are free!")  			true



exec() 方法用于检索字符串中的正则表达式的匹配。

该函数返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。

/e/.exec("The best things in life are free!");  		e



```javascript
/*是否带有小数*/
function    isDecimal(strValue )  {  
   var  objRegExp= /^\d+\.\d+$/;
   return  objRegExp.test(strValue);  
}  

/*校验是否中文名称组成 */
function ischina(str) {
    var reg=/^[\u4E00-\u9FA5]{2,4}$/;   /*定义验证表达式*/
    return reg.test(str);     /*进行验证*/
}

/*校验是否全由8位数字组成 */
function isStudentNo(str) {
    var reg=/^[0-9]{8}$/;   /*定义验证表达式*/
    return reg.test(str);     /*进行验证*/
}

/*校验电话码格式 */
function isTelCode(str) {
    var reg= /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
    return reg.test(str);
}

/*校验邮件地址是否合法 */
function IsEmail(str) {
    var reg=/^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
    return reg.test(str);
}
```



## 错误（异常）

```javascript
try {
    ...    //异常的抛出
} catch(e) {
    ...    //异常的捕获与处理
    // err有message和name属性
} finally {
    ...    //结束处理
}
```



## 变量提升

```javascript
var x = 5; // 初始化 x
var y = 7; // 初始化 y

elem = document.getElementById("demo"); // 查找元素
elem.innerHTML = x + " " + y;           // 显示 x 和 y



var x = 5; // 初始化 x

elem = document.getElementById("demo"); // 查找元素
elem.innerHTML = x + " " + y;           // 显示 x 和 y  y是undefined

var y = 7; // 初始化 y
```



## 严格模式

"use strict"

不能使用未声明的变量

```JavaScript
"use strict";
x = 3.14;                // 报错 (x 未定义)

Note	对象也是一个变量。

"use strict";
x = {p1:10, p2:20};      // 报错 (x 未定义)

不允许删除变量或对象。

"use strict";
var x = 3.14;
delete x;                // 报错

不允许删除函数。

"use strict";
function x(p1, p2) {};
delete x;                // 报错 

不允许变量重名:

"use strict";
function x(p1, p1) {};   // 报错

不允许使用八进制:

"use strict";
var x = 010;             // 报错

不允许使用转义字符:

"use strict";
var x = \010;            // 报错

不允许对只读属性赋值:

"use strict";
var obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 3.14;            // 报错

不允许对一个使用getter方法读取的属性进行赋值

"use strict";
var obj = {get x() {return 0} };

obj.x = 3.14;            // 报错

不允许删除一个不允许删除的属性：

"use strict";
delete Object.prototype; // 报错

变量名不能使用 "eval" 字符串:

"use strict";
var eval = 3.14;         // 报错

变量名不能使用 "arguments" 字符串:

"use strict";
var arguments = 3.14;    // 报错


"use strict";
with (Math){x = cos(2)}; // 报错

由于一些安全原因，在作用域 eval() 创建的变量不能被调用：

"use strict";
eval ("var x = 2");
alert (x);               // 报错
```



## JSON

JSON 数据格式为 键/值 对，就像 JavaScript 对象属性。

键/值对包括字段名称（在双引号中），后面一个冒号，然后是值："name":"Runoob"

```JavaScript
"sites":[
    {"name":"Runoob", "url":"www.runoob.com"}, 
    {"name":"Google", "url":"www.google.com"},
    {"name":"Taobao", "url":"www.taobao.com"}
]

/*
通常我们从服务器中读取 JSON 数据，并在网页中显示数据。

简单起见，我们网页中直接设置 JSON 字符串:

首先，创建 JavaScript 字符串，字符串为 JSON 格式的数据：
*/

var text = '{ "sites" : [' +
'{ "name":"Runoob" , "url":"www.runoob.com" },' +
'{ "name":"Google" , "url":"www.google.com" },' +
'{ "name":"Taobao" , "url":"www.taobao.com" } ]}';

//然后，使用 JavaScript 内置函数 JSON.parse() 将字符串转换为 JavaScript 对象:

var obj = JSON.parse(text);


//JSON.parse()	用于将一个 JSON 字符串转换为 JavaScript 对象。
//JSON.stringify()	用于将 JavaScript 值转换为 JSON 字符串。

```



## AJAX



所有现代浏览器均支持 XMLHttpRequest 对象（IE5 和 IE6 使用 ActiveXObject）。

XMLHttpRequest 用于在后台与服务器交换数据。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。



```javascript
var xmlhttp;
if (window.XMLHttpRequest)
{
    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp=new XMLHttpRequest();
}
else
{
    // IE6, IE5 浏览器执行代码
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
```



向服务器请求

与 POST 相比，GET 更简单也更快，并且在大部分情况下都能用。

然而，在以下情况中，请使用 POST 请求：

- 无法使用缓存文件（更新服务器上的文件或数据库）
- 向服务器发送大量数据（POST 没有数据量限制）
- 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠



## 异步



## Promise

```javascript
//计时器 每个延迟不同的时间再启动
setTimeout(function () {
    console.log("First");
    setTimeout(function () {
        console.log("Second");
        setTimeout(function () {
            console.log("Third");
        }, 3000);
    }, 4000);
}, 1000);

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("First");
        resolve();
    }, 1000);
}).then(function () {
    //这个return后面有解释
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Second");
            resolve();
        }, 4000);
    });
}).then(function () {
    setTimeout(function () {
        console.log("Third");
    }, 3000);
});

//语法格式 then可以有多个
/*
resolve 是执行成功 参数会给 then
reject 是执行失败 参数给catch
resolve 和 reject 的作用域只有起始函数，不包括 then 以及其他序列；
resolve 和 reject 并不能够使起始函数停止运行，别忘了 return*/
new Promise(function (resolve, reject) {
    var a = 0;
    var b = 1;
    if (b == 0) reject("Divide zero");
    else resolve(a / b);
}).then(function (value) {
    console.log("a / b = " + value);
}).catch(function (err) {
    console.log(err);
}).finally(function () {
    console.log("End");
});

new Promise(function (resolve, reject) {
    console.log(1111);
    resolve(2222);
}).then(function (value) {
    console.log(value);
    return 3333;
}).then(function (value) {
    console.log(value);
    throw "An error";
}).catch(function (err) {
    console.log(err);
});


//注意这个return
function print(delay, message) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(message);
            resolve();
        }, delay);
    });
}

//print(1000, "First")就是是上面函数返回的一个promise对象
print(1000, "First").then(function () {
    //这里为什么又用return？
    return print(4000, "Second");
    //意思是下一个.then其实是第二个（4000）promise的then，而不是第一个（1000）promise的then
}).then(function () {
    print(3000, "Third");
});

function print(delay, message) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(message);
            resolve();
        }, delay);
    });
}



print(1000, "First").then(function () {
    return print(4000, "Second");
}).then(function () {
    print(3000, "Third");
});
//我们可以将这段代码变得更好看

//async 异步函数 
//await 指令后必须跟着一个 Promise，异步函数会在这个 Promise 运行中暂停，直到其运行结束再继续运行
async function asyncFunc() {
    await print(1000, "First");
    await print(4000, "Second");
    await print(3000, "Third");
}
asyncFunc();
```



## 对象

### const 修饰的对象可修改

```javascript
const user = {
  name: "John"
};

user.name = "Pete"; // (*)

alert(user.name); // Pete
//user不可修改 即不能写user=...

//对于多词属性
alert(user["likes birds"]); // true
//用中括号
```



### 计算属性

```javascript
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // 属性名是从 fruit 变量中得到的
};

alert( bag.apple ); // 5 如果 fruit="apple"
```

计算属性的含义很简单：`[fruit]` 含义是属性名应该从 `fruit` 变量中获取。

所以，如果一个用户输入 `"apple"`，`bag` 将变为 `{apple: 5}`。

本质上，这跟下面的语法效果相同：

```javascript
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

// 从 fruit 变量中获取值
bag[fruit] = 5;
```

我们可以在方括号中使用更复杂的表达式：

```javascript
let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};
```



### 属性存在测试

```javascript
let user = {};

alert( user.noSuchProperty === undefined ); // true 意思是没有这个属性
```

这里还有一个特别的，检查属性是否存在的操作符 `"in"`。

语法是：

```javascript
"key" in object
```

example：

```javascript
let user = { name: "John", age: 30 };

alert( "age" in user ); // true，user.age 存在
alert( "blabla" in user ); // false，user.blabla 不存在。
```



### for..in循环

多用于键值遍历

```javascript
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // 属性键的值
  alert( user[key] ); // John, 30, true
}
```

## 克隆与合并

```javascript
let user = {
  name: "John",
  age: 30
};

let clone = {}; // 新的空对象

// 将 user 中所有的属性拷贝到其中
for (let key in user) {
  clone[key] = user[key];
}

// 现在 clone 是带有相同内容的完全独立的对象
clone.name = "Pete"; // 改变了其中的数据

alert( user.name ); // 原来的对象中的 name 属性依然是 John
```

我们也可以使用 [Object.assign](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) 方法来达成同样的效果。

语法是：

```javascript
Object.assign(dest, [src1, src2, src3...])
```

- 第一个参数 `dest` 是指目标对象。
- 更后面的参数 `src1, ..., srcN`（可按需传递多个参数）是源对象。
- 该方法将所有源对象的属性拷贝到目标对象 `dest` 中。换句话说，从第二个开始的所有参数的属性都被拷贝到第一个参数的对象中。
- 调用结果返回 `dest`。

例如，我们可以用它来合并多个对象：

```javascript
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// 将 permissions1 和 permissions2 中的所有属性都拷贝到 user 中
Object.assign(user, permissions1, permissions2);

// 现在 user = { name: "John", canView: true, canEdit: true }
```

如果被拷贝的属性的属性名已经存在，那么它会被覆盖：

```javascript
let user = { name: "John" };

Object.assign(user, { name: "Pete" });

alert(user.name); // 现在 user = { name: "Pete" }
```

我们也可以用 `Object.assign` 代替 `for..in` 循环来进行简单克隆：

```javascript
let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);
```



## 垃圾回收

emmm  详情 看 https://zh.javascript.info/garbage-collection



## this和构造器

dddd



## 可选链

### 不存在的属性

假设我们有很多个 `user` 对象，其中存储了我们的用户数据。

我们大多数用户的地址都存储在 `user.address` 中，街道地址存储在 `user.address.street` 中，但有些用户没有提供这些信息。

在这种情况下，当我们尝试获取 `user.address.street`，而该用户恰好没提供地址信息，我们则会收到一个错误：

```javascript
let user = {}; // 一个没有 "address" 属性的 user 对象

alert(user.address.street); // Error!
```

最先想到的方案是在访问该值的属性之前，使用 `if` 或条件运算符 `?` 对该值进行检查，像这样：

```javascript
let user = {};

alert(user.address ? user.address.street : undefined);
```

这样可以，这里就不会出现错误了……但是不够优雅。就像你所看到的，`"user.address"` 在代码中出现了两次。对于嵌套层次更深的属性就会出现更多次这样的重复，这就是问题了。

例如，让我们尝试获取 `user.address.street.name`。

我们既需要检查 `user.address`，又需要检查 `user.address.street`：

```javascript
let user = {}; // user 没有 address 属性

alert(user.address ? user.address.street ? user.address.street.name : null : null);
```

这样就太扯淡了，并且这可能导致写出来的代码很难让别人理解。

甚至我们可以先忽略这个问题，因为我们有一种更好的实现方式，就是使用 `&&` 运算符：

```javascript
let user = {}; // user 没有 address 属性

alert( user.address && user.address.street && user.address.street.name ); // undefined（不报错）
```

依次对整条路径上的属性使用与运算进行判断，以确保所有节点是存在的（如果不存在，则停止计算），但仍然不够优雅。

就像你所看到的，在代码中我们仍然重复写了好几遍对象属性名。例如在上面的代码中，`user.address` 被重复写了三遍。



### 可选链

下面这是一种使用 `?.` 安全地访问 `user.address.street` 的方式：

```javascript
let user = {}; // user 没有 address 属性

alert( user?.address?.street ); // undefined（不报错）
```

代码简洁明了，也不用重复写好几遍属性名。

即使 对象 `user` 不存在，使用 `user?.address` 来读取地址也没问题：

```javascript
let user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined

//可选链 ?. 语法有三种形式：

obj?.prop —— 如果 obj 存在则返回 obj.prop，否则返回 undefined。
obj?.[prop] —— 如果 obj 存在则返回 obj[prop]，否则返回 undefined。
obj.method?.() —— 如果 obj.method 存在则调用 obj.method()，否则返回 undefined。
```



## 数据类型

### 原始类型

```javascript
string`，`number`，`bigint`，`boolean`，`symbol`，`null` 和 `undefined
```

### 数字类型

```javascript
let billion = 1000000000;
```

但在现实生活中，我们通常避免写一长串零，因为它很容易打错。另外，我们很懒。我们通常会将 10 亿写成 `"1bn"`，或将 73 亿写成 `"7.3bn"`。对于大多数大的数字来说都是如此。

在 JavaScript 中，我们通过在数字后附加字母 “e”，并指定零的数量来缩短数字：

```javascript
let billion = 1e9;  // 10 亿，字面意思：数字 1 后面跟 9 个 0

alert( 7.3e9 );  // 73 亿（7,300,000,000）
```

```javascript
let ms = 0.000001;
```

就像以前一样，可以使用 `"e"` 来完成。如果我们想避免显式地写零，我们可以这样写：

```javascript
let ms = 1e-6; // 1 的左边有 6 个 0
```

#### 进制转换

方法 `num.toString(base)` 返回在给定 `base` 进制数字系统中 `num` 的字符串表示形式。

举个例子：

```javascript
let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111
```

#### 舍入

几个对数字进行舍入的内建函数：

- `Math.floor`

  向下舍入：`3.1` 变成 `3`，`-1.1` 变成 `-2`。

- `Math.ceil`

  向上舍入：`3.1` 变成 `4`，`-1.1` 变成 `-1`。

- `Math.round`

  向最近的整数舍入：`3.1` 变成 `3`，`3.6` 变成 `4`，`-1.1` 变成 `-1`。

- `Math.trunc`（IE 浏览器不支持这个方法）

  移除小数点后的所有内容而没有舍入：`3.1` 变成 `3`，`-1.1` 变成 `-1`。

- `.toFixed(n)` 保留n位小数 返回字符串 自动补0

#### 精度缺失

对小数计算时最好改为整数后计算得到结果再改小数，小数永远都不是你想要的那个

## 数组

### 创建数组

```javascript
let arr = new Array();
let arr = [];
```

### 首尾方法

**作用于数组末端的方法：**

- `pop`

  取出并返回数组的最后一个元素：`let fruits = ["Apple", "Orange", "Pear"]; alert( fruits.pop() ); // 移除 "Pear" 然后 alert 显示出来 alert( fruits ); // Apple, Orange`

- `push`

  在数组末端添加元素：`let fruits = ["Apple", "Orange"]; fruits.push("Pear"); alert( fruits ); // Apple, Orange, Pear`调用 `fruits.push(...)` 与 `fruits[fruits.length] = ...` 是一样的。

**作用于数组首端的方法：**

- `shift`

  取出数组的第一个元素并返回它：`let fruits = ["Apple", "Orange", "Pear"]; alert( fruits.shift() ); // 移除 Apple 然后 alert 显示出来 alert( fruits ); // Orange, Pear`

- `unshift`

  在数组的首端添加元素：`let fruits = ["Orange", "Pear"]; fruits.unshift('Apple'); alert( fruits ); // Apple, Orange, Pear`

`push` 和 `unshift` 方法都可以一次添加多个元素：

```javascript
let fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
alert( fruits );
```

### 遍历

遍历数组最古老的方式就是 `for` 循环：

```javascript
let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}
```

但对于数组来说还有另一种循环方式，`for..of`：

```javascript
let fruits = ["Apple", "Orange", "Plum"];

// 遍历数组元素
for (let fruit of fruits) {
  alert( fruit );
}
```

`for..of` 不能获取当前元素的索引，只是获取元素值，但大多数情况是够用的。而且这样写更短。

技术上来讲，因为数组也是对象，所以使用 `for..in` 也是可以的：

```javascript
let arr = ["Apple", "Orange", "Pear"];

for (let key in arr) {
  alert( arr[key] ); // Apple, Orange, Pear
}
```

但这其实是一个很不好的想法。会有一些潜在问题存在：

1. `for..in` 循环会遍历 **所有属性**，不仅仅是这些数字属性。

   在浏览器和其它环境中有一种称为“类数组”的对象，它们 **看似是数组**。也就是说，它们有 `length` 和索引属性，但是也可能有其它的非数字的属性和方法，这通常是我们不需要的。`for..in` 循环会把它们都列出来。所以如果我们需要处理类数组对象，这些“额外”的属性就会存在问题。

2. `for..in` 循环适用于普通对象，并且做了对应的优化。但是不适用于数组，因此速度要慢 10-100 倍。当然即使是这样也依然非常快。只有在遇到瓶颈时可能会有问题。但是我们仍然应该了解这其中的不同。

通常来说，我们不应该用 `for..in` 来处理数组。

## 可迭代对象

```javascript
//没有迭代器无法使用
//添加Symbol.iterator属性
/*
在迭代的过程中 调用next（）返回值格式为
{done:Boolean, value:any}
done:迭代是否结束 done=true 结束迭代
value 是下一个的值
*/
let range = {
  from: 1,
  to: 5
};

// 1. for..of 调用首先会调用这个：
range[Symbol.iterator] = function() {

  // ……它返回迭代器对象（iterator object）：
  // 2. 接下来，for..of 仅与此迭代器一起工作，要求它提供下一个值
  return {
    current: this.from,
    last: this.to,

    // 3. next() 在 for..of 的每一轮循环迭代中被调用
    next() {
      // 4. 它将会返回 {done:.., value :...} 格式的对象
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

// 现在它可以运行了！
for (let num of range) {
  alert(num); // 1, 然后是 2, 3, 4, 5
}
```

## Map and Set

### Map

个带键的数据项的集合，就像一个 `Object` 一样。 但是它们最大的差别是 `Map` 允许任何类型的键（key）。

它的方法和属性如下：

- `new Map()` —— 创建 map。
- `map.set(key, value)` —— 根据键存储值。
- `map.get(key)` —— 根据键来返回值，如果 `map` 中不存在对应的 `key`，则返回 `undefined`。
- `map.has(key)` —— 如果 `key` 存在则返回 `true`，否则返回 `false`。
- `map.delete(key)` —— 删除指定键的值。
- `map.clear()` —— 清空 map。
- `map.size` —— 返回当前元素个数。

举个例子：

```javascript
let map = new Map();

map.set('1', 'str1');   // 字符串键
map.set(1, 'num1');     // 数字键
map.set(true, 'bool1'); // 布尔值键

// 还记得普通的 Object 吗? 它会将键转化为字符串
// Map 则会保留键的类型，所以下面这两个结果不同：
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3
```

### Map迭代

- `map.keys()` —— 遍历并返回所有的键（returns an iterable for keys），
- `map.values()` —— 遍历并返回所有的值（returns an iterable for values），
- `map.entries()` —— 遍历并返回所有的实体（returns an iterable for entries）`[key, value]`，`for..of` 在默认情况下使用的就是这个。

例如：

```javascript
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// 遍历所有的键（vegetables）
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// 遍历所有的值（amounts）
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// 遍历所有的实体 [key, value]
for (let entry of recipeMap) { // 与 recipeMap.entries() 相同
  alert(entry); // cucumber,500 (and so on)
}
```

### Set

`Set` 是一个特殊的类型集合 —— “值的集合”（没有键），它的每一个值只能出现一次。

它的主要方法如下：

- `new Set(iterable)` —— 创建一个 `set`，如果提供了一个 `iterable` 对象（通常是数组），将会从数组里面复制值到 `set` 中。
- `set.add(value)` —— 添加一个值，返回 set 本身
- `set.delete(value)` —— 删除值，如果 `value` 在这个方法调用的时候存在则返回 `true` ，否则返回 `false`。
- `set.has(value)` —— 如果 `value` 在 set 中，返回 `true`，否则返回 `false`。
- `set.clear()` —— 清空 set。
- `set.size` —— 返回元素个数。

它的主要特点是，重复使用同一个值调用 `set.add(value)` 并不会发生什么改变。这就是 `Set` 里面的每一个值只出现一次的原因。



### Set迭代

我们可以使用 `for..of` 或 `forEach` 来遍历 Set：

```javascript
let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// 与 forEach 相同：
set.forEach((value, valueAgain, set) => {
  alert(value);
});
```

注意一件有趣的事儿。`forEach` 的回调函数有三个参数：一个 `value`，然后是 **同一个值** `valueAgain`，最后是目标对象。没错，同一个值在参数里出现了两次。

`forEach` 的回调函数有三个参数，是为了与 `Map` 兼容。当然，这看起来确实有些奇怪。但是这对在特定情况下轻松地用 `Set` 代替 `Map` 很有帮助，反之亦然。

`Map` 中用于迭代的方法在 `Set` 中也同样支持：

- `set.keys()` —— 遍历并返回所有的值（returns an iterable object for values），
- `set.values()` —— 与 `set.keys()` 作用相同，这是为了兼容 `Map`，
- `set.entries()` —— 遍历并返回所有的实体（returns an iterable object for entries）`[value, value]`，它的存在也是为了兼容 `Map`。



