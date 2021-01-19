# ByMiles Technical Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Introduction

Welcome to my submission for the ByMiles **By Bits Code Challenge**! I have constructed a login page in React, where policy holders can input their username and password and they will be taken a page showing various details about their insurance policy.

This was my first time using React (or anything similar), so while I appreciate the code may not be perfect or adhere to all standard conventions, I hope it displays my ability to quickly develop new skills and come to understand new systems. I do have previous HTML, CSS and JavaScript experience, so I was able to apply these skills to quickly pick up React without significant difficulties.

I spent a day or two following a video series on React (from PluralSight), and then spent a few hours developing the app using the knowledge I developed over that time. I would say the core app took me around three hours, with an hour or two spent cleaning up code and CSS.

## Decisions

I used React Hooks to save states such as inputted username and password details, the API response for the authorization token, and the error message that appears if necessary. I did this to allow access to the states' getter and setter functions throughout the components.

The page consists of two 'cards': The login form and the policy information. Upon receiving a successful API response for the policy details, it proceeds to the second card. If an error occurs an error message is displayed - I have set custom messages for some error statuses but not all, something I assume would normally have a set of default responses I could just import.

## Conclusion

This was an interesting project, through which I was able to learn a lot about React and implement basics to create (I believe) a functional app. Even if my application is unfortunately unsuccessful I would appreciate any and all feedback, and I am sure I will continue to use React into the future.
