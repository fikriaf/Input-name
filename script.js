var displayName = document.getElementById('displayName');
var nameInput = document.getElementById('nameInput');
nameInput.addEventListener('input', function () {
    displayName.textContent = nameInput.value ? nameInput.value : 'Masukkan Nama Anda';
});
