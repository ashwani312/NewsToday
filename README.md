# News Web App

![App Demo](path/to/app/demo.gif)

## Overview

This News Web App is built with React.js and integrates Firebase Authentication for user authentication and News API from newsapi.org to fetch the latest news articles. Additionally, Redux is used to manage the user's watchlist, allowing them to add and remove articles for future reference.

## Screenshots

### Home page

![screencapture-localhost-3000-2023-12-06-16_42_03](https://github.com/ashwani312/NewsToday/assets/105036643/c8bb33eb-fb3a-49fa-815c-5875faee5353)

### Sign Up page

![screencapture-localhost-3000-register-2023-12-06-16_47_47](https://github.com/ashwani312/NewsToday/assets/105036643/ae8068a8-58d0-4d30-92ca-7de78aa1350f)


### Sign In page

![screencapture-localhost-3000-login-2023-12-06-16_48_03](https://github.com/ashwani312/NewsToday/assets/105036643/9421bbfb-8696-4525-bec1-9dda60747ba4)


## Features

- **Firebase Authentication:** Secure user authentication to access personalized features.
- **News API Integration:** Fetches real-time news articles from News API for a comprehensive news feed.
- **Redux Watchlist:** Allows users to add and remove articles from their watchlist for later reference.
- **Responsive Design:** The app is designed to provide a seamless experience across various devices.

## Tech Stack

- React.js
- Firebase Authentication
- News API (newsapi.org)
- Redux

## Getting Started

### Prerequisites

- Node.js and npm installed
- Firebase project set up with Authentication enabled
- News API key (get it from [newsapi.org](https://newsapi.org/))

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/news-web-app.git
cd news-web-app
 ```
2. Install frontend dependencies:
  ```bash
   cd appname
   npm install
   ```
3. Configure Firebase:
- Create a Firebase project and set up Authentication.
- Copy the Firebase configuration object from the Firebase Console.
- Create a .env file in the project root and add your Firebase configuration:
    ```bash
   REACT_APP_FIREBASE_API_KEY=your-api-key
  REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
  REACT_APP_FIREBASE_PROJECT_ID=your-project-id
  REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
  REACT_APP_FIREBASE_APP_ID=your-app-id
     ```
4. Configure News API:
   
 - Get your News API key from newsapi.org.
 - Create a .env file in the project root and add your News API key:
     ```bash
    REACT_APP_NEWS_API_KEY=your-news-api-key

     ```
  
5. Run the application:
    ```bash
     npm start
     ```
   Access the application in your browser at `http://localhost:3000`.

   ## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Happy Reading! 🚀**
