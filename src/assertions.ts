// type assertionsを定義する
// 型がわからないときや、ライブラリの型定義がおかしい場合などに使います
// 行儀が悪いので基本は使わなくてOKです
const typeAssertionValue = memberName as any


// non null assertion operatorを定義する
// ref: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-
// null, undefinedの警告を無視するオペレーターです
// 行儀が悪いので基本は使いませんが、まれに出番があります
const nonNullAssertion = (arg?: string | null) => {
  arg.toUpperCase()
  // null, undefinedの可能性をもみ消している
  arg!.toUpperCase()
}
