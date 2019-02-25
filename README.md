# book_a_meal
An application that connect customers with food vendors.
It also allows food vendors manage their meals and know the profit made.


[![Build Status](https://travis-ci.org/dharmykoya/book_a_meal.svg?branch=ft-coveralls-fix)](https://travis-ci.org/dharmykoya/book_a_meal)
[![Coverage Status](https://coveralls.io/repos/github/dharmykoya/book_a_meal/badge.svg?branch=climate)](https://coveralls.io/github/dharmykoya/book_a_meal?branch=climate)
[![Maintainability](https://api.codeclimate.com/v1/badges/f0906ab5998ac768fe5c/maintainability)](https://codeclimate.com/github/dharmykoya/book_a_meal/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/f0906ab5998ac768fe5c/test_coverage)](https://codeclimate.com/github/dharmykoya/book_a_meal/test_coverage)


**UI template:** (https://dharmykoya.github.io/book_a_meal/frontend/)

## Built With
- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [Express](https://expressjs.com)
- [PostgresSQL](https://postgresql.org)


## Installation
1. Ensure you have Node.js and npm installed

2. Clone this repo
```bash
$ git clone https://github.com/dharmykoya/book_a_meal.git
```
3. Install Dependencies
```bash
npm install
```

## Features
- Users can create an account and log in

- Admin (Caterer) should be able to manage (i.e: add, modify and delete) meal options in the application. Examples of meal options are:     Beef with rice, Beef with fries etc

- Admin (Caterer) should be able to setup menu for a specific day by selecting from the meal options available on the system.

- Authenticated users (customers) should be able to see the menu for a specific day and select an option out of the menu.

- Authenticated users (customers) should be able to change their meal choice.

- Admin (Caterer) should be able to see the orders made by the user

- Admin should be able to see amount of money made by end of day
