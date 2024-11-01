window.onload = function() {
    const profilePhoto = document.getElementById('profile-photo');
    const dropdown = document.getElementById('dropdown');

    profilePhoto.addEventListener('click', function (event) {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        event.stopPropagation();
    });

    document.addEventListener('click', function (event) {
        if (!dropdown.contains(event.target) && event.target !== profilePhoto) {
            dropdown.style.display = 'none';
        }
    });
}