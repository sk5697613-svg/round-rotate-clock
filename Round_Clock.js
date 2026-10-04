setInterval(() => {
    const hour = document.querySelector('.hour');
    const minute = document.querySelector('.minute');
    const second = document.querySelector('.second');

    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let hourRotation = 30 * h + m / 2;
    let minuteRotation = 6 * m;
    let secondRotation = 6 * s;

    hour.style.transform = `translateX(-50%) rotate(${hourRotation}deg)`;
    minute.style.transform = `translateX(-50%) rotate(${minuteRotation}deg)`;
    second.style.transform = `translateX(-50%) rotate(${secondRotation}deg)`;
}, 1000);
