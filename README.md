# User Authentication System

A backend authentication system built with **Node.js, Express, MongoDB, JWT, and Nodemailer**.

## Features
- User Registration
- User Login with JWT Authentication
- Password Reset via Email (Nodemailer)
- Input Validation & Error Handling
- Secure Password Hashing with bcrypt

## Technologies Used
- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Token (JWT)
- Bcrypt.js (for password hashing)
- Nodemailer (for email)
- Dotenv (for environment variables)

## Installation & Setup

### 1. Clone the repository
```sh
git clone https://github.com/akpaswan67/User-Authentication-System.git
cd User-Authentication-System

2. Install dependencies
	
	npm install

3. Set up environment variables
Create a .env file in the root directory and add the following:

	MONGO_URI=your_mongodb_connection_string
	JWT_SECRET=your_jwt_secret
	EMAIL=your_email@gmail.com
	EMAIL_PASS=your_email_password

4. Start the server
	npm start

Server runs on http://localhost:8000


API Endpoints
Authentication
1. Register User
	POST /auth/register
		{
			"name": "John Doe",
			"email": "johndoe@example.com",
			"password": "securepassword"
		}
2. Login User
	POST /auth/login
		{
			"email": "johndoe@example.com",
			"password": "securepassword"
		}	

3. Request Password Reset
	POST /auth/reset-password-request
		{
			"email": "johndoe@example.com"
		}

4. Reset Password
	POST /auth/reset-password
		{
			"token": "your_reset_token",
			"newPassword": "newsecurepassword"
		}





