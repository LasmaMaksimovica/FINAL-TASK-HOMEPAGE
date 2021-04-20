// chat

function submitForm(submitEvent) {
    submitEvent.preventDefault();
    const usernameInputElement = document.getElementById('input-username-field');
    const username = usernameInputElement.value;
    if (username === '') {
        alert('Please fill in the username');
        return false;
    }

    const newMessageInputElement = document.getElementById('new-message-input-field');
    const newMessage = newMessageInputElement.value;
    if (newMessage === '') {
        alert('Please write something in message');
        return false;
    }

    const d = new Date();
    const dateString = ("0" + d.getDate()).slice(-2) + "." + ("0" + (d.getMonth() + 1)).slice(-2) + "." +
        d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);

    const wholeMessage = `
    <div class="sent-message-wrapper mb-0 px-4 py-3" id="sent-message-wrapper">
        <h5 class="sent-message username mb-0 "> ${username}<span
            class="sent-message-timestamp px-3">${dateString}</span> </h5>
        <p class="sent-message-text mb-0">${newMessage}</p>
        </div>
`;
    const wholeMessageElement = document.getElementById('chat-col');
    wholeMessageElement.innerHTML += wholeMessage;
    usernameInputElement.value = '';
    newMessageInputElement.value = '';
};

