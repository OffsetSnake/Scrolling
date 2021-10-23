const HEIGHT_NUM = 300;

const nav = document.getElementById('link-list');
const btn = document.getElementById('scroll-top');

nav.addEventListener('click', function(event){
	const el = document.getElementById(event.target.dataset.section);
	el.scrollIntoView({behavior: 'smooth'});
});

btn.addEventListener('click', function(){
    window.scrollTo({top:0,behavior: 'smooth'});
});

function visible(){
	if(window.pageYOffset >= HEIGHT_NUM){
		btn.classList.add('visible');
	}else{
		btn.classList.remove('visible');
	}
}

window.onscroll = visible;