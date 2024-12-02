const displayName = document.getElementById('displayName') as HTMLHeadingElement;
const nameInput = document.getElementById('nameInput') as HTMLInputElement;

nameInput.addEventListener('input', () => {
    displayName.textContent = nameInput.value ? nameInput.value : 'Masukkan Nama Anda';
});
