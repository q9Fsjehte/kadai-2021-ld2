const firstName = "岸田"
const familyName = "秀樹"
console.log(firstName + " " + familyName)

const sum = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
console.log(sum)
const dog = false
const cat = false
console.log(dog || cat) //犬または猫を飼っているかどうか
console.log(dog && cat) //犬と猫の両方を飼っているかどうか
console.log(!(dog || cat)) //犬も猫も飼っていないかどうか
console.log(!dog && !cat) //別解

//おまけ
console.log(cat && !dog)// 猫は飼っているが犬は飼っていない
console.log(dog && !cat)// 犬を飼っているが猫を飼っていない