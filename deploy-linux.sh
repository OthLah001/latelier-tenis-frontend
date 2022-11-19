#!/bin/bash

heroku login

echo "Start deploying..."

heroku git:remote -a latelier-tenis-frontend
git push heroku master

echo "Deployed Successfully!"