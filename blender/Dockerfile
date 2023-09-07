# Use an official Blender base image
FROM linuxserver/blender:latest

# Set the working directory
WORKDIR /app

# Copy your script to the container
COPY scripts/create_pyramid.py .

# Run the script when the container starts
CMD blender --background --python create_pyramid.py && tail -f /dev/null