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

    this.makeCard = function () {

        // weapon and icon sort
        const order = ["Sword", "Lance", "Axe", "Handaxe", "Bow", "Magic", "Staff", "Refresh", "Monster", "Dragonstone", "Legendary", "Unarmed"];
        this.weapons.sort(function (a, b) {
            return order.indexOf(a.AnimWepIm.weapon) < order.indexOf(b.AnimWepIm.weapon) ? -1 : 1;
        });

        //All Image data
        const animImg = $("<img>");
        if (this.category === 'SPL') {
            animImg.addClass("spellGif");
        } else {
            animImg.addClass("gif");
        }
        animImg.attr({
            id: (this.feClass + this.id).split(' ').join(''), //needed for targeting with img icons
            src: this.weapons[0].still,
            "data-weapon": this.weapons[0].AnimWepIm.weapon, //holds current weapon displayed
            "data-state": "still",
            "data-animate": this.weapons[0].gif,
            "data-still": this.weapons[0].still
        });

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
            .addClass(genderI + " animName")
            .attr({
                "data-folder": this.dlName,
                "data-url": this.URL
            })
            .append(nameDiv);

        //Link and name of animation
        const midRow = $("<div>")
            .addClass("text-center pt-1")
            .append(genderDiv);

        // insert weapon icons
        const icons = $("<span>");
        if (this.category !== "SPL") {
            icons.addClass("iconmt");
            for (let i = 0; i < this.weapons.length; i++) {
                const icon = $("<img>")
                    .attr({
                        src: "img/global/" + this.weapons[i].AnimWepIm.weapon + ".png",
                        "data-animate": this.weapons[i].gif,
                        "data-still": this.weapons[i].still,
                        "data-target": this.feClass.split(' ').join('') + this.id
                    })
                    .addClass("imgIcon mt-0");
                icons.append(icon);
            };
            icons.append("<br>");
        };

        //Author
        const authDiv = $("<span>")
            .html(this.credit)
            .addClass("authorText text-center");

        // DIV ALIGNMENT //

        const botRow = $("<div>")
            .addClass("col-12 botRow")
            .append(icons, authDiv);

        // Holds mid and botrow for uniform bg.
        const textSect = $("<div>")
            .addClass("cardbg mx-auto")
            .append(midRow, botRow);

        // All together
        const cardParent = $("<div>")
            .append(animImg, textSect);

        const colDiv = $("<div>")
            .addClass("col-xl-4 col-md-6 col-sm-12 my-2")
            .append(cardParent);

        return colDiv;
    };
};

/// END CONSTRUCTORS ///

/// FUNCTIONS ///

//Initializes the div for holding all the anims and then makes a card for all relevant anims.
function makeAnimRow(anim) {
    //console.log(anim);

    // reorders the anims by gender for the selected class.
    anim.sort(function (a, b) {
        const x = a.gender;
        const y = b.gender;
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    });

    const classRow = (anim[0].feClass + "Row").split(' ').join('')

    const parentDiv = $("<div>")
        .addClass(classRow + " row my-2 sectMain text-center")

    // Title div. Main function is displaying class name for selected group
    const headerDiv = $("<div>")
        .html(anim[0].feClass)
        .addClass("col-12 text-center sectHead")
        .attr({ "data-prof": "." + classRow });

    // Init subrow that contains all the anim cards
    for (let i = 0; i < anim.length; i++) {
        let tempAnim = new Anim(anim[i]);
        parentDiv.append(tempAnim.makeCard());
    };

    parentDiv.prepend(headerDiv);

    //Send compiled data to html
    $("#mainBody").prepend(parentDiv);
};

function makeAnimSearchRow(anim, searchName, searchCredit) {
    //console.log(anim);

    // reorders the anims by gender for the selected class.
    anim.sort(function (a, b) {
        const x = a.category;
        const y = b.category;
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        if (a.gender < b.gender) { return -1; }
        if (a.gender > b.gender) { return 1; }
        return 0;
    });

    const classRow = searchName.split(' ').join('') + searchCredit.split(' ').join('') + "Row";

    const parentDiv = $("<div>")
        .addClass(classRow + " searchRow row my-2 sectMain text-center");

    // Title div. Main function is displaying class name for selected group
    const headerDiv = $("<div>")
        .html(searchName + " " + searchCredit)
        .addClass("col-12 text-center sectHead")
        .attr({ "data-prof": "." + classRow });

    // Init subrow that contains all the anim cards
    for (let i = 0; i < anim.length; i++) {
        const tempAnim = new Anim(anim[i]);
        parentDiv.append(tempAnim.makeCard());
    };

    if (!anim.length) {
        const bodyDiv = $("<div>")
            .addClass("col-12 text-center my-1")
            .html("No results found. Please revise your search.");

        const noResultsImg = ["img/global/elicry.jpg", "img/global/sharcry.png", "img/global/faeangry.jpg", "img/global/nergal.png"];
        const src = noResultsImg[Math.floor(Math.random() * noResultsImg.length)]
        const bodyImg = $("<img>")
            .addClass("mx-auto mb-3 noResImg")
            .attr({
                src: src
            });

        parentDiv.append(bodyDiv, bodyImg);
    }

    parentDiv.prepend(headerDiv);

    //Send compiled data to html
    $("#mainBody").prepend(parentDiv);
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
        })
    },
    searchAnims: function (name, credit, category, tier, gender) {
        return $.get("/api/search/", {
            name: name,
            credit: credit,
            category: category,
            tier: tier,
            gender: gender
        });
    }
};

/// END FUNCTIONS ///

/// EVENT LISTENERS ///

//Major listener for values populated by category selection
$(document).on("click", ".classBtn", function () {
    const row = "." + this.getAttribute("data-prof").split(' ').join('') + "Row"
    $(row).toggle();
    if (this.getAttribute("data-filled") === 'false') {
        API.getAnims(this.getAttribute("data-prof")).then(function (animArr) {
            makeAnimRow(animArr);

            const scrollPos = $(row).offset().top
            $('html, body').animate({
                scrollTop: (scrollPos - 44)
            }, 300);
        });
        this.setAttribute("data-filled", "true");
    } else {
        //console.log(document.getElementsByClassName(this.getAttribute("data-prof").split(' ').join('') + "Row")[0])
        if (document.getElementsByClassName(this.getAttribute("data-prof").split(' ').join('') + "Row")[0].style.display !== "none") {
            const scrollPos = $(row).offset().top
            $('html, body').animate({
                scrollTop: (scrollPos - 44)
            }, 300);
        };
    };
});

// Search Listener
$(document).on("click", "#formSubmit", function () {
    event.preventDefault();
    document.getElementById("formSubmit").disabled = true;

    const name = { like: '%' + $("#formName").val().trim() + '%' };
    const credit = { like: '%' + $("#formAuthor").val().trim() + '%' };
    const category = $("#formCategory").val().trim();
    const tier = 'T' + $("#formTier").val().trim();
    const gender = $("#formGender").val().trim();

    const row = ".searchRow";
    API.searchAnims(name, credit, category, tier, gender).then(function (animArr) {
        //console.log(animArr);
        makeAnimSearchRow(animArr, $("#formName").val().trim(), $("#formAuthor").val().trim());

        const scrollPos = $(row).offset().top
        $('html, body').animate({
            scrollTop: (scrollPos - 44)
        }, 300);
    });
});

// Hides the section on click
$(document).on("click", ".sectHead", function () {
    $(this.getAttribute("data-prof")).toggle();
});

//Animates the images when clicked
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

// Animates the images when clicked
$(".container").on("click", ".spellGif", function () {
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

// Downloads the single anim on click
$(".container").on("click", ".animName", function () {
    const folder = $(this).attr("data-folder");
    const path = $(this).attr("data-url");
    API.downloadAnim(folder, path).then(function (response) {
        document.getElementById('hidDownloads').src = response;
    });
});

// Changes the weapon to the alternate type when clicking on the weapon
$(document).on("click", ".imgIcon", function () {
    const target = $(this).attr("data-target");
    $("#" + target).attr({
        "data-animate": $(this).attr("data-animate"),
        "data-still": $(this).attr("data-still"),
        "src": $(this).attr("data-still")
    });
});

// Listener for one of the two required input fields for the search bar
document.getElementById("formName").addEventListener("keyup", function () {
    //console.log(document.getElementById("formName").value);
    if (document.getElementById("formName").value.length > 2) {
        $("#formSubmit").removeAttr('disabled');
    } else if (document.getElementById("formName").value.length < 3) {
        if (document.getElementById("formAuthor").value.length < 2) {
            document.getElementById("formSubmit").disabled = true;
        };
    };
});

// Listener for one of the two required input fields for the search bar
document.getElementById("formAuthor").addEventListener("keyup", function () {
    //console.log(document.getElementById("formAuthor").value);
    if (document.getElementById("formAuthor").value.length > 1) {
        $("#formSubmit").removeAttr('disabled');
    } else if (document.getElementById("formAuthor").value.length < 2) {
        if (document.getElementById("formName").value.length < 3) {
            document.getElementById("formSubmit").disabled = true;
        };
    };
});

/// END EVENT LISTENERS ///

/// END ///