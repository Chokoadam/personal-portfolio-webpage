document.addEventListener('DOMContentLoaded', function () {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            tabLinks.forEach(link => link.classList.remove('active'));
            tabContents.forEach(content => content.style.display = 'none');

            this.classList.add('active');
            const tabID = this.getAttribute('data-tab');
            document.getElementById(tabID).style.display = 'block';
        });
    });
});
