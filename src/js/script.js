const reviews = [
	{
		name:'James Brown, Influencer',
		body:`
		“Kate’s courses are a game changer.
		She’s thorough, organized, and explains things in 
		a no-nonsense way that makes it easy for anyone—beginners 
		to experts—to learn something from her courses and take their
		 game to the next level.”`
	},
	{
		name:'Emily Rudd',
		body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
		sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
		nisi ut aliquip ex ea commodo consequat.`
	},
	
]

const burger = document.querySelector('.burger')
const nav = document.querySelector('.header__row-nav')
const navModal = document.querySelector('.nav-modal')
const courses = document.querySelector('.features')
const workshops = document.querySelector('.workshops')
const blog = document.querySelector('.reviews')
const about = document.querySelector('.about')
const contact = document.querySelector('.footer')
const reviewsBtns = document.querySelector('.reviews__select-row')


window.innerWidth > 670 
	? nav.addEventListener('click',(e) => scrollNavigation(e))
	: navModal.addEventListener('click',(e) => scrollNavigation(e,true))
	 
const toggleModal = () => {
	burger.classList.toggle('close')
	navModal.classList.toggle('show')
	document.body.classList.toggle('offScroll')
}

const scrollNavigation = (target,device = false) => {
	target.preventDefault()
	if(device){
		toggleModal()
	}
	if(target.target.text === 'Courses'){
		courses.scrollIntoView({behavior:'smooth',block:'start'})
	}
	if(target.target.text === 'Free Workshops'){
		workshops.scrollIntoView({behavior:'smooth',block:'start'})
	}
	if(target.target.text === 'Blog'){
		blog.scrollIntoView({behavior:'smooth',block:'start'})
	}
	if(target.target.text === 'About'){
		about.scrollIntoView({behavior:'smooth',block:'start'})
	}
	if(target.target.text === 'Contact'){
		contact.scrollIntoView({behavior:'smooth',block:'start'})
	}
}

burger.addEventListener('click',toggleModal)

reviewsBtns.addEventListener('click',(e)=>{
	const body = blog.children[0].children[1]
	const name = blog.children[0].children[2]
		
		if(e.target.classList.contains('reviews__btn')){
			Array.from(reviewsBtns.children).forEach((btn)=>{
				btn.classList.remove('selected')
			})
			e.target.classList.add('selected')
		}
		
		reviews.forEach((review,index)=>{
			if(index === parseInt(e.target.getAttribute('data-index'))){
				body.textContent = review.body
				name.textContent = review.name
			}
		})
})