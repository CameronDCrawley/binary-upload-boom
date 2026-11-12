# Binary Upload Boom — Full-Stack Photo Sharing Social Network

A full-stack, Instagram-style social network where users create an account, upload photos with captions, browse a community feed, like posts and leave comments. Built by Cameron Crawley with Node.js, Express, MongoDB and Cloudinary.

**Live Demo:** [binary-upload-boom-0g5k.onrender.com](https://binary-upload-boom-0g5k.onrender.com/)

## Overview

Binary Upload Boom started from the 100Devs social network starter and was extended into a working photo-sharing app. It follows the MVC pattern (models, views, controllers), handles secure user authentication and stores uploaded images in the cloud, so posts stay available no matter where the app is hosted.

## Features

* **User Authentication:** Sign up, log in and log out with Passport.js (local strategy). Passwords are hashed with bcrypt, and sessions are stored in MongoDB so users stay logged in.
* **Form Validation:** Checks for a valid email, a password of at least 8 characters and matching passwords, and blocks duplicate usernames or emails, with flash messages for errors.
* **Image Uploads:** Upload `.jpg`, `.jpeg` or `.png` photos with a title and caption. Multer handles the file, and Cloudinary stores and serves the image.
* **Profile Page:** Shows your username and email, an upload form and a grid of your own posts.
* **Community Feed:** Browse every user's posts, newest first.
* **Post Page:** View a full-size image with its caption, like it, and delete it if it's yours. Deleting a post also removes the image from Cloudinary.
* **Comments:** Add comments to any post. Each comment is linked to its post and its author.
* **Protected Routes:** The profile, feed and post pages are only available to logged-in users.

## Tech Stack

* **Backend:** Node.js, Express
* **Database:** MongoDB with Mongoose
* **Authentication:** Passport.js (passport-local), bcrypt, express-session, connect-mongo
* **File Uploads & Storage:** Multer, Cloudinary
* **Views & Styling:** EJS templates, Bootstrap, Font Awesome
* **Utilities:** validator, express-flash, method-override, morgan, dotenv, nodemon
* **Hosting:** Procfile included for Heroku-style deployment (`web: node server.js`)

## Project Structure

```
binary-upload-boom/
├── config/        # Database connection, Passport setup, .env (not committed)
├── controllers/   # Auth, home and post logic
├── middleware/    # Auth guards, Cloudinary config, Multer upload filter
├── models/        # User, Post and Comment schemas
├── public/        # CSS and images
├── routes/        # Main and post routes
├── views/         # EJS pages and partials
└── server.js      # App entry point
```

## Local Setup

1. Clone the repository:

```
git clone https://github.com/CameronDCrawley/binary-upload-boom.git
cd binary-upload-boom
```

2. Install dependencies:

```
npm install
```

3. Create a `.env` file inside the `config` folder and add:

```
PORT = 2121
DB_STRING = your MongoDB connection string
CLOUD_NAME = your Cloudinary cloud name
API_KEY = your Cloudinary API key
API_SECRET = your Cloudinary API secret
```

4. Run locally:

```
npm start
```

Then open `http://localhost:2121` in your browser.


<img width="1420" height="722" alt="image" src="https://github.com/user-attachments/assets/12b2a703-0876-4168-85d1-ac8c27eb8664" />

