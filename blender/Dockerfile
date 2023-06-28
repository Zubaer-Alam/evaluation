# Use an official Blender base image
FROM linuxserver/blender:latest

# Set the working directory
WORKDIR /

# Copy your script to the container
COPY create_pyramid.py .

# Run the script when the container starts
CMD blender --background --python create_pyramid.py && tail -f /dev/null