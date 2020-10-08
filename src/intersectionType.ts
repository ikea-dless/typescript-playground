// intersection typeを定義する
// それぞれの型定義をまとめた型を定義できます

interface Colorful {
  color: string
}
interface Circle {
  radius: number
}

// 交差させた結果
// type = {
//   color: string
//   radius: number 
// }
type ColorfulCircle = Colorful & Circle

const colorfulCircle: ColorfulCircle = {
  color: "red",
  radius: 1
}

const colorfulCircle2: ColorfulCircle = {
  radius: 1
}

const colorfulCircle3: ColorfulCircle = {
  color: "red",
  radius: 1,
  shadow: 1
}
