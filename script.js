document.addEventListener('DOMContentLoaded', () => {
    // 联系表单处理
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('感谢您的留言！我们会尽快回复您。');
            contactForm.reset();
        });
    }

    // 添加对话框控制逻辑
    const fixedDialog = document.getElementById('fixed-dialog');
    const closeDialogBtn = document.getElementById('close-dialog');

    // 显示对话框（页面加载5秒后）
    if (fixedDialog) {
        setTimeout(() => {
            fixedDialog.style.display = 'block';
        }, 5000);
    }

    // 关闭对话框
    if (closeDialogBtn) {
        closeDialogBtn.addEventListener('click', () => {
            if (fixedDialog) {
                fixedDialog.style.display = 'none';
            }
        });
    }

    // AI对话框功能
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-message');

    function addMessage(content, isUser = false) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add(isUser ? 'user-message' : 'ai-message');
        messageElement.textContent = content;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getAIResponse(message) {
        // 这里应该是调用AI API的地方
        // 现在我们只返回一个简单的回复
        return `您说的是："${message}"。我是一个简单的AI助手，无法真正理解您的问题。`;
    }

    function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, true);
            userInput.value = '';

            // 模拟AI响应
            setTimeout(() => {
                const aiResponse = getAIResponse(message);
                addMessage(aiResponse);
            }, 1000);
        }
    }

    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // 添加AI助手文字的打字机效果
    const aiAssistantText = document.getElementById('ai-assistant-text');
    const text = aiAssistantText.textContent;
    aiAssistantText.textContent = '';
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            aiAssistantText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();

    // 添加功能按钮的点击事件
    const faqBtn = document.getElementById('faq-btn');
    const contactBtn = document.getElementById('contact-btn');

    faqBtn.addEventListener('click', () => {
        alert('这里可以显示常见问题列表或打开FAQ页面');
    });

    contactBtn.addEventListener('click', () => {
        // 将滚动到联系表单改为打开AI聊天框
        const aiChatBox = document.getElementById('ai-chat-box');
        if (aiChatBox) {
            aiChatBox.style.display = 'block';
        }
    });

    // 其他现有的代码保持不变
});

console.log("新项目已启动！");