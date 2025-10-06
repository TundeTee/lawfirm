// 

const menu = document.querySelector('.mobile');
const nav = document.querySelector('.navbar');
const cancel = document.querySelector('.cancel');

function handleMenuDisplay() {
  if (window.innerWidth <= 769) {
    if (menu) menu.style.display = 'block';
    if (cancel) cancel.style.display = 'none';
    if (nav) nav.classList.remove('active');
  } else {
    if (menu) menu.style.display = 'none';
    if (cancel) cancel.style.display = 'none';
    if (nav) nav.classList.remove('active');
  }
}

window.addEventListener('DOMContentLoaded', handleMenuDisplay);
window.addEventListener('resize', handleMenuDisplay);

if (menu && cancel && nav) {
  menu.addEventListener("click", () => {
    nav.classList.add('active');
    menu.style.display = 'none';
    cancel.style.display = 'block';
  });

  cancel.addEventListener("click", () => {
    nav.classList.remove('active');
    menu.style.display = 'block';
    cancel.style.display = 'none';
  });
}

const formSave = document.getElementById('chatForm');
const form = document.getElementById('chatForm-2');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('chatName').value;
  const email = document.getElementById('chatEmail').value;
  const status = document.getElementById('chatStatus');
   const chatReply = document.querySelector('.chat-reply')
  status.innerHTML = ` <span class="chat-dot"></span>Thank you, ${name}! We'll contact you at ${email}.`;
  setTimeout(() => {
    form.style.display = 'none';
  }, 500);
  this.reset();
});
  
document.getElementById('chatClose').onclick = function() {
  document.getElementById('chatPopup').style.display = 'none';
};

document.getElementById('chat').onclick = function() {
  document.getElementById('chatPopup').style.display = 'block';
};

const emojiBtn = document.getElementById('emojiBtn');
const emojiPicker = document.getElementById('emojiPicker');
const chatMessage = document.getElementById('chatMessage');

emojiBtn.onclick = function() {
  emojiPicker.style.display = emojiPicker.style.display === 'none' ? 'flex' : 'none';
};

emojiPicker.querySelectorAll('span').forEach(function(emoji) {
  emoji.addEventListener('click', function() {
    chatMessage.value += emoji.textContent;
    emojiPicker.style.display = 'none';
    chatMessage.focus();
  });
});

document.getElementById('chatForm').onsubmit = function(e) {
  e.preventDefault();
  const msg = chatMessage.value;
  const fileInput = document.getElementById('chatFile');
  let fileName = fileInput.files[0] ? fileInput.files[0].name : '';
  const chatBody = document.querySelector('.chat-body');
  let html = `<div style="padding:10px 18px;"><strong>You:</strong> ${msg}`;
  if (fileName) html += `<br><small>📎 ${fileName}</small>`;
  html += `</div>`;
  chatBody.innerHTML += html;
  chatMessage.value = '';
  fileInput.value = '';
  form.style.display = 'block';
};

