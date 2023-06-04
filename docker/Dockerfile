# Use the official Python image as the base image
FROM python:3.10.6-slim-buster

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file to the working directory
COPY requirements.txt .

# Install virtualenv
# RUN pip install --no-cache-dir virtualenv

# Create a virtual environment
# RUN virtualenv venv

# Activate the virtual environment
# RUN . venv/bin/activate

# Install the dependencies inside the virtual environment
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code to the working directory
COPY . .

# Set the environment variables
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_RUN_PORT=5000

# Expose port 5000
EXPOSE 5000

# Run the Flask application
# CMD tail -f /dev/null
CMD python app/app.py