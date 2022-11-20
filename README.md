# Password Generator
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Table of Contents
1. [Description](#Description)
2. [User_Story](#User_Story)
3. [Acceptance_Criteria](#Acceptance_Criteria)
4. [Technologies](#Technologies)

## Description
This password generator allows users to choose secure level based on criteria such as length, uppercases, lowercases, numbers, and special characters. It also allow user to copy the generated password and past it on other text edit applications in user computer or mobile devices by a click of a button.

## User_Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

## Acceptance_Criteria
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Technologies
```
HTLM
CSS
JavaScript
```

## Deployment
https://khanh-t-tran.github.io/Password_generator/