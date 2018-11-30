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

        //weapon and icon sort//
        const order = ["Sword", "Lance", "Axe", "Handaxe", "Bow", "Magic", "Staff", "Refresh", "Monster", "Dragonstone", "Legendary", "Unarmed"];
        this.weapons.sort(function (a, b) {
            return order.indexOf(a.AnimWepIm.weapon) < order.indexOf(b.AnimWepIm.weapon) ? -1 : 1;
        });

        //All Image data
        var animImg = $("<img>");
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

        var midRow = $("<div>");

        //Link and name of animation
        var midRow = $("<div>");
        midRow.addClass("text-center pt-1");

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

        let genderDiv = $("<i>")
            .addClass(genderI + " animName")
            .attr({
                "data-folder": this.dlName,
                "data-url": this.URL
            });

        let nameDiv = $("<span>")
            .addClass("midName")
            .html(` ${this.name}`)

        genderDiv.append(nameDiv);
        midRow.append(genderDiv);

        var botRow = $("<div>");
        botRow.addClass("col-12 botRow");

        //insert weapon icons
        var icons = $("<span>");
        if (this.category !== "SPL") {
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
        };

        //Author
        var authDiv = $("<span>");
        authDiv.html(this.credit);
        authDiv.addClass("authorText text-center");

        // DIV ALIGNMENT //

        //Holds mid and botrow for uniform bg.
        var textSect = $("<div>");
        textSect.addClass("cardbg mx-auto")

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
    //console.log(anim);

    // reorders the anims by gender for the selected class.
    anim.sort(function (a, b) {
        var x = a.gender;
        var y = b.gender;
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
    });

    var classRow = (anim[0].feClass + "Row").split(' ').join('')

    let parentDiv = $("<div>")
        .addClass(classRow + " row my-2 sectMain text-center")

    // Title div. Main function is displaying class name for selected group
    var headerDiv = $("<div>")
        .html(anim[0].feClass)
        .addClass("col-12 text-center sectHead")
        .attr({ "data-prof": "." + classRow });

    // Init subrow that contains all the anim cards
    for (var i = 0; i < anim.length; i++) {
        var tempAnim = new Anim(anim[i]);
        parentDiv.append(tempAnim.makeCard());
    };

    parentDiv.prepend(headerDiv);

    //Send compiled data to html
    $("#mainBody").prepend(parentDiv);
};

//API Routing calls, can be expanded if future functionality desired.
var API = {
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

$(document).on("click", ".sectHead", function () {
    $(this.getAttribute("data-prof")).toggle();
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

//Animates the images when clicked
$(".container").on("click", ".spellGif", function () {
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

$(".container").on("click", ".animName", function () {
    const folder = $(this).attr("data-folder");
    const path = $(this).attr("data-url");
    API.downloadAnim(folder, path).then(function (response) {
        document.getElementById('hidDownloads').src = response;
    });
});

// Changes the weapon to the alternate type when clicking on the weapon
$(document).on("click", ".imgIcon", function () {
    var target = $(this).attr("data-target");
    $("#" + target).attr({
        "data-animate": $(this).attr("data-animate"),
        "data-still": $(this).attr("data-still"),
        "src": $(this).attr("data-still")
    });
});

/// END EVENT LISTENERS ///

/// END ///