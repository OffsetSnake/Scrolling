const nav = document.getElementById('link-list');

nav.onclick = function(event){
	event.preventDefault();
	const el = document.getElementById(event.target.dataset.section);
	el.scrollIntoView({behavior: 'smooth'});
};

const btn = document.getElementById('scroll-top');
function visible(){
	if(window.pageYOffset >= 300){
		btn.classList.add('visible');
	}else{
		btn.classList.remove('visible');
	}
}
btn.onclick = function(){
	window.scrollTo({top:0,behavior: 'smooth'});
} 
window.onscroll = visible;