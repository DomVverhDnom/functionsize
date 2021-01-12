const btn = document.querySelector('.j-btn-test');

btn.addEventListener('click',()=>{
    alert(`Ширина экрана ${window.screen.width}, высота экрана ${window.screen.height}`);
    alert(`Данные с учетом прокрутки. Ширина ${window.innerWidth},высота ${window.innerHeight} `)
})