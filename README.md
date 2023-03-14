# Work-base Project - News Homepage

## Summary
For this project I have been tasked to create a homepage for a new news website. The website should follow the design guidelines that have been provided and must also feature a responsive design that will work on a range of different screen sizes. The guidelines state the typography that should be used, this includes which fonts should be used, the standard font size and the font weights which must be used. I must also make sure to follow the states which have been determined. This means making sure that the standard, hover and focus states all match the design guidelines. Before starting the website, I must plan the project by creating wireframes of the product and setup a timeline for the development. Once the development is completed, I will then deploy the site on Github pages.

## Planning/Wire Frame
The deadline for this project is the 24th March and by this date I must have the site finished to specification.

![desktop wireframe](/assets/Wireframes/Desktop-wireframe.png)
![mobile wireframe](/assets/Wireframes/Mobile-wireframe.png)

## Development / Git - Github

Within the development, I decided to first work towards getting the desktop version of the website to fit the supplied designs. Once I knew this fit the desings, I could then work on the mobile version of the site.

### Getting Started

The first thing to do was to setup the workspace so that it was ready for the development to begin. I like to start writing my HTML and CSS by first linking the file and creating a reset. This means setting the padding and margin of all of the elements to 0 to make sure that nothing acts incorrectly during the development. At the beginning of this project I also want to make sure that the default font family is set and that the paragraph text size is set. This has all been determined by the style guide I was provided. Doing all of this means that we make sure we're sticking to the design guidelines from the beginning of the project. You can see this being done in the CSS file below:

![css reset and default setup](/assets/Screenshots/Desktop/1-resetting-layout-adding-fonts.png)

### Desktop Nav

#### HTML

When writing HTML, I like to begin by writing all of the HTML to mark out the order and figure out the different elements I will need. For the navbar I started with the 'header' tag and split the navbar into two parts, the logo and the menu. Within this project I will be using flexbox, so I put these two parts into container divs as it usually makes it easier when working with flexbox as you can easily position the elements. Flexbox is a layout model that allows you to create a responsive interface and provides powerful alignment capabilities. Within the 'logoContainer' I just inserted an image with the source as the logo.svg file. Within the 'navbarContainer', I used the 'nav' tag to create the navbar and then used an unordered list to create the navbar items. You can see the structure below:

![Navbar HTML](/assets/Screenshots/Desktop/2-NavHTML.png)

#### CSS

The CSS is what makes this code into what the navbar should look like. I first started off the CSS by altering the body to give the page padding to make sure that there is space between the content and the edge of the window. I then started on the header by styling the header tag directly. As I was using flexbox, styling the header to be flexbox would allow me to make the logo and the navbar to be styled in a responsive row. I then make sure that the width of the header spans the entire window (minus the padding) by using 'width: 100%' and set the padding on the bottom to '50px' to make sure that there is some space between the header and the content below.

I then set the left margin of the 'navbarContainer' to auto, this pushes the container to the far right, giving a gap between the logo and the navbar.

The rest of the CSS is styling the navbar components, setting the colour of the links to what the style guide specifies and setting the active states by setting the ':focus' element. I also set the margin of each navbar item to make sure that there is space between the navbar links. 

![Navbar CSS](/assets/Screenshots/Desktop/2-NavCss)

#### Result

Here is the result of the above:

![Navbar Result](/assets/Screenshots/Desktop/2-NavResult)

### Desktop Main Content

#### HTML

The main content of the page is split between two rows, there is the main news story with a list of new news stories and then the other row shows three trending stories. As I am working in flexbox, it is easier to work through the page in rows and started to create the code for the main and new stories. 

I first started off by creating a main div that would contain all of the HTML for all of the content on the page called 'mainContent'. I then created another div element called 'topContent' which will be a container for this section of the page. I then inline styled this to make it use flexbox. Within this container I created another container which would hold all of the HTML for the main story and called this div 'mainStory'. This was split into two elements, the main image and then another container called 'mainStoryContentContainer' which contains the heading of the main news story, the short description and the button that links to the story. I inline styled the main story containers to make sure that they were all displaying as flex to create a range of rows and columns.

I then had to create the 'New' news section. This consisted of a main 'newPostsContainer' div which would hold the list of new stories. I then added the h2 tag which was the title of this section. Then I created three identicle elements with the class 'newPost' which were the news posts within this list. These elements contained a heading and some text.

This is the HTML for this section:

![Main Content HTML](/assets/Screenshots/Desktop/3-MainContentHTML)

#### CSS

As most of the CSS was done inline, the CSS within the external CSS file wasn't that large. The first item of in the CSS file was the button for the main story. I styled this button following the style guide and setting the background colour, padding and styling the font within the button. I then also styled the active state of the button by changing the ':hover' state of the class. This made the background colour change as well and making sure that the cursor changes to being a pointer to ensure that there is feedback being given back to the user.

The next part of the CSS styles the 'New' news list. Firstly, I styled the container to make sure that it was displaying using flexbox and aligning the items to the left of the container. I also made sure that the items in the container were being displayed in a column, then finished styling by setting the background colour and the padding. I then styled the items within the container 'newPost' by setting the correct padding. The 'newPostTitle' is the heading of the news items and I styled it to make sure that the heading is white and the bottom padding is set to make sure that there is space between the heading and content.

The CSS:

![Main Content CSS](/assets/Screenshots/Desktop/3-MainContentCss)

#### Result

The result of this section:

![Main Content Result](/assets/Screenshots/Desktop/3-MainContentResult)

### Desktop Trending News

#### HTML

The trending news section is a row of news items. The HTML starts with a 'trendingNews' container that contains the section. The other HTML is one 'trendingItem' container duplicated. This container includes an image, and then another container 'trendingContent' which contains the information of the news story, such as the trending position (1,2,3), story heading and story description.

The HTML:

![Trending News HTML](/assets/Screenshots/Desktop/4-trendingNewsHTML)

#### CSS

The CSS for the trending news is fairly simple. Firstly, I set the entire 'trendingNews' section to display flex as it needs to display as a row. I then set the 'trendingItem' to display flex as this also needs to display as a row. However, the content of the trending items need to display as a column, for this I made it display flex but then set the flex-direction to column. I also made the 'justify-content' 'flex-start' to make sure that the content starts at the top of the container. I also set the left padding of the content to make sure that there is a gap between the image and the content. The CSS for the 'trendingNumber' styles the number attached to the trending item. The final part of the CSS styles the image to set the width which also sets the height as they're relative to each other.

The CSS:

![Trending News CSS](/assets/Screenshots/Desktop/4-trendingNewsCss)

#### Result

The result:

![Trending News Result](/assets/Screenshots/Desktop/4-trendingNewsResult)

## Deployment - Github
