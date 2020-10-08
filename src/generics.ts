// genericsを定義する
// 実行時に型を決定したい場合などに使います

// 引数をそのまま帰す関数
// 渡される引数は想定できないので、ジェネリクスを使う
const identity = <T>(arg: T): T => {
  return arg
}

// 関数実行時にnumber型ですよと教える
// T = numberと解釈する
// ↓と同じ意味になる
// const identity = (arg: number): number => {}
identity<number>(1)

// もちろん推論もしてくれる
// 引数がnumber(literal type)なので、推論した結果↓と同じ意味になる
// const identiry = (arg: 10): 10 => {}
// 10はnumberだと思って大丈夫です
identity(10)

// ------------------------------------------------------------
// ここで、functionTypeの章で型を書いた関数にジェネリクスをつけてください
// 引数は配列ですが、なんの型の配列なのかを実行時に決定してください
// ------------------------------------------------------------

const sample = (values) => {
  return values[Math.floor(Math.random() * values.length)]
}

sample([1,2,3])
sample(["a", "b", "c"])

// advanced
//
// オブジェクトから特定のプロパティの値を1つ抜き出す関数をgenericsを浸かって書いてください

const getValue = (obj, key) => {
  return obj[key]
}

getValue({ hoge: "hoge", fuga: 123 }, "hoge")
// ↓存在しないプロパティなので、エラーになることを期待している
getValue({ hoge: "hoge", fuga: 123 }, "piyo")

// ヒント
// keyofという構文を使うと、オブジェクトのキーがunion typeで取れます
type KeyOfType = keyof {hoge: string, fuga: string}
