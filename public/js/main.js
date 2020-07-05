import animationsJson from './animations.js'

// normally set to ''
let theme = $('input[name="themes"]:checked').val()
document.body.className = theme

/// CONSTRUCTORS ///

// Creates an object of the class animation to be placed on the page
// weapons needs to be sent in as an array
function Anim(anim) {
	this.category = anim.category; // section on the page to append to
	this.feClass = anim.feClass; // name of the class
	this.download = anim.download; // for download
	this.gender = anim.gender; // sorting option
	this.name = anim.name; // identifier
	this.dlName = anim.dlName; // dlname
	this.credit = anim.credit; // creators
	this.tier = anim.tier;
	this.weapons = anim.weapons; //array containing all weapons, stills, and gifs

	console.log(anim)
	// Custom card design
	this.makeCard = function (isSearch) {

		// weapon and icon sort
		const order = ["Sword", "Knife", "Lance", "Axe", "Handaxe", "Bow", "Magic", "Staff", "Refresh", "Monster", "Dragonstone", "Legendary", "Unarmed"];
		this.weapons.sort(function (a, b) {
			return order.indexOf(a.type) < order.indexOf(b.type) ? -1 : 1;
		});

		//All Image data
		const rootImagePath = 'https://drive.google.com/uc?export=view&id='
		const stillImage = this.weapons && this.weapons[0] && this.weapons[0].static ? rootImagePath + this.weapons[0].static : "img/404.png"
		const activeImage = this.weapons && this.weapons[0] && this.weapons[0].active ? rootImagePath + this.weapons[0].active : "img/404.png"
		const animImg = $("<img>")
			.addClass("gif")
			.attr({
				id: this.dlName.split(' ').join(''), //needed for targeting with img icons
				src: stillImage,
				"data-weapon": this.weapons && this.weapons[0] && this.weapons[0].type || '', //holds current weapon displayed
				"data-state": "still",
				"data-animate": activeImage,
				"data-still": stillImage
			});
		if (this.category === 'SPL') {
			animImg.addClass("spellGif");
		} else if (this.category === 'SKL') {
			animImg.addClass("skillGif");
		};

		let genderI;
		switch (this.gender) {
			case "U":
				genderI = "genderIcon fa fa-venus-mars";
				break;
			case "F":
				genderI = "genderIcon fa fa-venus";
				break;
			case "M":
				genderI = "genderIcon fa fa-mars";
				break;
		};

		// Organizing Middle Row data
		const nameDiv = $("<span>")
			.addClass("midName")
			.html(` ${this.name}`);

		const genderDiv = $("<a>")
			.addClass(`${genderI} animName`)
			.attr({
				"href": this.download
			})
			.append(nameDiv);

		const classDiv = $("<p>")
			.addClass('animClass')
			.html(`${this.feClass} ${this.tier && `- ${this.tier}`}`);

		//Link and name of animation
		const middleRow = $("<div>")
			.addClass("text-center pt-1")
			.append(isSearch && classDiv, genderDiv);

		// insert weapon icons
		const icons = $("<span>")
			.addClass("iconmt");
		if (this.category !== "SPL" && this.category !== "SKL") {
			this.weapons.forEach((weapon => {
				const rootImagePath = 'https://drive.google.com/uc?export=view&id='
				const weaponStillImage = weapon.static ? rootImagePath + weapon.static : "img/404.png"
				const weaponActiveImage = weapon.active ? rootImagePath + weapon.active : "img/404.png"
				const icon = $("<img>")
					.addClass("imgIcon mt-0")
					.attr({
						src: "img/" + weapon.type + ".png",
						"data-animate": weaponActiveImage,
						"data-still": weaponStillImage,
						"data-target": this.dlName.split(' ').join('')
					});
				icons.append(icon);
			}));
			icons.append("<br>");
		};

		//Author
		const authorDiv = $("<span>")
			.html(this.credit.join(', '))
			.addClass("authorText text-center");

		// DIV ALIGNMENT //

		const bottomRow = $("<div>")
			.addClass("col-12 bottomRow px-0")
			.append(icons, authorDiv);

		// Holds mid and bottomRow for uniform bg.
		const textSection = $("<div>")
			.addClass("cardbg mx-auto")
			.append(middleRow, bottomRow);

		// All together
		const cardParent = $("<div>")
			.append(animImg, textSection);

		const colDiv = $("<div>")
			.addClass("col-xl-4 col-md-6 col-sm-12 my-2")
			.append(cardParent);

		return colDiv;
	};
};

/// END CONSTRUCTORS ///

/// FUNCTIONS ///

// Creates a placeholder div during loading
const makePlaceholder = (searchTerm) => {
	const headerDiv = $("<div>")
		.html(`Loading ${searchTerm}...`)
		.addClass("col-12 text-center loadingHead");

	const placeholderBody0 = $("<div>")
		.addClass("col-xl-4 col-md-6 col-sm-12 my-2")
		.append("<div><div class='mx-auto content-placeholder'></div></div>");
	const placeholderBody1 = $("<div>")
		.addClass("col-xl-4 col-md-6 col-sm-12 my-2")
		.append("<div><div class='mx-auto content-placeholder'></div></div>");
	const placeholderBody2 = $("<div>")
		.addClass("col-xl-4 col-md-6 col-sm-12 my-2")
		.append("<div><div class='mx-auto content-placeholder'></div></div>");

	const placeholderDiv = $("<div>")
		.addClass("placeholder row my-2 sectMain text-center")
		.append(placeholderBody0, placeholderBody1, placeholderBody2)
		.prepend(headerDiv);

	$("#mainBody").prepend(placeholderDiv);
};

// Removes any created placeholders. Not ideal functionality due to removing ALL other placeholders --stopgap
const removePlaceholder = () => {
	$(".placeholder").remove();
}

//Initializes the div for holding all the anims and then makes a card for all relevant anims.
function makeAnimRow(anim, searchName, isSearch) {
	//console.log(anim);

	// reorders the anims by gender for the selected class.
	if (searchName === 'Anima' || searchName === 'Light' || searchName === 'Dark' || searchName === 'Other') {
		anim.sort((a,b) => {
			const x = a.name
			const y = b.name
			if (x < y) {
				return -1;
			}
			if (x > y) {
				return 1;
			}
			return 0;
		})
	} else if (searchName === 'Skill') {
		anim.sort((a,b) => {
			const x = a.name
			const y = b.name
			if (x < y) {
				return -1;
			}
			if (x > y) {
				return 1;
			}
			return 0;
		})	
	} else {
		anim.sort((a, b) => {
			const x = a.category;
			const y = b.category;
			if (x < y) {
				return -1;
			}
			if (x > y) {
				return 1;
			}
			if (a.gender < b.gender) {
				return -1;
			}
			if (a.gender > b.gender) {
				return 1;
			}
			return 0;
		});	
	}

	let classRow = `${searchName}Row`.split(' ').join('');

	let parentDiv = $("<div>")
		.addClass(classRow + " row my-2 sectMain text-center");

	// Title div. Main function is displaying class name for selected group
	const headerDiv = $("<div>")
		.html(searchName)
		.addClass("col-12 text-center sectHead")
		.attr({
			"data-prof": "." + classRow
		});

	// Init subrow that contains all the anim cards
	for (let i = 0; i < anim.length; i++) {
		const tempAnim = new Anim(anim[i]);
		parentDiv.append(tempAnim.makeCard(isSearch));
	};

	if (!anim.length) {
		parentDiv = noResults(parentDiv);
	};

	parentDiv.prepend(headerDiv);

	//Send compiled data to html
	removePlaceholder();
	$("#mainBody").prepend(parentDiv);
};

// Creates the no results Div
const noResults = parentDiv => {
	const bodyDiv = $("<div>")
		.addClass("col-12 text-center my-1")
		.html("No results found. Please revise your search.");

	const noResultsImg = ["img/elicry.jpg", "img/sharcry.png", "img/faeangry.jpg", "img/nergal.png"];
	const src = noResultsImg[Math.floor(Math.random() * noResultsImg.length)];
	const bodyImg = $("<img>")
		.addClass("mx-auto mb-3 noResImg")
		.attr({
			src: src
		});

	parentDiv.append(bodyDiv, bodyImg);
	return parentDiv;
};

// Scroll the screen to the row in question
function scrollTo(row) {
	const scrollPos = $(row).offset().top;
	$('html, body').animate({
		scrollTop: (scrollPos - 44)
	}, 300);
};

/// END FUNCTIONS ///

/// EVENT LISTENERS ///

//Major listener for values populated by category selection
$(document).on("click", ".classBtn", ((event) => {
	const className = event.target.getAttribute('data-prof')
	const filled = event.target.getAttribute('data-filled')
	const row = `.${className.split(' ').join('')}Row`

	if (filled === 'false') {
		makePlaceholder(className);
		let filteredAnims
		if (className === 'Anima' || className === 'Light' || className === 'Dark' || className === 'Other') {
			filteredAnims = animationsJson.filter((animation) => animation.school === className)
		} else if (className === 'Skill') {
			filteredAnims = animationsJson.filter((animation) => animation.category === 'SKL')
		} else {
			filteredAnims = animationsJson.filter((animation) => animation.feClass === className)
		}
		makeAnimRow(filteredAnims, className)
		scrollTo(row);
		event.target.setAttribute("data-filled", "true");
	} else {
		//console.log(document.getElementsByClassName(this.getAttribute("data-prof").split(' ').join('') + "Row")[0])
		if (document.getElementsByClassName(className.split(' ').join('') + 'Row')[0].style.display === "none") {
			$(row).toggle();
		};
		scrollTo(row);
	};
}));

// Listener for search clicks
$(document).on("click", "#formSubmit", function () {
	event.preventDefault();
	document.getElementById("formSubmit").disabled = true;

	const cleanSearch = $("#formSearch").val().trim();
	makePlaceholder(cleanSearch);

	const searchTerms = cleanSearch.split(' ');
	const searchMatch = animationsJson.filter((animation) => searchTerms.every((term) => animation.dlName.toUpperCase().includes(term.toUpperCase())))
	const row = `.${searchTerms.join('')}Row`;
	makeAnimRow(searchMatch, cleanSearch, true);
	scrollTo(row);
});

// Removing for now
// $(document).on("click", "#dateSearch", function (event) {
// 	console.log('clicked');
// 	event.preventDefault();
// 	const row = "Uploads From The Past Week";
// 	const htmlRow = `${row.split(' ').join('')}Row`;
// 	if (this.getAttribute("data-filled") === 'false') {
// 		console.log('false');
// 		this.setAttribute('data-filled', true);
// 		makePlaceholder(row);
// 		API.searchByDate().then(function (animArr) {
// 			makeAnimRow(animArr, row, true);
// 		});
// 	} else {
// 		console.log(document.getElementsByClassName(htmlRow)[0]);
// 		if (document.getElementsByClassName(htmlRow)[0].style.display === "none") {
// 			$(`.${htmlRow}`).toggle();
// 		};
// 	}
// 	scrollTo(`.${htmlRow}`);
// 	event.stopPropagation();
// });

//Listener for clicks on the detailed search clicks
$(document).on("click", "#detailedFormSubmit", function () {
	event.preventDefault();
	document.getElementById("detailedFormSubmit").disabled = true;

	const name = $("#formName").val().trim();
	const feClass = $("#formClass").val().trim();
	const credit = $("#formAuthor").val().trim();
	const category = $("#formCategory").val().trim();
	const tier = $("#formTier").val().trim();
	const gender = $("#formGender").val().trim();

	const row = `${name} ${credit} ${feClass} ${category} ${gender}`;
	makePlaceholder(`${row}`);

	const detailedSearch = {
		...(name && {
			name
		}),
		...(feClass && {
			feClass
		}),
		...(credit && {
			credit
		}),
		...(category && {
			category
		}),
		...(tier && {
			tier: `T${tier}`
		}),
		...(gender && {
			gender
		})
	}

	const searchMatches = animationsJson.filter((animation) => Object.keys(detailedSearch).every((term) => {
		console.log(term)
		if (term !== 'credit') {
			return animation[term].toUpperCase().includes(detailedSearch[term].toUpperCase())
		} else if (term === 'credit') {
			return animation[term].filter((author) => author.toUpperCase().includes(detailedSearch[term].toUpperCase()))
		}
	}))
	makeAnimRow(searchMatches, row, true);
	scrollTo(`.${row.split(' ').join('')}Row`);
});

// Listener to hide a class section on clicking the header
$(document).on("click", ".sectHead", function () {
	$(this.getAttribute("data-prof")).toggle();
});

// Listener to animate anims when clicked
$(".container").on("click", ".gif", function () {
	const state = $(this).attr("data-state");

	//Check if gif is set to PNG. If set, run this. Sets to GIF.
	if (state === "still") {
		$(this).attr({
			"src": $(this).attr("data-animate"),
			"data-state": "animate"
		});

		//If the gif is currently looping, run this. Sets to PNG.
	} else {
		$(this).attr({
			"src": $(this).attr("data-still"),
			"data-state": "still"
		});
	};
});

// Listener for weapon icon click to change an anim's displayed weapon/animation
$(document).on("click", ".imgIcon", function () {
	const target = $(this).attr("data-target");
	const el = document.getElementById(target)
	console.log($(this).attr("data-animate"))
	el.setAttribute("data-animate", $(this).attr("data-animate"))
	el.setAttribute("data-still", $(this).attr("data-still"))
	el.setAttribute("src", $(this).attr("data-still"))
});

// Listener for the two required input fields for the search bar
const searchKey = document.getElementsByClassName("formKey");
Array.from(searchKey).forEach(function (element) {
	element.addEventListener("keyup", function () {
		if (document.getElementById("formAuthor").value.length > 1 || document.getElementById("formName").value.length > 2) {
			$("#detailedFormSubmit").removeAttr('disabled');
		} else if (document.getElementById("formAuthor").value.length < 2 && document.getElementById("formName").value.length < 3) {
			document.getElementById("detailedFormSubmit").disabled = true;
		};
	});
});

// Listener to activate and deactivate the input field for the generic search method.
document.getElementById('formSearch').addEventListener("keyup", function () {
	if (document.getElementById("formSearch").value.length > 2) {
		$("#formSubmit").removeAttr("disabled");
		//comment next three lines during testing to spoof long loading time.
	} else if (document.getElementById("formSearch").value.length < 2) {
		document.getElementById("formSubmit").disabled = true;
	};
});

$('input[name="themes"]').on('change', ((event) => {
	theme = event.target.value
	document.body.className = theme
}))

/// END EVENT LISTENERS ///

/// END ///