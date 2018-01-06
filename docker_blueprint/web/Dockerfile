# create ubuntu and python3
FROM ubuntu:latest

FROM python:3.5.2-slim

# make a local directory
RUN mkdir /app

# set app/web as the working directory from which CMD, RUN, ADD references
WORKDIR /app/web

# now copy all the files in this directory to directory
ADD . .

# pip install the local requirements.txt
RUN pip install -r requirements.txt

# Define our command to be run when launching the container
CMD ["python3", "app.py"]

