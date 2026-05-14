
const btn1 = document.getElementById("sev1"); 
const btn2 = document.getElementById("sev2"); 
const btn3 = document.getElementById("sev3"); 
const btn4 = document.getElementById("sev4"); 
const btn5 = document.getElementById("sev5"); 
const services=document.getElementById("services");
const management=document.getElementById("management");
const page=document.getElementById("page");
const campaigns=document.getElementById("campaigns");
const sites=document.getElementById("sites");
const engine=document.getElementById("engine");

btn1.addEventListener("click", () => {
        management.style.display = "block";
        page.style.display = "none";
        campaigns.style.display = "none";
        sites.style.display = "none";
        engine.style.display = "none";
        services.style.display="none"

});
btn2.addEventListener("click", () => {
        management.style.display = "none";
        page.style.display = "block";
        campaigns.style.display = "none";
        sites.style.display = "none";
        engine.style.display = "none";
        services.style.display="none"

});
btn3.addEventListener("click", () => {
        management.style.display = "none";
        page.style.display = "none";
        campaigns.style.display = "block";
        sites.style.display = "none";
        engine.style.display = "none";
        services.style.display="none"

});
btn4.addEventListener("click", () => {
        management.style.display = "none";
        page.style.display = "none";
        campaigns.style.display = "none";
        sites.style.display = "block";
        engine.style.display = "none";
        services.style.display="none"

});
btn5.addEventListener("click", () => {
        management.style.display = "none";
        page.style.display = "none";
        campaigns.style.display = "none";
        sites.style.display = "none";
        engine.style.display = "block";
        services.style.display="none"

});

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlides(n) {
    // إعادة الضبط إذا وصلنا لنهاية الشرائح
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    // إخفاء جميع الشرائح وإزالة الـ active من النقاط
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    // إظهار الشريحة المطلوبة
    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active");
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

// تبديل تلقائي كل 5 ثوانٍ
setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
}, 5000);


function moveSlider(index) {
    const wrapper = document.getElementById('slidesWrapper');
    const dots = document.querySelectorAll('.dot');
    
    // تحريك السلايدر (بنسبة 102% لتغطية العرض مع الـ gap)
    let moveValue = index * 102; 
    wrapper.style.transform = `translateX(${moveValue}%)`;
    
    // تحديث النقاط
    dots.forEach(d => d.classList.remove('active'));
    dots[index].classList.add('active');
}