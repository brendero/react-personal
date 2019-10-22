# React-website
> development repository for personal website using React and Typescript
> Author: Brent De Roeck

## starting up the application
```bash
# Clone the repository
git clone https://github.com/brendero/react-personal.git
# install the node_modules
npm install
# run the webpack-dev-server
npm start
```

## API Guide

the test server is hosted on heroku: [https://quiet-oasis-68237.herokuapp.com](https://quiet-oasis-68237.herokuapp.com)

### Auth

*To Login a users using e-mail and password*
> Access: public 
```
GET /api/users/login
```
this endpoint has to have the following in its body
> email: this has to be a valid email and a valid user
> password: this has to be the correct password that is linked to the user

### Skills

*To get all the skills*
> Access: public
```
GET /api/skills/
```

*To get a certain Trip by using ID*
> Access: private
```
GET /api/skills/:id
```
this endpoint needs the following parameters
> :id : this is the id of the skill you want

*To make or update a skill*
> Access: private
```
POST /api/skills/
```
this endpoint needs the following in its body
> (not required) _id: only needed if you are updating a certain skill
> title: string that gives the title of the new skill
> image: string that gives the image of the skill
> content: string that gives a little explanation

*To delete a skill*
> Access: private
```
DELETE /api/skills/:id
```
this endpoint needs the following parameters
> :id : this is the id of the skill you want to delete

### Work

*To get all the work*
> Access: public
```
GET /api/work/
```

*To get a certain work item by using ID*
> Access: private
```
GET /api/work/:id
```
this endpoint needs the following parameters
> :id : this is the id of the work item you want

*To make or update a work item*
> Access: private
```
POST /api/work/
```
this endpoint needs the following in its body
> (not required) _id: only needed if you are updating a certain work item
> name: string that gives the name of the new work item
> url: link to more explanation about the work
> image: string that gives the image of the work

*To delete a work item*
> Access: private
```
DELETE /api/work/:id
```
this endpoint needs the following parameters
> :id : this is the id of the work item you want to delete

## License
Licensed under the MIT license