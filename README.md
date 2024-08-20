# About me

### Hello There👋🏻 My name is [Ali Jahankah](https://linktr.ee/uaral), a self-taught learner Full-Stack JavaScript Dev based in London. I love Coding, learning new Languages like Python & React Native, Playing Online games, electric guitar, listening to musics and going to the gym. Candlemass, Gojira, Thy Light and Hich are my favourite bands.🤘

### Here is the some simple steps to run this Server Node/Express/TypeScript/WebSocket project. If you get any errors , bugs or questions, feel free to contact me via:

- [LinkedIn](https://www.linkedin.com/in/uaral/)
- [GitHub](https://github.com/Ali-Jahankah)
- [Gmail](mailto:alijahankhah8@gamil.com)

### you can also find a few blogs that I've written on Medium website below:

[My blogs on Medium](https://medium.com/@ali-jahankah)

# Overview

### This is a Node.js TypeScript application using Express and WebSocket.

- Data Caching: Upon starting the server, it makes an API call to fetch data and caches this data for 1 minute. A timer is then set to refresh this data every 60 seconds.

- WebSocket Integration: When a client connects via WebSocket, the server sends the current cached data along with the remaining time until the next update. This allows the client to display the data to the user and also set up a timer based on the remaining time.

- Client Communication: The server communicates the cached data and remaining time to the client upon connection. The client uses this information to display data and manage timers.

- Customization: The interval for data updates and the caching duration can be adjusted according to business requirements and team needs.

# Prerequisites

Ensure you have the following installed on your machine:

- Node.js version 20
- npm version 10.5

# Getting Started

### 1. Clone the Repository

1. Clone the Repository

```bash
git clone https://github.com/Ali-Jahankah/regions-status-server.git
```

```bash
cd regions-status-server
```

2.  Make Sure of the npm and Node Version

Ensure you are using Node 20 and npm 10.

3. Install Dependencies

```bash
npm install
```

4. Running the Project
   You will see that the project will run on port 4000. Make sure your port 4000 is not in use. Also make sure that you are in branch 'master' and to start the server in development mode, run:

```bash
npm start
```

# Deployed project

### This Server side project is deployed on Koyeb

[App link](https://progressive-rosanna-uaral-ab65fba8.koyeb.app/)
