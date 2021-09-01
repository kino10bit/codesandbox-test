// // テンプレート文字列
// const name = "なまえ";
// const age = "29";

// テンプレート
// const message = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message);

//アロー関数
const func = (str) => {
  return str + "bbb";
};

console.log(func("aaa"));

const func2 = (str1, str2) => str1 + str2;
console.log(func2("abc", "def"));

//分割代入
const prof = {
  name: "キノ",
  age: 30
};
const message2 = `名前は${prof.name}です。年齢は${prof.age}です。`;
console.log(message2);

const { name, age } = prof;
console.log(name + age);

const prof3 = ["aaaA", "bbbB"];
const [name2, name3] = prof3;
console.log(name2 + name3);

//デフォルト値
const funcGuest = (name = "ゲスト") => console.log(`ようこそ。${name}様`);
funcGuest();

//スプレッド構文
//配列の展開
const arr1 = [5, 2, 3];
const plusFunc = (num1, num2) => console.log(num1 + num2);
plusFunc(...arr1);

//まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...numArr] = arr2;
console.log(numArr);

//配列の値渡し
const arr3 = [1, 2, 3, 4, 5];
const arr4 = [6, 7, 8];
const arr5 = [...arr3, ...arr4];
console.log(arr5);

// map,fillerを使った配列の処理
const arrName = ["佐藤", "田中", "三好"];
arrName.map((name, index) => console.log(`${index + 1}番目は${name}です`));

const arrNum = [1, 2, 3, 4, 5, 6];
const evenList = arrNum.filter((num) => {
  return num % 2 === 0;
});
console.log(evenList);
