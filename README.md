# Rock Paper Scissors Lizard SpockThis website has been based on the Rock, Paper, Scissors, Lizard, Spock game popularised by the Big Bang Theory television series. This site provides an interactive version of the game where users can play against the computer, the first player to reach 10 is the winner.The website has been made to complete the second project within the Code Institute Full Stack Developer course and focuses predominately on the use of the Java Script language. It also uses HTML5 and CSS for the structure of the site being built in a way that allows it to be responsive across a range of devices.![Am I responsive? for Rock, Paper, Scissors, Lizard, Spock game website](/assets/readMe-images/RPSLS_responsive.png)Link to live project: https://egedegbehenry.github.io/Team-Bazinga/# User ExperienceThe target audience for this site are fans of the Big Bang Theory who will already be familiar with the game from watching the television series. This site is intended to allow them to play the game, as seen on television, against a randomised computer output.The user goals for new and returning users are the same:
- As a user, I want a simple and intuitive interface, so that I can easily understand how to play the game without any confusion.
- As a new user, I want a tutorial mode that guides me through the basics of the game, so that I can quickly learn how to play.
- As a user, I want a simplified explanation of how to play the game and move interactions, so that I can understand how each move wins or loses against others.
- As a user, I want immediate feedback after each round, so that I know whether I won, lost, or tied the round.
- As a user, I want the game to be optimized for mobile devices, so that I can play smoothly on my smartphone or tablet.# Development PlanesTo develop the site in a structured manner the 5 development planes have been considered. Working through these in a systematic manner allows the key building blocks of the site to be in place before fine tuning the aesthetics. Working methodically in this way should result in the initial release being much closer to the final desired output.## StrategyThere are no commercial drivers for this website, it’s pure focus is to provide an interactive game for fans of the Big Bang Theory series. Therefore the only strategic requirements for the site are to ensure the user has an authentic gaming experience which:
- Is accurate to the rules of the game
- Feels genuine I.e; computer opponent is fair
- Is interactive and engaging## ScopeDefining the scope at this early stage allows the development work to stay focused, it agrees what is on and off the table for the initial release.Based on the user experience and strategy above, the content requirements are:
- A reminder of the rules of the game
- A game area for the user to interact with
- A goal for the user to work towards
- A score counter for the user to being to track against the goal
- Feedback for the result of each round## Structure
The structure of this site is very simple:
- Game page; will hold the game content
- Rules page; linked from the home page and loads up in a pop-up## SkeletonIn order to visualise the pages, the content has been mocked up using wireframes. Using wireframes at this stage of the development allows the freedom to be creative without being tied into the code. This gives a flavour of how the page(s) will look and can be easily modified until agreement is reached.Balsamiq was used to create the wireframes:Game page:![Game page wireframe for laptop screen - Rock, Paper, Scissors, Lizard, Spock game](/assets/readMe-images/RPSLS_Home.png)
![Game page wireframe for tablet - Rock, Paper, Scissors, Lizard, Spock game](/assets/readMe-images/RPSLS_Tab.png)
![Game page wireframe for mobile - Rock, Paper, Scissors, Lizard, Spock game](/assets/readMe-images/RPSLS_Mob.png)At this stage, the wireframes are reviewed against the original goals and strategy for the site. It is important to check the design is fit for purpose before committing to the coding process.Review against the content requirements:
A reminder of the rules of the game:
- Adding the rules into the main game would have distracted from the game and made the page quite busy. Button added which opens a new tab and displays the rules for users that need a reminder.
A game area for the user to interact with:
- Clear instructions will be given on how to operate the game, and hover functions implemeted .
A goal for the user to work towards:
- First to 10 wins is the clear goal for this game
A score counter for the user to track against the goal:
- Score counter included to keep track against the goal
Feedback for the result of each round:
- "Win or Lose" box will display the result of each round such as "paper covers rock".For this site the review showed the design to meet the requirements and therefore agreement was made to proceed.## Surface:
Once the structure and wireframe have been agreed, the look and feel of the site can be developed. This may need to align to branding but in the case of this site there are no commercial requirements.Based on the Big Bang Theory and science themes along with Sci-Fi Spock influence, the styling for this site is a space/sci-fi theme.### Colour
The over-arching colour for the background is white which gives a simple look, and combined with red and black, the predomiant colours used on a lot of promotional material for The Big Bang tv show.The hover colours for each button as carried through from the image explaining the game rules (hyperlinked "rules" button).The results feedback box uses simple colours to denote win (green) and lose (red) which is easily understandable to the player.
1:58
### Font
Google Fonts was used to find a font pairing that portrays a Sci-Fi theme."Electrolize" was selected as it gives off a retro game / sci fi feel, fitting in with the themes of The Big  Bang Theory.### Images and Icons
The imagery and icons for this website has been kept deliberately simple to not distract from the game.# Features:
The game page has been split into several sections which has distinct purposes.Button area:
This has 4 buttons in total however they are displayed at different points within the game.
- Rules: The "rules" button is always on show and this links to a new tab page displaying the rules.
- Start: "Start" has to be clicked by the player before the game can start. The reset of the game functionality is locked until this button is clicked.
- Quit: Once the "start" button has been clicked it disappears and is replaced with a "quit" button. This is clicked if the player wants to end the game and it resets the game.
- Reset: Once the game has been played out and one of the players has reached 10 wins the game will declare the winner. At this point the "quit" button will disappear and be replaced with a "reset" button which also resets the game.Results / Feedback area:
This provides instructions and feedback to the player.
As soon as the first choice is made this area then becomes feedback on the results of each round such as "rock smashes scissors - player wins!"Game area:
The area where the head to head gaming happens. The player and computer choices are displayed here next to each other for each round.Score counter area:
The scores are kept in a simple counter in this area.# Technologies used:## Coding languages used: HTML
CSS
Java Script## External resources: Google Fonts: “Orbitron” imported externally into the CSS file. This is the only font used in the project.Font Joy:
Suggested the pairings of “Orbitron” title font with a suitable body text font which was "Prompt”.Font Awesome:
Single "big bang" icon linked into the HTML file for the tab title.Am I Responsive?:
Used to test out how friendly the site is across various screen sizes. The responsive nature of the site is shown at the top of this document in the mock-up.Balsamiq:
Simple wireframing to draft out the basic structure of the pages before commiting to coding.Git-Hub / Code Anywhere:
Git-hub is used to store the project files and is used to host the site. GitPod was used as the IDE to code the website.Google Web Developer Tools:
Google Chrome was used as the browser for the development of this website game. The inbuilt Developer Tools were utilised to understand the HTML, CSS and Java Script workings in real-time.# Accessibility: Considering how to make a website is accessible to all users should be high on the list of priorities during development. For this site the following aspects have been incorporated:
- Aria labels for the reset button
- Aria labels on the 5 game choice buttons
- Aria label on the “rules page” link stating it opens in a new tab# Testing
The testing process is a key part of the development of any website. Before initial release the testing phase ensures the code is robust and will deliver the intended user experience.## User Goals
The user goals were set-up at the start of development during the Strategy phase and reviewed again during the Skeleton phase. The content requirements have been reviewed against the finished website:A reminder of the rules of the game:
- The "Rules" button gives players the option to open a pop up which displays an image explaining which move beats which.
A game area for the user to interact with:
- Interaction points are intuitive for the player using the standard convention of a cursor change when hovering over clickable elements.
- The game choice buttons also have a border colour which is activated when the player hovers over the specific image.
- Instructions are given in the centre of the page which make it clear what is expected of the player at various stages in the game.
A goal for the user to work towards:
- The goal of "First to 10 wins" is clearly stated in the results section.
- The game has been set-up to finish after one of the players reaches 10 wins.
A score counter for the user to track against the goal:
- There is a simple counter that clearly displays the scores during the game
Feedback for the result of each round:
- The box in the centre of the page gives instructions showing the player what they need to do
- This box also gives an appropriate message depending on the result of each round
- Another message is displayed once the game has finished - one player has reached 10 wins.
New
1:58
## Manual Testing
### Functionality testing:
Landing page:
- Page is being displayed as expected
- selection icons are not showing on the deployed page
- Initial instruction to click the start button displayed as expected
- Scores are both reading 0Game begins with player making first selection, for this instance Player chooses rock, Computer chooses spock:
- Correct message is displayed
- Computer wins and therefore computer score is raised to 1Player makes next selection, for this instance Player chooses scissors, Computer chooses scissors:
- Draw message displayed
- Neither player win therefore no changes to score counterPlayer makes next selection, for this instance Player chooses rock, Computer chooses lizard:
- Correct message is displayed
- Correct images are displayed in the game area
- Player wins and therefore player score is raised to 1Continues to play game until one player reaches 10 wins, for this instance computer wins:
- Results message, game images and score counter checked for each round played
- Correct results messageGame reset:
- Upon clicking the reset button, game starts again from the beginning### Responsiveness
Using Google Chrome Dev Tools, the responsiveness of the site can be tested through multiple view ports (device emulator).Testing was carried out using the following mobile devices; iPhone SE, iPhone XR, Pixel 5 and S20 Ultra. At the mobile screen size the game the player has to scroll and this would have been avoided if we had more time to fix and make the icons reduce in size.At the tablet size, iPad air and iPad mini both have one of the choice buttons on a new row. This isn't a functional problem but aesthetically does look a little unbalanced and could be address with another media query at a viewport size of around 850px. It also means that a small amount of scrolling is needed which would ideally be fized by reducing icon size.At the desktop size, the game fits without any issues. All 5 player choice buttons fit across the screen and the game looks balanced and centralised.### Code Validation
Using W3C Markup validation the code has been checked for errors with the following results:HTML, Game page (index.html):
- No errors reportedCSS, (style.css):
- No errors reported# Bugs
1. Upon publishing the site with GitHub the selection icon images were not loading correctly.# DeploymentThis project was developed using GitPod and all updates were committed to GitHub to keep track of changes and store the code. The website is deployed using GitHub Pages which provides a published link to the live site.Live site: https://egedegbehenry.github.io/Team-Bazinga/# Credits ## Media:
- Rules page game diagram taken from: https://en.wikipedia.org/wiki/File:Rock_Paper_Scissors_Lizard_Spock_en.svg
- Rock, Paper, Scissors, Lizard and Spock images taken from: https://www.kickstarter.com/projects/38624063/rock-paper-scissors-lizard-spock-dice?ref=users## Code:
- HTML and CSS styling
- media queries code was taken from W3Schools online reference
- styling based on: https://tr94.github.io/rock-paper-scissors-lizard-spock/
egedegbehenry.github.io
Rock, Paper, Scissors, Lizard, Spock
Rock, Paper, Scissors, Lizard, Spock online game
WikipediaWikipedia
File:Rock Paper Scissors Lizard Spock en.svg (202 kB)
https://en.wikipedia.org/wiki/File:Rock_Paper_Scissors_Lizard_Spock_en.svg
KickstarterKickstarter
Rock Paper Scissors Lizard Spock Dice
Dice to help resolve any conflict that a geek may find themselves in, like who has the better imaginary super-power. Bazinga! (113 kB)
https://www.kickstarter.com/projects/38624063/rock-paper-scissors-lizard-spock-dice?ref=users
tr94.github.io
Rock, Paper, Scissors, Lizard, Spock
Rock, Paper, Scissors, Lizard, Spock online game



