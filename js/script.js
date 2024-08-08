
document.addEventListener('DOMContentLoaded', () => {
    const about = document.getElementById('about');
    const projects = document.getElementById('projects');
    const blog = document.getElementById('blog');
    const aboutContent = document.getElementById('about-content');

    const links = [about, projects, blog]
    const contents = [aboutContent]

    links.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            contents.forEach(content => content.classList.remove('active'));
            contents[index].classList.add('active');
        })
    })
})