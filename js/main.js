const navItems = document.querySelector(".nav_items");
const openNavBtn = document.querySelector("#open_nav-btn");
const closeNavBtn = document.querySelector("#close_nav-btn");
const logobar = document.querySelector(".logobar");
const nav = document.querySelector("nav");

const topbar = document.querySelector(".topbar");
const topbarUl = document.querySelector(".topbar ul");
const expandBtn = document.querySelector(".nav_btn-open");
const closeBtn = document.querySelector(".nav_btn-close");




const openBar = () =>{
    topbar.style.top = '35%';
    topbarUl.style.top = '35%';
    expandBtn.style.display= 'none';
    closeBtn.style.display= 'block';
}

const closeBar = () =>{
    topbar.style.top = '-600px';
    topbarUl.style.top = '-600px';
    expandBtn.style.display= 'block';
    closeBtn.style.display= 'none';
}

expandBtn.addEventListener('click', openBar);
closeBtn.addEventListener('click', closeBar);



window.addEventListener("scroll", () =>{
    
    if(window.scrollY >= 20){
        topbar.style.display = "none";
        logobar.classList.add('add_bg');
        nav.classList.add('add_bg');
        expandBtn.style.display= 'block';
        closeBtn.style.display= 'none';
    } else{
        topbar.style.display = "block";
        logobar.classList.remove('add_bg');
        nav.classList.remove('add_bg');
    }
});



const openNav = () =>{
    navItems.style.left = '0';
    nav.classList.add('active');
    openNavBtn.style.display= 'none';
    closeNavBtn.style.display= 'inline-block';
}

const closeNav = () =>{
    navItems.style.left = '-115%';
    nav.classList.remove('active');
    openNavBtn.style.display= 'inline-block';
    closeNavBtn.style.display= 'none';
}

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);


// const sidebar = document.querySelector('aside');
// const showSidebarBtn = document.querySelector('#show_sidebar_btn');
// const hideSidebarBtn = document.querySelector('#hide_sidebar_btn');


// const showSidebar = () =>{
//     sidebar.style.left = '0';
//     showSidebarBtn.style.display= 'none';
//     hideSidebarBtn.style.display= 'inline-block';
// }
// const hideSidebar = () =>{
//     sidebar.style.left = '-100%';
//     showSidebarBtn.style.display= 'inline-block';
//     hideSidebarBtn.style.display= 'none';
// }


// showSidebarBtn.addEventListener('click', showSidebar);
// hideSidebarBtn.addEventListener('click', hideSidebar);
