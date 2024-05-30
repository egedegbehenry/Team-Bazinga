# Rock Paper Scissors Lizard Spock

This website has been based on the Rock, Paper, Scissors, Lizard, Spock game popularised by the Big Bang Theory television series. This site provides an interactive version of the game where users can play against the computer, the first player to reach 10 is the winner. 

The website has been made to complete the second project within the Code Institute Full Stack Developer course and focuses predominately on the use of the Java Script language. It also uses HTML5 and CSS for the structure of the site being built in a way that allows it to be responsive across a range of devices. 

![Am I responsive? for Rock, Paper, Scissors, Lizard, Spock game website](/assets/readMe-images/RPSLS_responsive.png)


Link to live project: https://egedegbehenry.github.io/Team-Bazinga/

# User Experience

The target audience for this site are fans of the Big Bang Theory who will already be familiar with the game from watching the television series. This site is intended to allow them to play the game, as seen on television, against a randomised computer output. 

The user goals for new and returning users are the same:
- As a user, I want a simple and intuitive interface, so that I can easily understand how to play the game without any confusion.
- As a new user, I want a tutorial mode that guides me through the basics of the game, so that I can quickly learn how to play.
- As a user, I want a simplified explanation of how to play the game and move interactions, so that I can understand how each move wins or loses against others.
- As a user, I want immediate feedback after each round, so that I know whether I won, lost, or tied the round.
- As a user, I want the game to be optimized for mobile devices, so that I can play smoothly on my smartphone or tablet.

# Development Planes

To develop the site in a structured manner the 5 development planes have been considered. Working through these in a systematic manner allows the key building blocks of the site to be in place before fine tuning the aesthetics. Working methodically in this way should result in the initial release being much closer to the final desired output. 

## Strategy

There are no commercial drivers for this website, it’s pure focus is to provide an interactive game for fans of the Big Bang Theory series. Therefore the only strategic requirements for the site are to ensure the user has an authentic gaming experience which:
- Is accurate to the rules of the game
- Feels genuine I.e; computer opponent is fair
- Is interactive and engaging

## Scope

Defining the scope at this early stage allows the development work to stay focused, it agrees what is on and off the table for the initial release. 

Based on the user experience and strategy above, the content requirements are:
- A reminder of the rules of the game 
- A game area for the user to interact with
- A goal for the user to work towards 
- A score counter for the user to being to track against the goal
- Feedback for the result of each round

## Structure
The structure of this site is very simple:
- Game page; will hold the game content  
- Rules page; linked from the home page and opens in a new tab. A static page showing the rules

![Site Map for Rock, Paper, Scissors, Lizard, Spock game website](/assets/readMe-images/RPSLS_Structure.png)

## Skeleton

In order to visualise the pages, the content has been mocked up using wireframes. Using wireframes at this stage of the development allows the freedom to be creative without being tied into the code. This gives a flavour of how the page(s) will look and can be easily modified until agreement is reached. 

Balsamiq was used to create the wireframes: 

Game page:

![Game page wireframe for laptop screen - Rock, Paper, Scissors, Lizard, Spock game](/assets/readMe-images/RPSLS_Home.png)
![Game page wireframe for tablet - Rock, Paper, Scissors, Lizard, Spock game](/assets/readMe-images/RPSLS_Home.png)
![Game page wireframe for mobile - Rock, Paper, Scissors, Lizard, Spock game](/assets/readMe-images/RPSLS_Home.png)


At this stage, the wireframes are reviewed against the original goals and strategy for the site. It is important to check the design is fit for purpose before committing to the coding process. 

Review against the content requirements: 
A reminder of the rules of the game:
- Adding the rules into the main game would have distracted from the game and made the page quite busy. Button added which opens a new tab and displays the rules for users that need a reminder.
A game area for the user to interact with:
- Clear instructions will be given on how to operate the game, and hover functions implemeted . 
A goal for the user to work towards:
- First to 10 wins is the clear goal for this game
A score counter for the user to track against the goal:
- Score counter included to keep track against the goal
Feedback for the result of each round:
- "Win or Lose" box will display the result of each round such as "paper covers rock".

For this site the review showed the design to meet the requirements and therefore agreement was made to proceed. 

## Surface:
Once the structure and wireframe have been agreed, the look and feel of the site can be developed. This may need to align to branding but in the case of this site there are no commercial requirements. 

Based on the Big Bang Theory and science themes along with Sci-Fi Spock influence, the styling for this site is a space/sci-fi theme.  

### Colour
The over-arching colour for the background is white which gives a simple look, and combined with red and black, the predomiant colours used on a lot of promotional material for The Big Bang tv show. 

The hover colours for each button as carried through from the image explaining the game rules (hyperlinked "rules" button). 

The results feedback box uses simple colours to denote win (green) and lose (red) which is easily understandable to the player. 

### Font
Google Fonts was used to find a font pairing that portrays a Sci-Fi theme.

"Electrolize" was selected as it gives off a retro game / sci fi feel, fitting in with the themes of The Big  Bang Theory.

### Images and Icons
The imagery for this website has been kept deliberately simple to not distract from the game. The player choice buttons has been imaged with the hand signals for each option, to keep the game feeling more like the way it was played in person in the TV show.

# Features: 
The game page has been split into several sections which has distinct purposes. 

Button area:
This has 4 buttons in total however they are displayed at different points within the game. 
- Rules: The "rules" button is always on show and this links to a new tab page displaying the rules. 
- Start: "Start" has to be clicked by the player before the game can start. The reset of the game functionality is locked until this button is clicked.
- Quit: Once the "start" button has been clicked it disappears and is replaced with a "quit" button. This is clicked if the player wants to end the game and it resets the game. 
- Reset: Once the game has been played out and one of the players has reached 10 wins the game will declare the winner. At this point the "quit" button will disappear and be replaced with a "reset" button which also resets the game.

Choice area: 
This area is "unlocked" once the "start" button has been clicked. The player can then make their choice for the round by clicking on their desired image. The cursor changes to indicate a clickable link and when hovering over any of the images a border colour is added to make the choice clear and interative. 

Results / Feedback area:
This provides instructions and feedback to the player. 
Upon loading the game the instruction is provided to click the "start" button. 
Once the "start" button is clicked, the instruction is provided to make a choice using the 5 image buttons. 
As soon as the first choice is made this area then becomes feedback on the results of each round such as "rock smashes scissors - player wins!"
When one of the players reaches 10 the box colour fills red or green and declares the final winner with an instruction to click the "reset" button. 

Game area:
The area where the head to head gaming happens. The player and computer choices are displayed here next to each other for each round. 

Score counter area: 
The scores are kept in a simple counter in this area. 

# Technologies used:

## Coding languages used: 

HTML
CSS
Java Script

## External resources: 

Google Fonts: “Orbitron” and “Prompt” fonts imported externally into the CSS file. These are the only two fonts used in the project.

Font Joy:
Suggested the pairings of “Orbitron” title font with a suitable body text font which was "Prompt”.

Font Awesome:
Single "fist" icon linked into the HTML file for the tab title.

Am I Responsive?:
Used to test out how friendly the site is across various screen sizes. The responsive nature of the site is shown at the top of this document in the mock-up.

Balsamiq:
Simple wireframing to draft out the basic structure of the pages before commiting to coding.

Git-Hub / Code Anywhere:
Git-hub is used to store the project files and is used to host the site. Code Anywhere was used as the IDE to code the website.

Google Web Developer Tools:
Google Chrome was used as the browser for the development of this website game. The inbuilt Developer Tools were utilised to understand the HTML, CSS and Java Script workings in real-time.

# Accessibility: 

Considering how to make a website is accessible to all users should be high on the list of priorities during development. For this site the following aspects have been incorporated:
- Aria labels for the 3 game buttons (start, quit, reset)
- Aria labels on the 5 game choice buttons
- Aria label on the “rules page” link stating it opens in a new tab

Within Google Developer tools, Lighthouse is a way of measuring the accessibility of a website. For this site the report shows as below:

![Lighthouse scores for Rock, Paper, Scissors, Lizard, Spock game](/assets/readMe-images/RPSLS_lighthouse.png)

# Testing
The testing process is a key part of the development of any website. Before initial release the testing phase ensures the code is robust and will deliver the intended user experience. 

## User Goals
The user goals were set-up at the start of development during the Strategy phase and reviewed again during the Skeleton phase. The content requirements have been reviewed against the finished website: 

A reminder of the rules of the game:
- The "Rules" button gives players the option to navigate to a seperate page if they need a reminder of the game rules.
A game area for the user to interact with:
- Interaction points are intuitive for the player using the standard convention of a cursor change when hovering over clickable elements.
- The game choice buttons also have a border colour which is activated when the player hovers over the specific image.
- Instructions are given in the centre of the page which make it clear what is expected of the player at various stages in the game.
A goal for the user to work towards:
- The goal of "First to 10 wins" is clearly stated at the top of the page
- The game has been set-up to finish after one of the players reaches 10 wins
A score counter for the user to track against the goal:
- At the bottom of the page there is a simple counter that clearly displays the scores during the game
Feedback for the result of each round:
- The box in the centre of the page gives instructions showing the player what they need to do
- This box also gives an appropriate message depending on the result of each round
- Another message is displayed once the game has finished - one player has reached 10 wins.

## Manual Testing
### Functionality testing:
Landing page:
- Page is being displayed as expected 
- Quit button and Reset button are hidden as expected
- Initial instruction to click the start button displayed as expected 
- Game area is blank as expected
- Scores are both reading 0

Start button clicked:
- Start button is replaced with Quit button 
- Instruction changes, displaying correct message 
- Game area displaying message in "Computer" choice area with appropriate timer delay 

Game begins with player making first selection, for this instance Player chooses rock, Computer chooses spock:
- Correct message is displayed with correct border colour 
- Correct images are displayed in the game area
- Computer wins and therefore computer score is raised to 1

Player makes next selection, for this instance Player chooses scissors, Computer chooses scissors:
- Draw message displayed with correct border color
- Correct images are dispalted in the game area
- Neither player win therefore no changes to score counter

Player makes next selection, for this instance Player chooses rock, Computer chooses lizard:
- Correct message is displayed with correct border colour
- Correct images are displayed in the game area
- Player wins and therefore player score is raised to 1

Continues to play game until one player reaches 10 wins, for this instance computer wins:
- Results message, game images and score counter checked for each round played
- Correct results message and fill colour displayed for computer winning
- Quit button replaced with reset button
- Player choice buttons locked so game cannot continue

Game reset:
- Upon clicking the reset button, game starts again from the beginning

Quit during game play:
- Upon clicking the quit button, game starts again from the beginning

### Responsiveness 
Using Google Chrome Dev Tools, the responsiveness of the site can be tested through multiple view ports (device emulator). 

Testing was carried out using the following mobile devices; iPhone SE, iPhone XR, Pixel 5 and S20 Ultra. At the mobile screen size the game fits onto the screen without having to scroll to reach buttons. The buttons are smaller for screens less than 550px wide to ensure the game fits appropriately.

At the tablet size, iPad air and iPad mini both have one of the choice buttons on a new row. This isn't a functional problem but aesthetically does look a little unbalanced and could be address with another media query at a viewport size of around 850px. 

At the desktop size, the game fits without any issues. All 5 player choice buttons fit across the screen and the game looks balanced and centralised. 

### Code Validation
Using W3C Markup validation the code has been checked for errors with the following results:

HTML, Game page (index.html): 
- 1 error: button element must not be within an anchor element 
- This error was initially addressed by setting up a "Rule button" event listener and using JavaScript code (window.open) to open a new tab with the rules page when the button is clicked. This worked in the IDE but after publishing, the file path didn't work as expected. GitHub Pages likes absolute file paths but this didn't seem to make a difference on this occasion. This error was eventually fixed by turning the "Rules" link back to an anchor element and then styling it to look like a button. 

HTML, Rules page (rules.html): 
- 1 error: bad attribute using height 600px with img element. 

CSS, (style.css):
- No errors reported 

# Bugs
1. Upon publishing the site with GitHub it was clear that relative pathways were not working and caused a problem with loading the images on the website. This was easily fixed by updating all the file pathways to absolute. 

2. An issue that is systematic with the way the code has been built is the final declaration of the winner. The intent is for the winner to be declared as soon as they reach 10 wins on the score counter. The score counter functions stem off the event listeners for the 5 player choice buttons which has caused a quirk in the code. The player can reach and display a score of 10 however the winner isn't declared until the next round is played and the score counter function is called again. Although this isn't an issue to the game play it's a little clunky and would benefit from being resolved. Unfortunately time has run out to be able to address this in the initial release.

![Winner score bug for Rock, Paper, Scissors, Lizard, Spock game](/assets/readMe-images/RPSLS_win_bug.png)

# Deployment

This project was developed using Code Anywhere and all updates were committed to GitHub to keep track of changes and store the code. The website is deployed using GitHub Pages which provides a published link to the live site. 

Live site: https://tr94.github.io/rock-paper-scissors-lizard-spock/

# Credits 

## Media:
- Rules page game diagram taken from: https://www.momonhg.com/blog/rock-paper-scissors-lizard-and-spock-game
- Rock, Paper, Scissors, Lizard and Spock images taken from: https://github.com/topics/rock-paper-scissors-lizard-spock?l=html

## Words: 
- Rules page words taken directly from: https://the-big-bang-theory.com/rock-paper-scissors-lizard-spock/

## Code:
- setTimeOut function was taken from W3Schools online reference 
- location.reload function was taken from W3Schools online reference 
- window.open method for making a button a hyperlink was taken from online site "Codex World, How to Open URL in New Tab using JavaScript"

## Acknowledgements:
- Thank you to the tutor support at Code Institute for helping me with the different types of variables and how to pass them through functions
- Thank you to my mentor for their help in guiding the project, technical code advice and improvement suggestions