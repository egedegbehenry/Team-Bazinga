# Rock Paper Scissors Lizard Spock - Team Bazinga
This website has been based on the Rock, Paper, Scissors, Lizard, Spock game popularised by the Big Bang Theory television series. This site provides an interactive version of the game where users can play against the computer, the first player to reach 10 is the winner. The website has been made to complete the second project within the Code Institute Full Stack Developer course and focuses predominately on the use of the Java Script language. It also uses HTML5 and CSS for the structure of the site being built in a way that allows it to be responsive across a range of devices.![Am I responsive? for Rock, Paper, Scissors, Lizard, Spock game website](/assets/readMe-images/RPSLS_responsive.png)

Link to live project: https://egedegbehenry.github.io/Team-Bazinga/

# User Experience
The target audience for this site are fans of the Big Bang Theory who will already be familiar with the game from watching the television series. The site is however, simple enough for players who have not watched the show to understand the concept very quickly. To enhance the user experience for fans of the show we incorporated elements such as branding the randomised computer output as Sheldon, one of the main characters from the television series. There is also a nod to Sheldon in the subheading, using a joke he makes in the series in regards to the number of qualifications after his name. 

The site navigation is kept as simple of possible, with only one main page. If users wish to understand the rules then there is a link entitled 'How to Play' which creates a pop up window when click and shows a diagram of the different characters and their outcomes. The rules are also emphasised in the game play with feedback after each turn as to why the players or Sheldon's turn was successful.

It is clear to the user which characters they are hovering over in the game because the  character image reduces in size and a border with a bright colour appears. The border colour changes to a different colour for each selection to further indicate to users that they are a different characters.

# User Stories
- As a new user, I want to know the name of the game, so that I can know what game I am to play.
- As a user, I want a simple and intuitive interface, so that I can easily understand how to play the game without any confusion.
- As a user, I want a simplified explanation of how to play the game and move interactions, so that I can understand how each move wins or loses against others.
- As a user, I want immediate feedback after each round, so that I know whether I won, lost, or tied the round.
- As a user, I want the game buttons to be responsive, so that my moves are registered immediately without any lag.
- As a user, I want the game to be optimized for mobile devices, so that I can play smoothly on my smartphone or tablet.

# Structure
The structure of this site is very simple:
- Game page; will hold the game content
- Rules page; linked from the home page and loads up in a pop-up

## Skeleton - Wireframes
In order to visualise the pages, the content has been mocked up using wireframes. Using wireframes at this stage of the development allows the freedom to be creative without being tied into the code. This gives a flavour of how the page will look and can be easily modified until agreement is reached.

Balsamiq was used to create wireframes with a target for how the site would look for each screen size:

Laptop screen view:
![Game page wireframe for laptop screen - Rock, Paper, Scissors, Lizard, Spock game](/assets/readMe-images/RPSLS_Home.png)

Tablet screen view
![Game page wireframe for tablet - Rock, Paper, Scissors, Lizard, Spock game](/assets/readMe-images/RPSLS_Tab.png)

Mobile phone screen view
![Game page wireframe for mobile - Rock, Paper, Scissors, Lizard, Spock game](/assets/readMe-images/RPSLS_Mob.png)


# Thematic Design:
Once the structure and wireframe have been agreed, the look and feel of the site can be developed. The theme is based on the Big Bang Theory and science themes along with Sci-Fi influence.
### Colour
The over-arching colour for the background is white which gives a simple look, and combined with red and black, the predomiant colours used on a lot of promotional material for The Big Bang Theory tv show (as shown below).

Example of Big Bang Colour Schemes:

![Big Bang promotional material to show reasoning for colour schemes](/assets/readMe-images/BigBangPoster3.jpg)

### Font
Google Fonts was used to find a font that portrays a Sci-Fi theme."Electrolize" was selected as it gives off a retro game / sci fi feel, fitting in with the themes of The Big  Bang Theory.
### Images and Icons
The imagery and icons for this website has been kept deliberately simple to not distract from the game. The background of the character images was chosen as black as this contrasts well against the white background and fits in with the colour schemes selected.
A rules image was used 

# Features:
- Scrolling text to display our team name.
- 'How to play' modal that opens up to display picture of the option outcomes within the game
- Character selections decreasing in size when hovered over
- Character selections feature a coloured border when hovered over
- Results banner displaying starting instructions and a win or lose meaage for each turn
- Score section that updates both computer and player score
- Choice display, showing what both the player and the computer selected on each turn
- Reset button to take the score back to 0

# Technologies

## Coding languages used: 
- HTML
- CSS
- Java Script
## External resources: 
- Google Fonts: 
“Electrolize” imported externally into the CSS file. This is the only font used in the project.
- Single "big bang" icon linked into the HTML file for the Favicon: 
The image for the favicon was from The Noun Project https://thenounproject.com/browse/icons/term/big-bang-theory/ and then turned into a favicon with the favicon converter from Favicon.io : https://favicon.io/favicon-converter/
- Am I Responsive?:
Used to test out how friendly the site is across various screen sizes. The responsive nature of the site is shown at the top of this document in the mock-up.
- Balsamiq:
Simple wireframing to draft out the basic structure of the pages before commiting to Git-Hub
- Git-hub is used to store the project files and is used to host the site. 
- GitPod was used as the IDE to code the website.
- Google Web Developer Tools:
Google Chrome was used as the browser for the development of this website game. The inbuilt Developer Tools were utilised to understand the HTML, CSS and Java Script workings in real-time.

# Accessibility
Considering how to make a website is accessible to all users should be high on the list of priorities during development. For this site the following aspects have been incorporated:
- Aria labels for the reset button
- Aria labels on the 5 game choice buttons

# Testing
The testing process is a key part of the development of any website. Before initial release the testing phase ensures the code is robust and will deliver the intended user experience.

## User Story Testing
The user goals were set-up at the start of development during the Strategy phase. The content requirements have been reviewed against the finished website:
- As a new user, I want to know the name of the game, so that I can know what game I am to play:
The name of the game is clearly displayed and contrasted well with the red heading.

- As a user, I want a simple and intuitive interface, so that I can easily understand how to play the game without any confusion:
There is a clear instruction on how to start the game and icons hover function is a good indicator of the selections available. 
Unfortunately on initial deployment these images were not displaying which we have logged as a bug.
- As a user, I want a simplified explanation of how to play the game and move interactions, so that I can understand how each move wins or loses against others:
This is achieved both with the diagram in the 'how to play' modal / popup and with the message in the results section. The intitial message is an instruction to choose a move to start. It was also decided that the 'first to 10 wins' instruction should be added here as it is close to the scoreboard and serves as a reminder. 
After each turn, feedback is given to show the winner of the turn and also explain the reason why. 
- As a user, I want immediate feedback after each round, so that I know whether I won, lost, or tied the round:
As above this feedback message is displayed. If more time had been available we would have liked to colour code the results box to indicate a win or loss.
- As a user, I want the game buttons to be responsive, so that my moves are registered immediately without any lag:
Buttons operate quickly with no lag.
- As a user, I want the game to be optimized for mobile devices, so that I can play smoothly on my smartphone or tablet:
Whilst the page is readable and there are no overlaps in text or pictures, this was not optimised effectively for mobile devices as there is too much scrolling needed. 
With more time we would have reduced the size of the icons so that they could fit more easily onto the screen without the user having to scroll. 

## Manual Testing
### Functionality testing:
Landing page:
- Page is being displayed as expected in terms of large screen layout
- Selection icons are not showing on the deployed page 
- Initial instruction to click the start button displayed as expected
- Win message displayed correctly when player wins and score is updated correctly
- Lose message displayed correctly when computer wins and score is updated correctly
- Draw message displayed correctly and score correctly doesn't change
- Correct images are displayed in the area showing the choices selected by player and computer. 
- Continues to play game until one player reaches 10 wins
- Game automatically restarts - Given more time we would have liked to introduce a winners message or image and force the clicking of the reset button to restart the game.
- Upon clicking the reset button, game resets to 0
### Responsiveness
Using Google Chrome Dev Tools, the responsiveness of the site can be tested through multiple view ports (device emulator).Testing was carried out using the following mobile devices; iPhone SE, iPhone XR, Pixel 5 and S20 Ultra. At the mobile screen size the game the player has to scroll and this would have been avoided if we had more time to fix and make the icons reduce in size.At the tablet size, iPad air and iPad mini both have one of the choice buttons on a new row. This isn't a functional problem but aesthetically does look a little unbalanced and could be address with another media query at a viewport size of around 850px. It also means that a small amount of scrolling is needed which would ideally be fized by reducing icon size.At the desktop size, the game fits without any issues. All 5 player choice buttons fit across the screen and the game looks balanced and centralised.
### Code Validation
Using W3C Markup validation the code has been checked for errors with the following results:
- HTML - Total of 2 HTML erros and 3 warnings. These included 3 warnings for empty headings and 2 erros for image srcs containing heights defined with % [HTML Validation](https://validator.w3.org/)

![HTML](/assets/readMe-images/HTML-CHECK.png)

- CSS - Total 1 error due to a syntax error in font weight. [CSS Validation](https://jigsaw.w3.org/css-validator/validator)

![CSS](/assets/readMe-images/css_valid.png)


# Bugs
1. Upon publishing the site with GitHub the selection icon images were not loading correctly.
2. The game does occasionally reset before a score has reached 10. 
3. Character elements are too big for mobile screens so too much scrolling is involved
4. There is no lasting message once the 10 rounds have been completed to display the winner. 

# Deployment
This project was developed using GitPod and all updates were committed to GitHub to keep track of changes and store the code. The website is deployed using GitHub Pages which provides a published link to the live site.
- Live site: https://egedegbehenry.github.io/Team-Bazinga/

# Future Implementation
Future Features would include:
- A character selector so that the player can choose to play against different characters from The Big Bang Theory
- More elements from the TV series such as quotes from the characters when they win or lose
- A message at the end of each round which declares the winner and freezes the game 
- An option to include sounds - important that these could also be turned off
- a more succinct version for mobile screens

# Credits 

### Content

- Bootstrap 5 was used to help with responsive structure and also add functionality for the modal. 

- Fonts are from Google Fonts

### Media:
- Rules page game diagram taken from Wikipedia: https://en.wikipedia.org/wiki/File:Rock_Paper_Scissors_Lizard_Spock_en.svg
- Rock, Paper, Scissors, Lizard and Spock images taken from Kickstarter: https://www.kickstarter.com/projects/38624063/rock-paper-scissors-lizard-spock-dice?ref=users
- Balsamiq was used for the wireframe
- Responsiveness tested on Am I Responsive: https://ui.dev/amiresponsive
- Favicon image was from The Noun Project https://thenounproject.com/browse/icons/term/big-bang-theory/ 
- Favicon made with the favicon converter from Favicon.io : https://favicon.io/favicon-converter/
### Code:
- HTML and CSS styling media queries code was taken from W3Schools online reference
- Styling based on: https://tr94.github.io/rock-paper-scissors-lizard-spock/
### README:
- Layout and content inspired by the README in 2 example projects provided to our group within the initial presentations:
https://github.com/jsith90/thats-my-spock and https://github.com/TR94/rock-paper-scissors-lizard-spock




