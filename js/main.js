const question = "ゲーム市場、最も売れたゲーム機はどれ?";
const answers = [
  'スーパファミコン',
  'プレステーション２',
  'ニンテンドースイッチ',
  'ニンテンドウーDS',
];

const correct = 'ニンテンドーDS'

const qText  = document.getElementById('question');
const aBtn = document.getElementsByClassName('a-btn');
qText.textContent = question;

let num = 0;

while( num < aBtn.length) {
  aBtn[num].textContent = answers[num];
  num++;
  console.log(aBtn);
}

aBtn[0].addEventListener('click', () => {
  if(aBtn[0] === correct) {
    alert('正解！');
  }else {
    alert('不正解');
  }
});