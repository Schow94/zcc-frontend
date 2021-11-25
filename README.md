# ZCC - Frontend

- Runs on localhost:5000

### Required Dependencies:

- React.js
- Material-UI
- React icons
- Axios

### Install dependencies

- npm install

### How to start

- npm start

### Design Choices

- I chose to work with React, Node, and Express because I have experience using these technologies and am fairly competent with React.

- I decided to fetch all tickets in one request to save on API requests. Since I was using React on the frontend to display the tickets, it made it easier and quicker to toggle between different pages with pagination since all data had already been fixed. I could dynamically render different data on different "pages" much quicker with all the data loaded initially, than making a separate API request for each page. If there was significantly more data and it was more intensive to load all the data at once, I might have split it up into separate API requests. I'm also using a Node/Express server to initially fetch all the data from the Zendesk API, so I could see it being slow, bogged down more frequently with separate requests since the Node server is a middleman between the client and API. If React was fetching the data directly, I might have considered splitting it up into separate API requests.

- I opted to only show 10 tickets at a time and paginate when there's more than 10 tickets, because on my screen, it didn't look great with more than 10 tickets. 25 tickets would require a lot of scrolling and I didn't think an experience involving a lot of scrolling would have looked as nice on smaller screens.

ZCC - Backend needs to be running on localhost:5000 while ZCC - Frontend needs to be running on localhost:3000 in order to retrieve ticket data from Zendesk API
