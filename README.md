@[papoita](https://github.com/papoita) | version 1.0.0


# Deployment

Deployed using Heroku, Netlify and CircleCI


[Papo's scheduler project](https://paposcheduler.netlify.app/)

# Interview Scheduler


This project was completed as part of Lighthouse Labs bootcamp by [Paola Perez Leiva](https://www.linkedin.com/in/perezleivapaola/)

* Interview Scheduler is a single-page application (SPA) that allows users to book technical interviews between students and mentors.
 * Each appointment has one student and one interviewer. When creating a new appointment, the user can enter any student name while the interviewer is chosen from a predefined list.
  * The user can save the appointment and view the entire schedule of appointments on any day of the week. Appointments can also be edited or deleted. 
  
 💡 The front end of this project is built with React and makes requests to an API to fetch and store appointment data from a database.

# Create an appointment
!["Create Appointment"](/docs/create_appointment.gif)

# Delete an appointment
!["Delete Appointment"](/docs/delete_appointment.gif)

# Edit an appointment
!["Edit Appointment"](/docs/edit_appointment.gif)

 # Project- outcomes
 * Use React to create a single page application (SPA) called Interview Scheduler
* Have the client application communicate with an API server over HTTP, using Axios to make calls to the API.
* Gain experience with different development environments, including Storybook, Jest, and Webpack Dev Server
## Setup

Install dependencies with `npm install`.

Run the client scheduler repo at port 8000 with `npm start`

Run the API scheduler-api repo at port 8001 with `npm start`


### Dependencies
* axios
* classnames
* normalize
* react
* react-dom
* react-scripts



## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

