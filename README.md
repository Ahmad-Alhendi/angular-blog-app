# Fire Blog App - User and Post Management

This Angular application is designed to manage users and posts. It provides features for listing users in a paginated table and displaying posts as cards. Users can perform various actions on both users and posts, including updating, deleting,Exporting and viewing more details for users, and reacting, commenting, sharing, updating, and deleting posts.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Design Decisions](#design-decisions)
- [Contributing](#contributing)
- [License](#license)

## Features

### User Management
- List users in a paginated table
- View detailed information about a user
- -Export Users List As (PDF/ Excel)
- Update user information
- Delete user accounts

### Post Management
- Display posts as cards
- View post details including title, body, and reactions
- React to posts
- Comment on posts
- Share posts
- Update post content
- Delete posts

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed (You can download them from https://nodejs.org/).

### Installation

1. Clone this repository:
   git clone https://github.com/Ahmad-Alhendi/angular-blog-app.git
   cd angular-user-post-app

# Usage
User Management:
Click on "Users" in the navigation menu to access the user management page.
Use the table to view, update, or delete user accounts.
Click on a user's Action - More Details to view more details.

Post Management:
Click on "Posts" in the navigation menu to access the post management page.
Browse through the list of posts displayed as cards.
React, comment, share, update, or delete posts as needed.
Click on a post card to view more details about the post.

## Design Decisions

### UI Framework Choice

In this Angular application, we have chosen to leverage the PrimeNG library for building the user interface components. The decision to use PrimeNG was made based on several key factors:

1. **Rich Set of UI Components**: PrimeNG offers a comprehensive collection of UI components, including tables, cards, and various form elements, which align with the requirements of our user and post management features.

2. **Customization and Theming**: PrimeNG allows for easy customization and theming of UI components, ensuring that we can maintain a consistent and visually appealing design throughout the application.

3. **Community Support**: PrimeNG has a vibrant and active community, which means access to regular updates, bug fixes, and a wealth of resources for troubleshooting and extending the library's functionality.

4. **Angular Integration**: PrimeNG is built specifically for Angular, providing seamless integration and compatibility with Angular projects.

By using PrimeNG, we aim to accelerate the development process and deliver a polished and user-friendly interface for managing users and posts in our Angular application.

# Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:
Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and commit them with clear and meaningful messages.
Push your changes to your fork.
Submit a pull request to the original repository.

