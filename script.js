const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Invalid Password',
    'Update Your Password'
];

const colors = [
    '#997cb4',
    '#5b4a6e',
    '#38282b',
];

const createToast = () => {
    const toast = document.createElement('div');
    toast.innerText = messages[Math.floor(Math.random() * messages.length)];
    toast.style.backgroundColor =  colors[Math.floor(Math.random() * colors.length)];
    toast.classList.add('toast');
    toasts.appendChild(toast);

    setTimeout(() => {
        toasts.removeChild(toast)
    }, 2000);
}

toasts,addEventListener('click', () => createToast())