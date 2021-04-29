const question = "ゲーム史上、最も売れたゲーム機はどれ?";
const answers = [
  'スーパファミコン',
  'プレステーション２',
  'ニンテンドースイッチ',
  'ニンテンドーDS',
];

const correct = 'ニンテンドーDS';

const qText  = document.getElementById('question');
const $button = document.getElementsByClassName('a-btn');
qText.textContent = question;

// answersを各ボタンに入れる
let buttonIndex = 0;
while( buttonIndex < $button.length) {
  $button[buttonIndex].textContent = answers[buttonIndex];
  buttonIndex++;
}

// 回答の合否判定
const clickHandler = (e) => {
  if(correct === e.target.textContent) {
    window.alert('正解！');
  }else {
    window.alert('不正解');
  }
};

let handlerIndex = 0;
while (handlerIndex < $button.length) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

