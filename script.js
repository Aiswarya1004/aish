<script>
    const bar = document.getElementById('bar');
    const navbar = document.getElementById('navbar');

    if (bar) {
        bar.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }
</script>
