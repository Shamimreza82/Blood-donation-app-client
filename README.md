# Blood Donation Application 

# Application Name: Life Lines
# Live Link: https://blood-donation-28936.web.app 


The Blood Donation Application is a platform designed to facilitate seamless blood donation activities, connecting donors with individuals in need of blood. This project is built using the MERN stack (MongoDB, Express.js, React, Node.js).

## Purpose and Scope

### Purpose
The purpose is to create a user-friendly platform for blood donation activities, promoting efficient donation processes by connecting donors with recipients.

### Scope
- User roles include Admin, Donor, and Volunteer, each with distinct permissions.
- User authentication features registration, login, and role-based access control.
- Dashboard functionalities tailored for donors, volunteers, and admins.
- Public pages for blood donation requests, donor search, blogs, and more.

## Features

### User Authentication
- Registration: Users can register with details including email, name, avatar, blood group, and address.
- Login: Registered users can log in using their email and password.

### Dashboard
- Profile Page: Users can view and update their profile information.
- Donor Dashboard: Allows donors to manage donation requests, view recent requests, and create new donation requests.
- Admin Dashboard: Features user and donation request management, content management, and user role modification.
- Volunteer Dashboard: Limited access compared to Admin, focused on donation request management and content management.

### Public Pages
- Home Page: Contains a banner, featured section, contact form, and footer with relevant links.
- Search Page: Allows users to search for donors based on criteria like blood group, location, and email.
- Blood Donation Requests Page: Displays pending donation requests with key details and a view button.

### Private Pages
- Blood Donation Details: Displays detailed information about a specific donation request and allows logged-in users to initiate donations.
- Blog Page: Showcases published blogs related to the application.

### Funding Page
- Allows users to provide funding for the organization using Stripe payment integration.
- Displays funding history in a tabular format.

### Additional Functionalities
- Responsive design implemented throughout the website.
- JWT implementation for login and protecting private APIs.

## Installation and Usage
- Clone the repository.
- Install dependencies using `npm install`.
- Set up environment variables.
- Run the application using `npm start`.




