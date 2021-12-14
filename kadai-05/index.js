const profile ={
    name: "山田太郎",
    age: 23,
    hobby: "テニス",
    major: "地理学"
}
const dictionary = {
    name: "名前",
    age: "年齢",
    hobby: "趣味",
    major: "専攻"
}
const keys = Object.keys(profile)
console.log(keys)
for (const key of keys){
    const value = profile[key]
    const key_in_japanese = dictionary[key]
    console.log(`私の${key_in_japanese}は${value}です。`)
}