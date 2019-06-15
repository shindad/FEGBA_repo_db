/// CONSTRUCTORS ///

// Creates an object of the class animation to be placed on the page
// weapons needs to be sent in as an array
function Anim(anim) {
	this.category = anim.category; // section on the page to append to
	this.feClass = anim.feClass; // name of the class
	this.URL = anim.URL; // for download
	this.gender = anim.gender; // sorting option
	this.name = anim.name; // identifier
	this.dlName = anim.dlName; // dlname
	this.credit = anim.credit; // creators
	this.id = anim.id; // unique id
	this.weapons = anim.Weapons; //array containing all weapons, stills, and gifs

	// Custom card design
	this.makeCard = function () {

		// weapon and icon sort
		const order = ["Sword", "Knife", "Lance", "Axe", "Handaxe", "Bow", "Magic", "Staff", "Refresh", "Monster", "Dragonstone", "Legendary", "Unarmed"];
		this.weapons.sort(function (a, b) {
			return order.indexOf(a.AnimWepIm.weapon) < order.indexOf(b.AnimWepIm.weapon) ? -1 : 1;
		});

		//All Image data
		const animImg = $("<img>")
			.addClass("gif")
			.attr({
				id: (this.feClass + this.id).split(' ').join(''), //needed for targeting with img icons
				src: this.weapons[0].still,
				"data-weapon": this.weapons[0].AnimWepIm.weapon, //holds current weapon displayed
				"data-state": "still",
				"data-animate": this.weapons[0].gif,
				"data-still": this.weapons[0].still
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

		const genderDiv = $("<i>")
			.addClass(`${genderI} animName`)
			.attr({
				"data-folder": this.dlName,
				"data-url": this.URL
			})
			.append(nameDiv);

		//Link and name of animation
		const middleRow = $("<div>")
			.addClass("text-center pt-1")
			.append(genderDiv);

		// insert weapon icons
		const icons = $("<span>")
			.addClass("iconmt");
		if (this.category !== "SPL" && this.category !== "SKL") {
			this.weapons.forEach((weapon => {
				const icon = $("<img>")
					.addClass("imgIcon mt-0")
					.attr({
						src: "img/global/" + weapon.AnimWepIm.weapon + ".png",
						"data-animate": weapon.gif,
						"data-still": weapon.still,
						"data-target": this.feClass.split(' ').join('') + this.id
					});
				icons.append(icon);
			}));
			icons.append("<br>");
		};

		//Author
		const authorDiv = $("<span>")
			.html(this.credit)
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
function makeAnimRow(anim, searchName) {
	//console.log(anim);

	// reorders the anims by gender for the selected class.
	anim.sort(function (a, b) {
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
		parentDiv.append(tempAnim.makeCard());
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

	const noResultsImg = ["img/global/elicry.jpg", "img/global/sharcry.png", "img/global/faeangry.jpg", "img/global/nergal.png"];
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

// API Routing calls, can be expanded if future functionality desired.
const API = {
	getAnims: function (feClass) {
		return $.ajax({
			url: "/api/anims/" + feClass,
			type: "GET"
		});
	},
	downloadAnim: function (unit, path) {
		return $.get("/api/unit/" + unit, {
			path: path,
			unit: unit
		});
	},
	searchAnims: function (search) {
		return $.get("/api/search/", {
			search: search
		});
	},
	detailedSearchAnims: function (name, feClass, credit, category, tier, gender) {
		return $.get("/api/detailedSearch/", {
			name: name,
			feClass: feClass,
			credit: credit,
			category: category,
			tier: tier,
			gender: gender
		});
	},
	searchByDate: function () {
		return $.get("/api/dateSearch/");
	}
};

/// END FUNCTIONS ///

/// EVENT LISTENERS ///

//Major listener for values populated by category selection
$(document).on("click", ".classBtn", function () {
	const className = this.getAttribute("data-prof");
	const row = "." + className.split(' ').join('') + "Row";

	if (this.getAttribute("data-filled") === 'false') {
		makePlaceholder(className);
		API.getAnims(className).then(function (animArr) {
			makeAnimRow(animArr, className);
			scrollTo(row);
		});
		this.setAttribute("data-filled", "true");
	} else {
		//console.log(document.getElementsByClassName(this.getAttribute("data-prof").split(' ').join('') + "Row")[0])
		if (document.getElementsByClassName(className.split(' ').join('') + 'Row')[0].style.display === "none") {
			$(row).toggle();
		};
		scrollTo(row);
	};
});

// Listener for search clicks
$(document).on("click", "#formSubmit", function () {
	event.preventDefault();
	document.getElementById("formSubmit").disabled = true;

	const cleanSearch = $("#formSearch").val().trim();
	makePlaceholder(cleanSearch);

	const searchTerm = cleanSearch.split(' ');
	const search = [];
	searchTerm.forEach(function (term) {
		search.push({
			'dlName': {
				like: '%' + term + '%'
			}
		})
	});

	API.searchAnims(search).then(function (animArr) {
		const row = `.${searchTerm.join('')}Row`;
		// console.log(animArr);
		makeAnimRow(animArr, cleanSearch);
		scrollTo(row);
	});
});

$(document).on("click", "#dateSearch", function (event) {
	console.log('clicked');
	event.preventDefault();
	const row = "Uploads From The Past Week";
	const htmlRow = `${row.split(' ').join('')}Row`;
	if (this.getAttribute("data-filled") === 'false') {
		console.log('false');
		this.setAttribute('data-filled', true);
		makePlaceholder(row);
		API.searchByDate().then(function (animArr) {
			makeAnimRow(animArr, row);
		});
	} else {
		console.log(document.getElementsByClassName(htmlRow)[0]);
		if (document.getElementsByClassName(htmlRow)[0].style.display === "none") {
			$(`.${htmlRow}`).toggle();
		};
	}
	scrollTo(`.${htmlRow}`);
	event.stopPropagation();
});

//Listener for clicks on the detailed search clicks
$(document).on("click", "#detailedFormSubmit", function () {
	event.preventDefault();
	document.getElementById("detailedFormSubmit").disabled = true;

	const cleanName = $("#formName").val().trim();
	const cleanFeClass = $("#formClass").val().trim();
	const cleanCredit = $("#formAuthor").val().trim();

	const name = {
		like: '%' + cleanName + '%'
	};
	const feClass = {
		like: '%' + cleanFeClass + '%'
	};
	const credit = {
		like: '%' + cleanCredit + '%'
	};
	const category = $("#formCategory").val().trim();
	const tier = 'T' + $("#formTier").val().trim();
	const gender = $("#formGender").val().trim();

	const row = `${cleanName} ${cleanCredit} ${cleanFeClass} ${category} ${gender}`;
	makePlaceholder(`${row}`);

	API.detailedSearchAnims(name, feClass, credit, category, tier, gender).then(function (animArr) {
		// console.log(animArr);
		makeAnimRow(animArr, row);
		scrollTo(`.${row.split(' ').join('')}Row`);
	});
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

// Listener to download a single anim on click
$(".container").on("click", ".animName", function () {
	const folder = $(this).attr("data-folder");
	const path = $(this).attr("data-url");
	//console.log(path);
	API.downloadAnim(folder, path).then(response => {
		document.getElementById('hidDownloads').src = response
	}, error => {
		console.log(error);
	});
});

// Listener for weapon icon click to change an anim's displayed weapon/animation
$(document).on("click", ".imgIcon", function () {
	const target = $(this).attr("data-target");
	$("#" + target).attr({
		"data-animate": $(this).attr("data-animate"),
		"data-still": $(this).attr("data-still"),
		"src": $(this).attr("data-still")
	});
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

/// END EVENT LISTENERS ///

/// END ///