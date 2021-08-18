<h1 align="center">Interactive General Knowledge Quiz</h1>

This is a quiz application to test one's general knowledge. The questions are based on a variety of subjects including AI, philosophy, politics, cybersecurity and the environment. It is designed to be interactive and accessible on a range of devices, making it easy to navigate for users. Results are displayed at the end and the user has an opportunity to be taken to an answer page to check their answers. 

## User Experience (UX)

-   ### User stories

    -   #### First Time User Goals

        1. As a First Time User, I want to easily understand the main function of the application.
        2. As a First Time User, I want to be able to easily navigate throughout application site to take the quiz.
        

    -   #### Returning Visitor Goals

        1. As a Returning Visitor, I want to quiz myself on the various topics.
        2. As a Returning Visitor, I want to find answers to the questions if I havent answered them all correctly.

    -   #### Frequent User Goals
        1. As a Frequent User, I want to check to see if there are any newly added questions.
        2. As a Frequent User, I want to improve my score.
        3. As a Frequent User, I want to be able to take the test as many times as I like. 
        

-   ### Design
    -   #### Colour Scheme
        -   The two main colours used are tomato, and a subtle black. Yellow is used for the correctly answered questions and red is used for the incorrectly answered question. Blues and greens are used in the headings and progress bar to add colour. 
    -   #### Typography
        -   The Courier font is the main font used throughout the whole website. Courier is a clean font used frequently in computing, so it is both attractive and appropriate for a beginner's application.
    -   #### Layout
        -   The layout is kept incredibly simple to match the beginner-style application of a quiz. 

*   ### Wireframes

    -   Home Page Wireframe - (https://github.com/)

    -   Quiz Wireframe - (https://github.com/)

    -   Answers Page Wireframe - (https://github.com/)

## Features

-   Responsive on all device sizes

-   Interactive elements

-   Progress Bar

-   Scoring system 

-   Clickable answers

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used


1. Adopted syntax from ES6 such as arrow function syntax (=>), the template literal syntax used and the spread operator 
1. [Bootstrap 5.1.0:](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [Balsamiq] (https://balsamiq.cloud/spaces): For wireframes


## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

-   [W3C Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) -(https://github.com/)
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - (https://github.com/)
- [JS Validtor] - (https://beautifytools.com/javascript-validator.php): Flagging up usage of ES6 syntax.

### Testing User Stories from User Experience (UX) Section

-   #### First Time Visitor Goals

    1. As a First Time User, I want to easily understand the main function of the application.

        1. Upon entering the site, users are automatically welcomed with a clean and easily readable button which takes them to play the quiz.
        2. The quiz starts immediately and continues after each time the user clicks an answer. 
        3. The user has three options at the end of the quiz. They can either have another go, go back to the home page or view the answers. 

    2. As a First Time User, I want to be able to easily navigate throughout application site to take the quiz.

        1. The site had been layed out very simply in order for the user to focus on the questions. There are no extra or unnecessary buttons as the quiz moves on after the user has clicked an answer.
        2. Above the questions there is a progress bar to indicate to the user how far he/she has progressed in the game. To the left there is a scoring section so the user can see how many points they gather along the way. 
        3. The end page displays the final score. There are then three buttons for the user. One is to take another round, the other is to go back to the homepage and the last one is to check the answers which are available on another page.   

    
    

-   #### Returning Visitor Goals

    1.  As a Returning Visitor, I want to quiz myself on the various topics.

        1. Various functions such as the Math.random function have been used in the javaScript file in order to generate random questions.
        2. These questions are an amalgamation of different topics including AI, philosophy, politics, cybersecurity and the environment.
    

    2.  As a Returning Visitor, I want to find answers to the questions if I havent answered them all correctly.

        1. If the user hasnt answered all questions correctly, they will be given a score at the end to see how well they've done.
        2.While taking the quiz, visitors are also informed on the spot as to whether they have answered the question correctly. This is done by changing the colour of the answer they have selected. It will show yellow if they have answered the correct answer and red if they have cicked an incorrect answer. 
        3. On the end page there is also a button for checking answers. This will take the user to the answer page so that they can test whether they know the answers after however many attempts. 
    

-   #### Frequent User Goals

    1. As a Frequent User, I want to check to see if there are any newly added questions.

        1. There can be extra questions added to the collection of questions already there. They will be generated randomly so that the user will come across them. 

    2.  As a Frequent User, I want to improve my score.
        1. The questoins are all multiple choice. This way the user has the opportunity to improve their score by taking the quiz several times and then remembering what the right and wrong answers are. 

    3. As a Frequent User, I want to be able to take the test as many times as I like. 
        1. There is a button when the user gets to the end page that will take the user back to the start page. 
        2. On the answers page there is also a link to the homepage where the user has the option to play the quiz again.
        3. Every time the user plays the quiz, the random generation of questions will make it that bit more interesting to save a repetitious layout of questions.  

### Further Testing

-   The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
-   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.
- Friends and family tested the quiz by taking it and received a random generation of questions sucessfully with scoring and a final score. 

### Known Bugs

-   On some mobile devices parts of the page are slightly cut off the page such as the buttons.
- Code editor is flagging up syntax used from ES6. I have referred to syntax from ES6 in the code such as arrow function syntax (=>), the template literal syntax used and the spread operator.

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code

-   [Bootstrap4](https://getbootstrap.com/docs/5.1/getting-started/introduction/): Bootstrap Library used throughout the project mainly to make site responsive using the Bootstrap Grid System. Its used mainly on the answer page to neatly display the long list of questions and answers. 

-   [MDN Web Docs](https://developer.mozilla.org/) : For various JavaScript functions. 

-  [W3CSS] (https://www.w3schools.com/w3css/w3css_progressbar.asp): Helpful to refer to for building a progress bar. 

- [Gresham College] (https://www.gresham.ac.uk/watch/?subject=&subcat=&files=&year=&search=yorick): Listened to lectures for questions. Specifically enjoyed those by Yorick Wilks. 

### Content

-   All content was written by the developer.

### Acknowledgements

-   My Mentor for continuous helpful feedback.

-   Tutor support at Code Institute for their support.