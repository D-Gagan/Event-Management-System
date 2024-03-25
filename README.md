# Event-Management-System

The Event Finder API is a RESTful web service that allows users to search for events happening near a specified location and on a given date. It provides a convenient way to discover events such as concerts, festivals, exhibitions, and more.

# Features

   Search by Location and Date: Users can search for events based on their current location (latitude and longitude) and a specific date.
   Pagination: The API supports pagination, allowing users to browse through multiple pages of search results.
   Detailed Event Information: Each event returned by the API includes information such as event name, city, date, weather, and distance from the user's location.
   Flexible Query Parameters: Users can customize their search by specifying the search date and adjusting the search radius.

# Technologies Used

   Node.js: The API is built using Node.js, a JavaScript runtime environment.
   
   Express.js: Express.js is used to create the web server and handle HTTP requests. 
   
   MongoDB: MongoDB is used as the database to store event data.
   
   Mongoose: Mongoose is an Object Data Modeling (ODM) library for MongoDB and is used for database interactions.

  API Documentation

The Event Finder API provides the following endpoints:

  GET /api/events/find: Search for events near a specified location and on a given date.
  
      Query Parameters:
       
           latitude: Latitude of the user's location.
           
           longitude: Longitude of the user's location.
           
           date: Date of the event in YYYY-MM-DD format.
           
           page: Page number for pagination.
           
           pageSize: Number of events to include per page.

  POST /api/events: Add a new event to the database.
       Request Body: JSON object containing event details (eventName, cityName, date, weather, distance_km)

# Setup and Running the Project

 To set up and run the project locally, follow these steps:

   1.Clone the repository from GitHub: repository link
   
   2.Navigate to the project directory.
   
   3.Install dependencies by running npm install.
   
   4.Set up environment variables by creating a .env file and adding your MongoDB URI.
   
   5.Start the server by running npm start.
   
   6.The server will be running on port 3001 by default.
   

# Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue on GitHub or submit a pull request.
