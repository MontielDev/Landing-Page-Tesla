import Logo from './Logo.astro';

<Fragment>
<header id="landing-header" class="py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-white">

<div class="flex flex-grow basis-0">
<Logo />
</div>

<nav>
<ul class="flex text-sm [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
<li><a href="#">Model S</a></li>
<li><a href="#">Model 3</a></li>
<li><a href="#">Model X</a></li>
<li><a href="#">Model Y</a></li>
<li><a href="#">Powerwall</a></li>
<li><a href="#">Carga</a></li>
</ul>
</nav>

<nav class="flex flex-grow justify-end basis-0">
<ul class="flex text-sm [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
<li><a href="#">Soporte</a></li>
<li><a href="#">Tienda</a></li>
<li><a href="#">Cuenta</a></li>
<li><a href="#">Menú</a></li>
</ul>
</nav>

</header>

<script>
{() => {
const header = document.querySelector('#landing-header') as HTMLElement;
const observerOptions = {
root: null, // default
rooMargin: '0px', // en cuanto se vea el elemento
treshold: 0.9 //porcentaje de visibilidad
};

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
const { isIntersecting } = entry;
if (isIntersecting) {
const color = entry.target.getAttribute("data-header-color");
header.style.color = color;
}
});
}, observerOptions);

const sectionElements = document.querySelector(".landing-section");
sectionElements.forEach((section) => observer.observe(section));
}}
</script>
</Fragment>;
