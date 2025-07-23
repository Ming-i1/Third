// 读取本地questions.txt
fetch('questions.txt')
  .then(response => response.text())
  .then(text => {
    const questions = text.split('\n').filter(line => line); // 分割并过滤空行
    const container = document.getElementById('quiz-container');
    
    questions.forEach((item, index) => {
      const [question, answer] = item.split('|');
      const div = document.createElement('div');
      div.className = 'question';
      div.innerHTML = `
        <p><strong>问题${index+1}：</strong>${question}</p >
        <button onclick="showAnswer(this)">查看答案</button>
        <div class="answer" style="display:none">答案：${answer}</div>
      `;
      container.appendChild(div);
    });
  });

// 显示答案函数
function showAnswer(btn) {
  const answerDiv = btn.nextElementSibling;
  answerDiv.style.display = 'block';
}