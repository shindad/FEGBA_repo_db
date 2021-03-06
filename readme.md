# Emblem Anims
Emblem Anims was created to provide an easy to use resource for comparing animations, downloading them, and providing accurate credit to the Fire Emblem modding community.
It utilizes:
+ Node.js
+ ~~Sequel~~ Removed 7/4/20
+ ~~Sequelize~~ Removed 7/4/20
+ jQuery
+ Bootstrap
+ HTML, CSS, Javascript

# Table of Contents
- [Emblem Anims](#emblem-anims)
- [Table of Contents](#table-of-contents)
	- [Project Overview](#project-overview)
		- [Getting Started](#getting-started)
		- [Classes](#classes)
		- [Anims](#anims)
			- [Main Image](#main-image)
			- [Identifier](#identifier)
			- [Weapon Row](#weapon-row)
			- [Credit](#credit)
		- [Searching](#searching)
			- [Search Text Submission](#search-text-submission)
			- [Search Filters](#search-filters)
			- [No Results](#no-results)
		- [Full Download](#full-download)
	- [ToDo](#todo)

## Project Overview
![Landing page](https://imgur.com/nduuiBt.png)

### Getting Started
![Navbar](https://imgur.com/ZBlcskp.png)
The application is primarily navigated via the navbar. 
Each of the buttons has a dropdown for classes in that category. Each class name contains data that is used by an Ajax call to search the database for matching animations.

The entire site is mobile friendly. The nav bar switches from text to icons on smaller browsers and anims go from 3-2-1 per line depending on viewport.
![Mobile Friendly](https://imgur.com/hqWoI5f.png)
![Mobile Friendly](https://imgur.com/hqWoI5f.png)

![populating](https://imgur.com/mnyoImr.gif)

### Classes
![Class Section](https://imgur.com/DLKMn7D.png)
After a class is clicked, the page will populate with a section for that class containing each of the unique anims and their possible weapons.
The weapon icons are sorted initially to adhere to a structured order for uniform design. Anims themselves are also sorted such that females all appear first, males are second. A secondary alphabetical sorting is intended to be implemented at a later date.
Clicking on the blue class header or the dropdown for the class will hide that section from the screen. Selecting it again will show it again.

### Anims
![Anim Card](https://imgur.com/tfxYLaX.png)
Each anim is comprised of an image, an identifier (gender, description), weapon row, and credit.

All of these fields other than credit may be clicked to change the image section or download the Anim.
![Animating](https://imgur.com/n3CHHOn.gif)

#### Main Image
This is automatically generated for each Anim based on their first weapon and is by default set to the png version. 
Clicking anywhere on the image causes the image source to swap to the gif or back to the png.

#### Identifier
The gender icon is a conversion from the anim's sql data to a font-awesome character based on M, F, or U.
The description is also pulled from the sql data but is fully flexible.
Clicking on any of the identifier text will download the anim and all of its weapons.

#### Weapon Row
The weapon row is pulled from the weapons array that each anim contains. It is sorted in order from Swords first to Unarmed last.
Clicking on a weapon icon results in the image changing weapons and reverting to the still png version.

#### Credit
The credit row contains all authors that have worked on any weapon or part of the design that the Anim uses.
More granular credit can be seen in the downloaded files.

### Searching
The search bar is located under the "Home" section. 
![Search Bar](https://i.imgur.com/CghrvZN.png)
Given at least an author or name input, and optional filters by category, tier, and gender, the database will be searched through and animations produced.

#### Search Text Submission
Both name and author allow for partial name searches. A search for authors with the name "Yeti" will pull up all results despite it not being the full name of the any authors.
![Basic Results](https://i.imgur.com/HIKjxzC.png)

#### Search Filters
By adding filters, one can narrow results even further.
![Filtered Search](https://i.imgur.com/piWfmrG.png)
![Filtered Results](https://i.imgur.com/GEzba2O.png)

One can also search by both name and author to be even more precise.
![Fully Filtered Search](https://i.imgur.com/aNLJUsY.png)
![Fully Filtered Res](https://i.imgur.com/1puJuwJ.png)

#### No Results
In the case of search terms without results, a random image out of several will display with a message.
![Imgur](https://i.imgur.com/EsIA4MV.png)

### Full Download
This application is synced with a Google Drive repo to enable full downloads of assets. The loading hub has a link to this full download.

The best method of staying up to date on all assets involves adding the repo to your Google Drive folder. It's also possible to only take certain folders if all aren't desired.
![Imgur](https://i.imgur.com/GXI7fYH.gifv)

## ToDo
+ **Convert to ES6/React**
+ ~~Add Search Bar~~ *done!*
  + Add pseudonym/common misspelling corrections
  + Autofill
+ Add Newsfeed
+ ~~Add Spells~~ *done!*
+ Potentially expand functionality to include other graphics such as map sprites