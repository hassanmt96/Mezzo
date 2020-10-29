# Register

## As an anonymous user, I want to be able to register, so I can see all of the site's content.

- Will the user enter a username or an email address to register?

  - user will log in via email and password

- Will we confirm their password during register?

  - yes.

- What routes should we use for register?

  - GET/POST /register
  - register.pug

- Where should the user be redirected after register?

  - Home

- What happens if the user with the username or email already exists?

  - Error "User already exists"

- What happens if the user enters the wrong password confirmation?
  - Error passwords do not match

## Acceptance Criteria - register

- **Given** that I'm a user who has not signed up yet and

  - **When** I'm on the /register route
  - **Then** there will be a register form with an email, username, and password field and a "register" button to submit the form.

- **When** I try to fill out the form with an email or username that already exists with a valid password and press Enter or press the "register" button

  - **Then** at the top of the form, I will see a red message "User already Exists!"

- **When** I try to fill out the form with a password shorter than 6 characters and press Enter or press the "register" button

  - **Then** at the top of the form, I will see a red message Password must be at least 6 characters long.

- **When** I try to fill out the form with a valid email, username, and password and press Enter or press the "register" button

  - **Then** I will be redirected to the homepage at the / route.

- **Given** that I am a user that just signed up
    - **When** I refresh the homepage at the / route
    - **Then** I will still be logged in


# Log In

## As an anonymous user, I want to be able to log in, so that I can access my account

- Will the user use an email or username to log in?
    - User will log in with email and password
- What routes should we use for login?
    - User will log in via the /login route
- Where should the user be redirected after login?
    - User will be redirected to the '/' homepage.
- What happens if the user doesn't exist yet?
    - Display the message Invalid Login
- What happens if the user enters the wrong password?
    - Display the message Invalid Login
- Should logging in use session-based or use token-based authentication?
    - We will use session-based authorization
#

# View user profile page

# Update the account

# Delete an account

- As a logged in user, I want to be able to delete my account, so I can easily leave the community.
