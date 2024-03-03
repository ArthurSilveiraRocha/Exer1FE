const chatBoxInput = document.querySelector('.chat-input input[type="text"]');
const sendButton = document.querySelector('.chat-input button');
const chatHistory = document.querySelector('.chat-messages');



// Add event listener to send button
sendButton.addEventListener('click', () => {
  if (chatBoxInput.value.trim() !== '') {
    const message = document.createElement('div');
    message.classList.add('message');
    message.classList.add('from-agent');
    const contentElement = document.createElement('span');
    contentElement.classList.add('content');
    contentElement.textContent = chatBoxInput.value;
    message.appendChild(contentElement);
    chatHistory.appendChild(message);
    chatHistory.scrollTop = chatHistory.scrollHeight;
    chatBoxInput.value = '';
  }
});

// Add event listener to enter key
chatBoxInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    if (chatBoxInput.value.trim() !== '') {
      const message = document.createElement('div');
      message.classList.add('message');
      message.classList.add('from-customer');
      const contentElement = document.createElement('span');
      contentElement.classList.add('content');
      contentElement.textContent = chatBoxInput.value;
      message.appendChild(contentElement);
      chatHistory.appendChild(message);
      chatHistory.scrollTop = chatHistory.scrollHeight;
      chatBoxInput.value = '';
    }
  }
});

