// オブジェクトの型定義

// interfaceを定義する
// 型の変数
interface MemberType {
  // objectのプロパティをreadonlyにできる
  readonly name: string
  age: number
  // country: string | undefined のシンタックスシュガー
  country?: string
}

const member: MemberType = {
  name: "ikeda",
  age: 25,
  // interfaceの定義にないプロパティはエラーとなる
  gender: "男性"
  // countryはundefinedでもエラーとならない
}
member.age = 30
member.name = "hoge"

// interfaceを継承する
interface BasicAddress {
  street: string
  city: string
  postalCode: string
}

interface AddressWithUnit extends BasicAddress {
  // 継承元の型定義を引き継いでいる
  // strert: string
  // city: string
  // postalCode: string
  unit: string
}

// ----------------------------------
// 下記の変数のinterfaceをIdentificationTypeをextendして定義してください
// ----------------------------------

interface IdentificationType {
  id: number
}

const users = [
  {
    id: 1,
    name: "aaaa",
    email: "aaaa@example.com",
    tel: 09012341234
  },
  {
    id: 2,
    name: "bbbb",
    email: "bbbb@example.com"
  }
]

// type aliasを定義する
// 型を変数として定義できる
// interface と type alias の違い
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
type MemberName = string
const memberName: MemberName = "aaaa"
