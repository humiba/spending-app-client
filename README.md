# Project: Spending App with React and Google Sheets

This project is created for personal spending management (payment, receive, analytics spending behaviors)

## Features

1. CRUD spending category

2. CRUD spending

3. Report last-week spending

4. Advanced Analytics

## Pages

1. Dashboard (Home page)

2. Analytics & Reports

3. Spending related pages

4. Spending category related pages

## Technologies used & Refs

### Technologies used

`ReactJS:` The most frontend library framework created by Meta in 2013

`React-Hook-Form:` This lib make form handling more easier

`Redux:` A Predictable State Container for JS Apps

`Redux Toolkit:` The official, opinionated, batteries-included toolset for efficient Redux development

`Google Sheets:` The spreadsheet used to store structured data

### Refs

React Official Documentation: [https://react.dev](https://react.dev).

Google Sheets App Script Documentation: [Google Sheets API Overview | Google for Developers](https://developers.google.com/sheets/api/guides/concepts) 

SheetDB.io Documentation: [SheetDB API documentation](https://docs.sheetdb.io/) 

### Notes

`createAsyncThunk`: A function that accepts a Redux action type string and a callback function that should return a promise. It generates promise lifecycle action types based on the action type prefix that you pass in, and returns a thunk action creator that will run the promise callback and dispatch the lifecycle actions based on the returned promise.