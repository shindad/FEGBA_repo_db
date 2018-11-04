/// CONSTRUCTORS ///

// Creates an object of the class animation to be placed on the page
// weapons needs to be sent in as an array
function Anim(anim) {
    this.category = anim.category; //section on the page to append to
    this.feClass = anim.feClass; // name of the class
    this.URL = anim.URL; // for download
    this.gender = anim.gender; // sorting option
    this.name = anim.name; // 
    this.dlName = anim.dlName; //dlname
    this.credit = anim.credit; // creators
    this.id = anim.id;
    //array containing all weapons, stills, and gifs
    this.weapons = anim.Weapons;

    this.makeCard = function () {
        var colDiv = $("<div>");
        colDiv.addClass("col-xl-4 col-md-6 col-sm-12 my-2");

        //All Image data
        var animImg = $("<img>");
        animImg.addClass("gif");
        animImg.attr({
            id: (this.feClass + this.id).split(' ').join(''), //needed for targeting with img icons
            src: this.weapons[0].still,
            "data-weapon": this.weapons[0].AnimWepIm.weapon, //holds current weapon displayed
            "data-state": "still",
            "data-animate": this.weapons[0].gif,
            "data-still": this.weapons[0].still
        });

        var midRow = $("<div>");

        //Link and name of animation
        var animName = $("<a>");
        animName.addClass("animName text-center");
        animName.html(`${this.feClass} ${this.gender} ${this.name}`);
        animName.attr({
            href: this.URL,
            download: this.dlName
        });

        var botRow = $("<div>");
        botRow.addClass("col-12 botRow");

        //insert weapon icons
        var icons = $("<span>");
        icons.addClass("iconmt");
        for (var i = 0; i < this.weapons.length; i++) {
            var icon = $("<img>");
            icon.attr({
                src: "img/global/" + this.weapons[i].AnimWepIm.weapon + ".png",
                "data-animate": this.weapons[i].gif,
                "data-still": this.weapons[i].still,
                "data-target": this.feClass.split(' ').join('') + this.id
            });
            icon.addClass("imgIcon mt-0");
            icons.append(icon);
        };
        icons.append("<br>");

        //Author
        var authDiv = $("<span>");
        authDiv.html(this.credit);
        authDiv.addClass("authorText text-center");

        // DIV ALIGNMENT //

        //Holds mid and botrow for uniform bg.
        var textSect = $("<div>");
        textSect.addClass("cardbg mx-auto")

        midRow.append(animName)
        botRow.append(icons, authDiv);

        textSect.append(midRow, botRow);

        // All together
        const cardParent = $("<div>");
        cardParent.append(animImg, textSect);
        colDiv.append(cardParent);
        return colDiv;
    };
};

/// END CONSTRUCTORS ///

/// FUNCTIONS ///

//Initializes the div for holding all the anims and then makes a card for all relevant anims.
function makeAnimRow(anim) {
    console.log(anim);
    // Title div. Main function is displaying class name for selected group
    var headerDiv = $("<div>");
    headerDiv.html(anim[0].feClass);
    var classRow = (anim[0].feClass + "Row").split(' ').join('')
    headerDiv.addClass("col-12 text-center " + classRow);

    // Init subrow that contains all the anim cards
    var fRow = $("<div>");
    fRow.addClass("row text-center " + classRow);
    for (var i = 0; i < anim.length; i++) {
        var tempAnim = new Anim(anim[i]);
        fRow.append(tempAnim.makeCard());
    };

    //Send compiled data to html
    $("#" + anim[0].category + "Fill").append(headerDiv, fRow);
};

//API Routing calls, can be expanded if future functionality desired.
var API = {
    getAnims: function (feClass) {
        return $.ajax({
            url: "/api/anims/" + feClass,
            type: "GET"
        });
    }
};

/// END FUNCTIONS ///

/// EVENT LISTENERS ///

//Major listener for values populated by category selection
$(".container").on("click", ".classBtn", function () {
    $("." + this.getAttribute("data-prof").split(' ').join('') + "Row").toggle();
    if (this.getAttribute("data-filled") === 'false') {
        API.getAnims(this.getAttribute("data-prof")).then(function (animArr) {
            makeAnimRow(animArr);
        });
        this.setAttribute("data-filled", "true");
    };
});

//Animates the images when clicked
$(".container").on("click", ".gif", function () {
    var state = $(this).attr("data-state");

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

// Changes the weapon to the alternate type when clicking on the weapon
$(document).on("click", ".imgIcon", function () {
    var target = $(this).attr("data-target")
    $("#" + target).attr({
        "data-animate": $(this).attr("data-animate"),
        "data-still": $(this).attr("data-still"),
        "src": $(this).attr("data-still")
    });
});

//When a nav Link is clicked, toggle a section and load data if it hasn't yet been loaded.
$(document).on("click", ".nav-link", function () {
    $("#" + this.getAttribute("data-fill")).toggle();
});

/// END EVENT LISTENERS ///

/// END ///