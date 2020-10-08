// 基本の型
// ref: https://www.typescriptlang.org/docs/handbook/basic-types.html

// -------------------------------------
// 値を変えずに型エラー(赤線)を解消してください
// -------------------------------------

// string
let strValue: boolean = "str"

// number
let numValue: string = 1

// boolean
let boolValue: number = true

// array
let strAry: string = ["str", "ary"]
let numAry: number = [1, -1]

// tuple
// ほとんど使いません
let tupleValue: Array<string> = ["tuple", 1]

// enum
// あまり使わないので、TSにあるんだ〜くらいの解釈でOKです
enum Color {
  Black = 0,
  White = 1
}

// any
let anyValue = "any"
anyValue = 1
anyValue = true

// unknown
// あまり使わないので、こんな型があるんだ〜くらいの解釈でOKです
let unknownValue: unknown = ""
// type guardを通ると型を解釈してくれる
// ↓はstring型に解釈される
// const value = typeof unknownValue === "string" ? unknownValue : ""

// void
function voidFunc(): string {
  console.log("void")
}

// null, undefined
let nullValue: undefined = null
let undefValue: null = undefined

// never
// 到達不可な型
function neverFunc(): never {
  throw new Error
}

// object
// 基本使わなくて良いです
let objValue: object = {
  name: "hoge"
}
