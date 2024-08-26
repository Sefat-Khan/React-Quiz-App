Quiz Project

Overview

This project is a web-based quiz application built using React, Firebase, and React Router. It allows
users to sign up, log in, take quizzes, and view their results. The application uses Firebase Firestore
for storing quiz data, user information, and quiz results.

Features

.User Authentication: Users can sign up and log in to access quizzes.
.Quizzes: Users can take quizzes, with questions dynamically loaded from Firestore.
.Results: After completing a quiz, users can view their score and a detailed analysis of their answers.
.Responsive Design: The application is responsive and works well on both desktop and mobile devices.
.Protected Routes: Routes are protected to ensure only authenticated users can access quizzes and results.

Project Structure

The project is organized into several components and pages:

.App.js: The main entry point that sets up routing and authentication context.
.Layout.js: A component that provides the overall layout for the application.
.Pages:

  .Home: The landing page that lists available videos.
  .SignUp: The sign-up page for new users.
  .Login: The login page for existing users.
  .Quiz: The quiz page where users take a quiz.
  .Result: The results page showing the user's score and analysis.

.Components:

  .Videos: Displays a list of videos that link to quizzes.
  .Illustration: Displays an illustration on the sign-up and login pages.
  .LoginForm: The form component for user login.
  .SignUpForm: The form component for user sign-up.
  .Answers: Handles displaying and managing answer options during a quiz.
  .ProgressBar: Displays quiz progress and handles navigation between questions.
  .MiniPlayer: A mini video player component for viewing videos alongside quizzes.
  .Summary: Displays the user's score after a quiz.
  .Analysis: Provides a detailed analysis of the user's quiz answers.

Firebase Integration

The project uses Firebase for authentication, Firestore for database storage, and Firestore security
rules to control access:

.Firestore Structure:

  .videos: Public read access for storing video data.
  .quiz and answers: Authenticated read/write access for storing quiz questions and answers.
  .result: Authenticated read/write access where users can only access their own results.
.Authentication: Firebase Authentication is used to manage user sign-up, login, and session persistence.

Installation

Prerequisites
.Node.js and npm installed on your local machine.
.A Firebase project set up with Firestore and Authentication enabled.

Steps
Clone the repository:https://github.com/Sefat-Khan/React-Quiz-App.git

bash
Copy code
git clone [https://github.com/yourusername/quiz-project.git](https://github.com/Sefat-Khan/React-Quiz-App.git)
cd quiz-project
Install dependencies:

bash
Copy code
npm install
Set up Firebase:

Create a .env file in the root of your project.
Add your Firebase configuration details:
bash
Copy code
REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_project_id.firebaseapp.com
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_project_id.appspot.com
REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_APP_ID=your_app_id
Run the application:

bash
Copy code
npm start
The application will be available at http://localhost:3000.

Usage

.Home Page: View a list of available quizzes.
.Sign Up/Login: Create an account or log in to access quizzes.
.Take a Quiz: Select a video to start a quiz. Answer the questions and submit to view your score.
.View Results: After completing a quiz, view your score and detailed analysis.

Custom Hooks

The project includes custom hooks for fetching data from Firestore:
.useQuizList: Fetches quiz questions based on the video ID.
.useAnswerList: Fetches the correct answers for a quiz.

Future Improvements

.Add more quiz categories.
.Implement a timer for quizzes.
.Enhance the UI/UX with animations and transitions.
.Add user profiles and leaderboards.
