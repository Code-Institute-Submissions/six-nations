# The Six Nations City Guide

![Image of website mock up](assets/images/readme/responsive.png)

[View Live Website](https://olihickie.github.io/six-nations/)

[View GitHub Repository](https://github.com/OliHickie/six-nations)

This website is designed to help sports fans travelling to Six Nations rugby games. The tournament, which is held annually, involves six European teams who each host two or three games a year. This city guide is designed for supporters who are planning on visiting a city and will help them find local ammenities, as well as the stadium itself, along with travel information and ticket purchasing links. 

# User Experience (UX)

## User Stories
* As a visitor to the website, I want to:
    - Navigate around the website with ease.
    - Find and select the country/city I am planning to visit.
    - Locate country specific information which will include name and location of the stadium and links to travel information. 
    - Easy access to match day ticket bookings and flight searches.
    - View a map of the local area to the relevant stadium. 
    - Be able to view and find local ammenitites, including accomodation and establishments to eat and drink near the stadium. 
    - Be able to sign up for relevant news and information to do with the Six Nations tournament. 
    - Access links to the official Six Nations social media pages.
    - View all information clearly and access it easily when I return to the website. 

## Design

The site's main goal is to provide the user with information and for the user to be able to access the information quickly.

### Color Scheme
 The main color throughout the site is green (Hex code: [#00302b](https://www.google.com/search?q=%2300302b&oq=%2300302b&aqs=chrome.0.69i59.4496j0j9&sourceid=chrome&ie=UTF-8)) as this has connotations to a sports pitch. This has been used mainly to give a dark background against the white text to ensure the user can read the text easily and to ensure the text and information stands out on the page. I have kept the color scheme quite simple as I will use flags and a Google Map on the site, which will bring a lot of color to the site. All buttons on the site are colored in the same way using a slightly off-white color with a touch of darkness to add a bit of texture. 
 I have red colored icons above the map to visually link the icons to the markers that appear on the map. 

### Typography

The site uses three main fonts; [Anton](https://fonts.google.com/specimen/Anton?preview.text_type=custom), [Poppins](https://fonts.google.com/specimen/Poppins?preview.text_type=custom) and [Kalam](https://fonts.google.com/specimen/Kalam?preview.text_type=custom), all of which are taken from the Google Fonts library. Poppins is used for the main text of the website as it is clear and easy to read. I have used Anton for the headings as it is a bold, strong font. Kalam is used for the tagline and in the fact box below the map section. This has a more conversational feel and look to it, visually seperating the fact box from the city guide information.

![Image of Poppins and Kalam](assets/images/readme/typography1.png)
![Image of Anton](assets/images/readme/typography2.png)

### Imagery 

Imagery is used on the site to add color and create an appealing backdrop. The main header image is an action shot from a rugby game. This image is toned slightly using a color overlay getting more dense towards the bottom. I have used an image of the Aviva stadium (Ireland) as the backdrop for the lower part of the website, again using an overlay but mirroring the direction of opacity. The other images used are of the nations flags. These images serve the purpose of indicating which country is currently selected and whose information is being displayed below. There is also a Google Map included in the information section which is informative, allowing the user to locate the stadium and surrounding hospitality venues. 

### Wireframes

The wireframes below were created using Balsamiq displaying how the site would appear in a basic form across three different screen sizes. 

![Wireframe](assets/images/readme/wireframe.png)

Some changes were made to the design of the site after completion of the wireframes. 
 - Firstly, an extra background image was included for the bottom half of the page to add a better visual appeal than just a simple colored background. 
 - I added a heading to the map section to ensure the user understands what the map is there for and to help with selecting the hotel, bar or restaurants. 
 - I added a box below the map information which cycles through a number of facts about the tournament. This adds another element of information that the site offers the user. 
 - The sign up form for the newsletter has moved down into the footer as, when building the site, I felt this offered a better UX than stacking the sign up form on top of the social media icons. 


# Features

 - **Navbar** The Navbar is situated at the top of the page, however this only reuires two options as the buttons sitauted at the bottom of the window allow the user to change between countries. The navbar allows the user to move quickly down to the Country selectors or, to the bottom of the page, where the user can sign up to the newsletter. When viewing the website on a smaller screen the navbar collapses into a button that, when pressed, will display the two options. This navbar feature was taken from Bootstrap. 
 - **Header** The heading, which is displayed in the centre of the landing window, is big and bold and describes the functionality of the site. 
 - **Country Selectors** At the bottom of the window, when the page is loaded, are six country selectors, one for each nation that hosts games during the tournament. I wanted these to be visible as soon as the page loaded. When an selector is chosen, the window will automatically scroll down (if the content isn't already in view) to display facts and information specific to the chosen nation. The selector, once chosen, also displays the nations flag to display that this button is active. 
 - **Information section** When a country is selected, the information that is displayed below the selector is specific to that country and is relevant and helpful for any visitor travelling to an away day. The information includes the name of the city and the stadium, the capacity of the stadium and address. The address links to an external google map so the user can enter directions. Other options available are links to various helpful sites, including travel information and the purchasing of matchday tickets and flight booking. 
 - **Map section** The map section is either situated underneath the city information in smaller screens, or to the right hand side on larger screens. This includes three selectors and a Google map. When the country is first selected, the google map initially displays a marker for the location of the stadium used for by the country's national rugby team. There are three selectors above the map which, once clicked, will display local ammenities to the stadium. These include hotels, restaurants and bars. The selectors have an icon in them to represent the type of venue they will display, but I have also included a Bootstrap tooltip to back up the icon. 
 - **Fact box** Below the map section there is a box which cycles through a number of facts related to the Six Nations tournament. These facts fade into view and are visible for 9 seconds before moving on to the next one. The facts will continue to cycle while the page is open and once reloaded, the facts will return back to the beginning of the cycle. 
 - **Footer** At the bottom of the page is the footer, which is broken down into two sections. The first is a sign up section for a newsletter which is related to the website. This requires an email address and the user can optionally add which country they follow for more targetted content. On submittion of the form, the information is then sent to the site owner using EmailJS and a tick is visible next to the submit button for a short period to let the user know the information has been sent successfully. Alternatively, if there is a problem sending the form, a cross will appear next to the submit button. If the form is sent successfully, then the form is reset in case the user would like to add another contact email. 
 The other section of the footer includes social media icons which relate to the official Six Nations social media pages. 

 ### Future Features
 Going forward, I would like to include a section on the site for live results and league tables. I would also like to expand the site to include other rugby stadiums, other rugby competitions both domestic and international. 

# Technologies used

## Languages
## Frameworks, Libraries and Programs Used










Six nations facts
https://www.ruck.co.uk/mind-blowing-facts-you-never-knew-about-the-six-nations/2/



bugs - s