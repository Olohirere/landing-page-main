/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */
//nav global variable
const navigation = document.getElementById('navbar__list');
//section global variable
const sections = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
for (const section of sections) {
    const li = document.createElement("li");
	const a = document.createElement("a");
    li.className = "navbar__menu";
    a.textContent = section.dataset.nav;
    a.href = `#${section.id}`;
	a.className = "navbar__link"
    li.appendChild(a);
    navigation.appendChild(li);
};



// Add class 'active' to section when near top of viewport
function menuColourChanger(){
	for (let section of sections){
		let sb = section.getBoundingClientRect()
		let ib = navigation.getBoundingClientRect().bottom
		let top = window.scrollY
		console.log(sb.y, window.scrollY, ib)
		if(sb.y>ib && sb.y<window.scrollY){
			// console.log(section)
			let href = "a[href='#" + section + "']"
			// let link = document.getElementsByClassName("navbar__link").getAttribute("href")
			// console.log(link)

			var links = document.getElementsByTagName('a'), hrefs = [];
			for (var i = 0; i < links.length; i++){
				links[i].classList.remove("your-active-class")
			}
			for (var i = 0; i < links.length; i++){
				let splithref = links[i].href.split("#")
				console.log(splithref[1])
				let link_href= splithref[1]
				console.log(section.id, link_href)
				
				
				if(section.id===link_href){
					links[i].classList.add("your-active-class")
					section.classList.add("your-active-class")
					break;
				}
			}
		}

// 		if (ib.y>=sb.y && ib.y+ib.height<=sb.y + sb.height){
// let color = section.dataset.color
// switch (color){
// 	case 'light':
// 		item.classList.add('your-active-class')
// 		break
// 		case 'dark':
// 			item.classList.remove('your-active-class')
// 			break
// }
// 		}
			
		
	}
}
document.addEventListener('scroll', menuColourChanger)


// Scroll to anchor ID using scrollTO event








/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 



// Scroll to section on link click

// Set sections as active