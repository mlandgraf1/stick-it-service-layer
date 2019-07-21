# Stick It Service Layer


## Application Purpose
The Stick It application is a web application that is used to determine what hockey stick works best for a player based on the input provided by the user. This application is meant to solve the problem of young hockey players and casual adult players having difficulties identifying what kind of hockey stick best fits their needs as a player. Stick It will solve this problem by using information inputted by the user to determine a hockey stick that best matches their criteria.

## Role of the Service Layer 
The Service Layer of the application will be where the application's first endpoint is. The endpoint in this service layer will request data from the database of hockey sticks and receive a response of a single hockey based on the list of parameters passed to it by the client. The service layer will take the user information, properly format it, pass it as a GET request to the database, receive that data from the database, and finally properly format it again before returning it to the client. 
