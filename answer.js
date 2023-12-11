// 第一題
function reverseString(str) {
    // 實作你的解答	
    let string = str.split('').reverse().join('')
    return string
  }
  
  console.log(reverseString("Hello")); // 預期輸出: "olleH” 


// 第二題
// 問題：寫一個JavaScript函式，接受一個數字陣列，並返回該陣列中所有大於5的數字。 
function filterNumbersGreaterThanFive(numbers) {
  // 實作你的解答
  let result = numbers.filter(number => number > 5)
  return result
}

const numbers = [2, 8, 4, 10, 1, 7];
console.log(filterNumbersGreaterThanFive(numbers)); // 預期輸出: [8, 10, 7]


// 第三題
// 問題：重構這段程式碼並說明原因
function formatName(firstName, lastName) {
    let formattedName = firstName?` ${firstName} ${lastName || ''}`: lastName || '';
    return formattedName;

    // 說明
    // 將IF化為三元運算，來減少程式碼數量
    // 用firstName來判斷是否加入firstName，加入後，如有lastName則直接加入，無則為空
    // 若無firstName，則直接加入lastName，若也無lastName，則也為空
}

// 因為我目前學習使用VUE較多，因此React還未熟悉，這邊我使用vue來回答，如爾後有機會，也會繼續學習React，感謝您!

// 第四題
// 問題：在React中，如何根據條件渲染兩種不同的內容？
// 範例：

// function ConditionalRendering({ isLoggedIn }) {
//   // 實作你的條件渲染
// }
<script setup>
let flag = true
    
</script>

<template>
  <h1 v-if="flag">標題一</h1>
  <h1 v-else>標題二</h1>
  <button @click='flag = !flag'>轉換按鈕</button>
</template>

// 第五題
<script setup>
let num = ref(0)
    
</script>

<template>
  <button @click='num++'>增加按鈕</button>
  <button @click='num--'>減少按鈕</button>
</template>



