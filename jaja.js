document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ff8c00';
        link.style.textShadow = '0 0 10px #ff8c00, 0 0 20px #ff8c00';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '#c4c4c4';
        link.style.textShadow = 'none';
    });
});

const buttons = document.querySelectorAll('button, a');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = window.innerHeight / 1.3;
        if (sectionTop < sectionVisible) {
            section.classList.add('fade-in');
        }
    });
});

document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
});

document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", e => {
        document.querySelectorAll("nav ul li a").forEach(item => item.classList.remove("active"));
        e.target.classList.add("active");
    });
});

window.addEventListener("load", () => {
    document.querySelectorAll(".office-image").forEach(img => {
        img.style.opacity = 0;
        img.style.transition = "opacity 2s ease, transform 1s ease";
        setTimeout(() => {
            img.style.opacity = 1;
            img.style.transform = "scale(1.05)";
        }, 300);
    });
});

document.querySelector(".office-image").addEventListener("mousemove", e => {
    const img = e.target;
    const rect = img.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    img.style.transform = `rotateX(${y * 20}deg) rotateY(${x * 20}deg) scale(1.1)`;
});

document.querySelector(".office-image").addEventListener("mouseleave", e => {
    e.target.style.transform = "scale(1)";
});
