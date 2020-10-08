// literal typeを定義する
// リテラルを型として使うことができます
let strLiteralValue: "hoge" = "hoge"
strLiteralValue = "fuga"
let numLiteralValue: 123 = 123
numLiteralValue = 456
let boolLiteralValue: true = true
boolLiteralValue = false

// 型推論時にリテラルはまずリテラル型として解釈されます
// ↓は"hoge"型
const sampleLiteralValue = "hoge"
// string型の変数に"hoge"型の変数を代入できます
// それぞれのリテラル型に変換する機能があります(widening literal types)
// sampleLiteralValueのconstをletに変えて推論結果を見ると面白いかもしれません
const sampleLiteralValue2: string = sampleLiteralValue

// union typeと組み合わせて使うことが多い印象です
type GenderType = "male" | "female"
let gender: GenderType = "male"
gender = "female"
gender = "hoge"
