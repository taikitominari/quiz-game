// 問題の配列
const quiz = [
  {
    question: 'かけっこをしています。あなたはやっとの思いで3位の人を抜きました。今あなたは何位でしょう？',
    answers: [
      '3位',
      '2位',
      '1位',
      '4位',
    ],
    correctText: '大正解！さすがです！',
    mistakeText: '不正解！答えは3位です。3位の人を抜いたら、あなたは当然3位になりますよね',
    correct: '3位',
    hint: '一度実際に想像してみるとひっかけに気づくかも...'
  },
  {
    question: '出題主が小学生の時にやっていたスポーツはなんでしょう？',
    answers: [
      '野球',
      'サッカー',
      '卓球',
      'ラグビー',
    ],
    correctText: '大正解！ たくさん素振りしてマメができました',
    mistakeText: '不正解です！答えは野球です。昔はまん丸坊主でした。',
    correct: '野球',
    hint: '当時はよく手にマメができて大変でした...'
  },
  {
    question: 'ボールペンと消しゴムの値段は合わせて110円。ボールペンは消しゴムより100円高いです。では、消しゴムの値段は？',
    answers: [
      '20円',
      '10円',
      '5円',
      '0円',
    ],
    correctText: '素晴らしい！大正解！ 私は初め10円だと思っていました...',
    mistakeText: '不正解です！答えは5円です。『消しゴム+ボールペン=110円』すなわち、『消しゴム+(消しゴム+100)=110』を満たす消しゴムの値段を求めると５円となります。',
    correct: '5円',
    hint: '『消しゴム+(消しゴム+100円)=110円』と置き換えるとわかりやすいかも！'
  },
];


const qText  = document.getElementById('question');
const $button = document.getElementsByClassName('a-btn');
const counter = document.getElementById('counter');
const correctCount = document.getElementById('correct');
const hint = document.getElementById('hint');
const hintText = document.getElementById('hint-text');
const hintBox = document.getElementById('hint-box');
let quizIndex = 0;
let correctIndex = 0;

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
    correctIndex++;
    correctCount.textContent ='正' + correctIndex;
    window.alert(quiz[quizIndex].correctText);
  }else {
    window.alert(quiz[quizIndex].mistakeText);
  }
  // ヒントリセット
  hintBox.appendChild(hint);
  hintText.textContent = '';

  quizIndex++

  if(quizIndex < quiz.length) {
    setupQuiz();
    counter.textContent = quizIndex + 1 + "問目";
  }else {
    window.alert('これで全問終了です。正解数は' + correctIndex + 'です');
    counter.textContent = '1問目';
    quizIndex = 0;
    correctIndex = 0;
    correctCount.textContent = '正' + correctIndex;
    setupQuiz();
  };
};

// ヒントの表示
hint.addEventListener('click' , () => {
  let result = confirm('ヒントを表示しますか？');
  if(result) {
    hintText.textContent = quiz[quizIndex].hint;
    hint.remove();
  };
});

// ユーザーが押したボタンのイベント
let handlerIndex = 0;
while (handlerIndex < $button.length) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

