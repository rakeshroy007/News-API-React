# NewsMonkey - React News App


## Project Description

**NewsMonkey** is a modern news web application built using React. It leverages the NewsAPI to fetch and display news articles from various categories. The app features a search functionality, infinite scrolling, and a sleek user interface with a top-loading progress bar for a smooth experience.

## Features

- **Multiple Categories:** Choose from categories such as Business, Entertainment, Health, Science, Sports, and Technology.
- **Search Functionality:** Search for specific news articles by keyword.
- **Infinite Scrolling:** Automatically load more articles as you scroll.
- **Top Loading Bar:** Shows loading progress while fetching new data.
- **Responsive Design:** Works well on both desktop and mobile devices.

## Tech Stack

- **React:** Front-end framework used to build the user interface.
- **React Router:** Handles navigation between different pages and categories.
- **NewsAPI:** Provides the latest news articles.
- **React Infinite Scroll:** Loads more articles as you scroll down.
- **React Top Loading Bar:** Displays a visual loading bar at the top during data fetching.

## Installation and Setup

### Clone the Repository
    git clone https://github.com/your-username/newsmonkey.git



 ### Install the dependencies:
    npm install

### Set Up Your API Key
- Obtain your `API key` from `NewsAPI`.
    - Visit `NewsAPI` and sign up for an account.
    - After signing in, navigate to the API keys section to generate a new API key.

-  Create a `.env` file in the root of your project with the following content:
    REACT_APP_NEWS_API = "your_api_key_here"

## Run the App
    npm start
## Access the App
Open your browser and go to http://localhost:3000 to see the app in action.
## Environment Variables
This app uses environment variables for the NewsAPI key. Ensure that you create a  `.env` file with the correct API key in your root directory as shown below:

    REACT_APP_NEWS_API=your_api_key
## Screenshots
![NewsMonkey](https://github.com/user-attachments/assets/d5cdd546-c03e-416b-b409-95509c5777f7)
<br><br><br>
![Screenshot (71)](https://github.com/user-attachments/assets/7d2ac598-0186-46da-9e15-e9fa5dda0db7)
<br><br><br>
![Screenshot (73)](https://github.com/user-attachments/assets/0e683324-1f90-4f6d-9bd0-db67c104fb2a)


## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

