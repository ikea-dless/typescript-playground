// 関数の型定義について

// numberが引数の型定義
// stringが関数の返り値の型定義
const arrowFun = (value: number): string => {
  return `${value}`
}

function generalFun(value: number): string {
  return `${value}`
}

// 型を別途定義することもできます
type FunctionType = (value: number) => string
// valueの型を見ると、numberになっていることがわかります
const arrowFun2: FunctionType = (value) => `${value}`

// -----------------------------------------------
// 関数の処理は変えずに型を定義して、エラーを消してください
// -----------------------------------------------

// 引数で渡される配列の値をランダムに1つ返す
const sample = (values) => {
  return values[Math.floor(Math.random() * values.length)]
}

sample([1,2,3])
