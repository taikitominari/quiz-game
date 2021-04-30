// 問題の配列
const quiz = [
  {
    question: 'ゲーム史上、最も売れたゲーム機はどれ?',
    answers: [
      'スーパファミコン',
      'プレステーション２',
      'ニンテンドースイッチ',
      'ニンテンドーDS',
    ],
    correct: 'ニンテンドーDS'
  },
  {
    question: '今日の朝ごはんで美味しいと思ったものは次のうちどれ',
    answers: [
      'ヤクルト',
      'パン',
      '昨日の残りのカレー',
      '日にちが立ちすぎてパッサパッサになってしまったエアリアル',
    ],
    correct: '日にちが立ちすぎてパッサパッサになってしまったエアリアル'
  },
  {
    question: '私のペットのトイプードルの名前は',
    answers: [
      'ヤンヤンつけぼう',
      'マロンちゃん',
      'ぷぷ',
      'ララ',
    ],
    correct: 'ぷぷ'
  },
];


const qText  = document.getElementById('question');
const $button = document.getElementsByClassName('a-btn');
const counter = document.getElementById('counter');
let quizIndex = 0;


// 問題文,ボタンのtextを入れる
const setupQuiz = () => {
  qText.textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < $button.length) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  };
};
setupQuiz();


// 回答の合否判定,次の問題へ移行
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
  }else {
    window.alert('不正解');
  }
  quizIndex++

  if(quizIndex < quiz.length) {
    setupQuiz();
    counter.textContent = quizIndex + 1 + "問目";
  }else {
    window.alert('終了です');
    counter.textContent = '1問目';
    quizIndex = 0;
    setupQuiz();
  };
};

// ユーザーが押したボタンのイベント
let handlerIndex = 0;
while (handlerIndex < $button.length) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

