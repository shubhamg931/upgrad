## Major Libraries Used

react-chartjs-2: Used to plot the graph and pie charts of the data fetched from the csv files .

papaparse: Used to parse the csv data into Arrays which could be manipulated easily to make the datasets for the graphs.

react: Application is made in React.js to keep it as much reactive as possible.

redux: Redux is being used to manage the application level state of the application.

materializecss: Used as the front-end styling library.

gh-pages: Used to host the web app on github gh-pages.


## Bonus Points

1. The app is not made in Vue.js. React.js was used in place of it. The app is fully reactive and responsive.
2. Loading time has been optimized.     
    The app is completely built on front-end. The csv files are being loaded from the public folder. No calls to back-end APIs is required which would have increased its loading time.
    
    The csv files are loaded once the app starts and do not need to be loaded again and again. With Application level state management with redux the data is transferred and manipulated for the required Year and Trivia. 
3. The app is completely responsive and has been checked to work on all devices.
        
    Materializecss is used to maintain the reponsivity of the app.
4. The app is a progressive web app.

    The app is 100% progressive web app(audited with chrome lighthouse) and tested on my android device as well. Service worker is used to achieve the functionality.
    
5. If the app is not refreshed it can perform all the operation offline as well but it does not work after being refreshed. Efforts were made to make it offline usable as well by registering cache in service worker file, but some error came and I was running short on time so was not able to complete this functionality.

