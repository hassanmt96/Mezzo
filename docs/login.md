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
  - **Then** there will be a register form with an email, username, and password field, a confirm password field, and a "register" button to submit the form.

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
## Acceptance Criteria - Log in

- **Given** that I'm a user who has not signed in yet and

  - **When** I'm on the /login route
  - **Then** there will be a log in form with an email, username, and password field, and a "Log In" button to submit the form.

- **When** I successfully log in to my account
  - **Then** I will be redirected '/' home page

- **When** I submit the form and the user does not exist
  - **Then** there is a message displayed that says "User does not exist"

- **When** I submit the form and the provided password is incorrect
  - **Then** there is a message displayed that says "Password is incorrect"

- **Given** I have sucessfully logged in
  - **Then** the server will keep me logged in via a session


# Likes

## As a logged in user, I want to be able to like a story, so I can show I like a story.
- What happens when the user is not logged in?
  - We will have a pop up with a link to the /login page
- What route will a user be on to like a story?
  - /title
- How will a like be recorded?
  - There will be an entry in the "likes" table
- Will the like be shown visually to the user?
  - It will persist on the story until they unlike it
- Will there be a count of total likes per story?
  - Yes!
- How can a user remove their like?
  - Click the like button again.
  - The overall like count will decrement

## Acceptance Criteria - Likes
- **Given** that I am a logged in user
  - **When** I click the like button
  - **Then** my like will be stored in the database and a visual representation will be added to the screen

- **When** I click the like button again
  - **Then** the visual representation will change, and my like will be removed

- **Given** that I am a new or logged out user
  - **When** I click the like button
  - **Then** I will see a pop up instructing me to log in or register


# Stories

## Create a Story
### As a logged in user, I want to be able to post a story, so I can share my experience.
- How will the user reach the story creation form?
  - On the route /new-story
  - There will be a button for the form on the nav-bar
- What form fields are on the story form?
  - Title, subtitle, body, image link, author will be assigned to current user
- Can a user publish a story with any missing fields?
  - No, a pop up will appear and prompt them to complete the form
- When a user posts a story, where will they be redirected?
  - To the story's page, /title
- What happens if a story of the same title already exists?
  - The path to access that story will be /title/:id
- Can a logged out user create stories?
  - No, the button for the form will not appear

## Acceptance Criteria - Create a Story
- **Given** that I am a logged in user
  - **When** I click the "Create Story" button
  - **Then** I will be redirected to the form to create one
- **When** I submit the form and some of the fields are incomplete
  - **Then** I will see an alert telling me that the form is not completed.
- **When** I complete and sucessfully submit the form
  - **Then** I will be redirected to that story's page "/title"
- **Given** that I am a logged out user
  - **Then** I should not see the "Create Story" button.

## Search for a Story
### As a logged in user, I want to be able to search for a story, so I can find a story that I am interested in.

- How will a person search for a story?
  - Search bar in the nav bar
- (Bonus) Will the user be able to search by tags?
  - Yes, they will be redirects to /stories/tags
- Will a user see suggestions while they are typing?
  - If we get to the bonuses, sure.
- How can a user access Categories?
  - There will be links in the nav bar that redirect to /stories/category with all of the relevant stories
- What happens if a story does not exist/ was deleted?
  - redirects to /story-not-found with a message saying "No stories match that search"
- Can anybody search for stories, or must they be logged in?
  - Anybody can search and read stories

## Acceptance Criteria - Search for a Story
- **Given** that I am browsing the homepage
  - **When** I type in the searchbar and submit
  - **Then** I am either redirected to a results page, or the story not found page
- **When** I key down in the search bar
  - **Then** a suggestion will be prompted for me to select
- **When** I click on a category link
  - **Then** I will be redirected to a results page with all stories in that category.

## Edit a Story
### As a logged in user, I want to be able to edit my story, so I can update my thoughts.

- Should anybody be allowed to edit any story?
  - No, only the author of the story can edit them
- How will a user access the form to edit their story?
  - There will be a button that appears on the /story page
- Will anybody be able to see the button?
  - Only the author
- Will it be noticeable if the author edits their story?
  - There will be a timestamp showing the last time it was updated
- What form fields are on the edit story form?
  - Title, subtitle, body, image link, author will be assigned to current user
- Can a user publish an edited story with any missing fields?
  - No, a pop up will appear and prompt them to complete the form
- Can a user cancel their edit?
  - Changes will not be saved until they successfully submit the form
  - There will also be a cancel button

## Acceptance Criteria - Edit a Story
- **Given** that I am a logged in user
  - **When** I click edit on my own story page
  - **Then** I will be redirected to the edit story form
- **When** I do not fill out the edit form completely
  - **Then** I will see a message prompting me to complete it fully
- **When** I click submit and all the fields are filled out
  - **Then** my story will be updated with my edits
  - **Then** I will be redirected to the /story page
- **When** I click on a story that is not mine
  - **Then** I will not see the edit button at all
- **Given** that I am a logged out user
  - **Then** I will not see the edit button at all

## Delete a Story
### As a logged in user, I want to be able to delete my story, so I can retract my thoughts.

- Should you be logged in to delete a story?
  - Yes
- Do you need to be the author to delete the story?
  - Yes
- How will an author delete their story?
  - Button on the story page
- Will there be confirmation before deletion?
  - They will need to re-enter their password
  - A message will ask them if they are sure
- Will anybody besides the author be able to see the button?
  - No
- After they sucessfully delete the story where are they redirected?
  - A page that says their story was successfully deleted
  - /story-deleted
- Are all associated likes and comments deleted?
  - Yes

## Acceptance Criteria - Delete a Story
- **Given** that I am a logged in user
  - **When** I click the delete button on the /story page
  - **Then** I will see a pop-up prompting me to re-enter my password, and asking me if I am sure this is what I want to do
- **When** I enter an incorrect password
  - **Then** the pop-up will show an error, and "Please enter the correct password!"
- **When** I sucessfully delete my story
  - **Then** I am redirected to the /story-deleted page
  - **Then** all of the comments and likes are also deleted
- **When** I click on a story that is not my own
  - **Then** I will not see the delete button
- **Given** that I am a logged out user
  - **When** I click on a story
  - **Then** I will not see the delete button

# Follow a User
## As a logged in user, I want to be able to follow a user, so I can stay up to date with their stories.
- How will a user follow another?
  - There will be a follow button on the story that follows the author, and another on the article preview
- What benefits does following a user offer?
  - Their stories are listed in your feed, as well as the trending
- How can I unfollow an author?
  - I reclick either follow button
- What happens if I try to follow someone while not logged in?
  - I see a pop up telling me to sign up or log in.
- Will the be a visual change in the follow button once I follow a user?
  - The text will change from follow to following

## Acceptance Criteria - Follow a User
- **Given** that I am a logged in user
  - **When** I click the follow button on the /story page, or in the preview
  - **Then** I will follow that user, and see their articles in my feed
  - **Then** the text on the follow button will change from follow to following
- **When** I want to unfollow a user
  - **Then** I can simply click either follow button again
- **Given** that I am a logged out user
  - **When** I click follow
  - **Then** I will see a pop up prompting me to log in or sign up

# Comments

## Create a Comment
### As a logged in user, I want to be able to post a comment to a story, so I can express my thoughts on the story.
- How will a user post a comment?
  - /story
  - textarea at the bottom of the story
- Should guests be allowed to comment
  - Absolutely not
- Who can comment?
  - Any logged in user
- What if the user submits an empty comment?
  - A pop up will let them know that they need to enter a comment
- Is there a character limit?
  - Max 500, Min 1
- Where are the comments displayed?
  - Under the story
- Do comments display the user's name?
  - Yes, and their photo
- (Possible bonus) Can we like comments?
  - hopefully yes!

## Acceptance Criteria - Create a Comment
- **Given** that I am a logged in user
  - **When** I write a comment in the textarea and click submit
  - **Then** I will see my comment below the story
  - **Then** I will also see my picture with the comment
- **When** I try to post an empty comment, or one with more than 500 characters
  - **Then** I will see an error pop -up, letting me know where I went wrong
- **When** I successfully comment
  - **Then** the page will NOT be reloaded in order to see it (AJAX)
- **Given** that I am a logged out user
  - **When** I try to comment
  - **Then** I will see a pop up prompting me to log in or sign up

## Edit a Comment
### As a logged in user, I want to be able to edit my comment on a story, so I can change my thoughts on the story.
- How will a user edit their comment?
  - An edit button next to the comment
- Will the user be redirected to the edit form?
  - The editing will take place inline (AJAX)
- Will the button be visible on comments that are not yours?
  - No
## Acceptance Criteria - Edit a Comment
- **Given** that I am a logged in user
  - **When** I edit my comment in the textarea and click submit
  - **Then** I will see my comment below the story
  - **Then** I will also see my picture with the comment
- **When** I try to post an empty comment, or one with more than 500 characters
  - **Then** I will see an error pop -up, letting me know where I went wrong
- **When** I successfully edit my comment
  - **Then** the page will NOT be reloaded in order to see it (AJAX)


## Delete a Comment
### As a logged in user, I want to be able to delete my comments, so I can retract my thoughts.
- How will a user delete their comment?
  - Button next to the comment
- Will there be confirmation?
  - There will be an "Are you sure?" popup
- Can a user delete someone else's comments?
  - No, the button won't even show up
- Can the story author delete my comment?
  - Yes

## Acceptance Criteria - Delete a Comment
- **Given** that I am a logged in user
  - **When** I click the delete button next to my comment
  - **Then** there will be an "Are you sure?" popup
- **When** I see comments that are not mine
  - **Then** the delete button will not exist
- **Given** that I am the author of the story
  - **When** I click the delete button next to any comment on my story
  - **Then** there will be an "Are you sure?" popup
- **When** I confirm that I am sure
  - **Then** the comment will be deleted

# Deleting my Account
## As a logged in user, I want to be able to delete my account, so I can easily leave the community.
- How will a user delete their account?
  - There will be a button in the nav bar
- Will there be confirmation?
  - You must confirm that you are sure and supply your password
- What if the password does not match what we have?
  - Error message "Password does not match"
- Will a guest user see the delete option?
  - No
- Where will I be redirected upon a successful deletion?
  - To a 'Your account was deleted" page /user-deleted

## Acceptance Criteria - Deleting my Account
- **Given** that I am a logged in user
  - **When** I click the delete account button in the nav bar
  - **Then** there will be an "Are you sure?" popup, where I will need to re-enter my password
- **When** I supply an incorrect password
  - **Then** an error message will appear letting me know
- **When** I successfully delete my account
  - **Then** I will be redirected to a 'Your account was deleted" page /user-deleted
