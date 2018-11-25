# Emblem Anims
Emblem Anims was created to provide an easy to use resource for comparing animations, downloading them, and providing accurate credit to the Fire Emblem modding community.
It utilizes:
+ Node.js
+ Sequel
+ Sequelize
+ jQuery
+ Bootstrap
+ HTML, CSS, Javascript

# Table of Contents
- [Project Overview](#Project%20Overview)
  * [Getting Started](#Getting%20Started)
  * [Classes](#Classes)
  * [Anims](#Anims)
    + [Main Image](#Main%20Image)
	+ [Identifier](#Identifier)
	+ [Weapon Row](#Weapon%20Row)
	+ [Credit](#Credit)
  * [ToDo](#ToDo)

## Project Overview
![Landing page](https://imgur.com/nduuiBt.png)

### Getting Started
![Navbar](https://imgur.com/ZBlcskp.png)
The application is primarily navigated via the navbar. 
Each of the buttons has a dropdown for classes in that category. Each class name contains data that is used by an Ajax call to search the database for matching animations.

The entire site is mobile friendly. The nav bar switches from text to icons on smaller browsers and anims go from 3-2-1 per line depending on viewport.
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

### ToDo
+ **Convert to ES6/React**
+ Add Search Bar
+ Add Newsfeed
+ Add Spells