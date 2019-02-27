## To Do

- Add debounce to keyup/change event on search input to delay api call and therefore reduce number of calls
- Add local cashing of results for one day
- Add drawer-slide feature

## Questions for the Project Team

- What is the user's main goal when using the app?
- Who do you expect will be using the end result? Do I need to make it accessible for people with visual or hearing impairments?
- How many results should display on the page?
- Should pagination be used?
- How many results should be saved?
- Should the results be stored in cache so they are saved if the user leaves the page and comes back to it later?
- What is the deadline?
- If I cannot finish all aspects by the deadline, what would a MVP include?

## Overview

1.  A React-based single page app to perform searches against the Guardian content API and displays the results.
    ​
2.  The app should take user input from a text field, as the user types it should take that input and use it to perform a search against the Guardian’s content API - https://open-platform.theguardian.com/
    ​
3.  Given the result of that API call it should display a list of results, grouped by the Section of the Guardian the items are found in.
    ​
4.  The results for each item should show the Title, link and publication date (formatted as DD/MM/YYYY).
    ​
5.  Each item should have a button/checkbox that allows it to be bookmarked/pinned. Pinned items should appear below the search results, and stay on screen as search results change.
    ​
6.  It should perform the search and display results as outlined above, perform sensibly, and handle errors or ‘no result’ states.
    ​
