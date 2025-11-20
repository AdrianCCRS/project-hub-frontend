#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

IMAGE_NAME="localhost:32000/projecthub-frontend"
TAG="latest"

echo -e "${BLUE}=========================================${NC}"
echo -e "${BLUE}   Building ProjectHub Frontend Image    ${NC}"
echo -e "${BLUE}=========================================${NC}"

# Build the image
echo -e "\n${GREEN}Step 1: Building Docker image...${NC}"
# IMPORTANT: We pass VITE_API_URL=/api so the frontend knows to use relative paths
# which Nginx will then proxy to the backend service
docker build --build-arg VITE_API_URL=/api -t ${IMAGE_NAME}:${TAG} .

# Push to registry
echo -e "\n${GREEN}Step 2: Pushing to local registry...${NC}"
docker push ${IMAGE_NAME}:${TAG}

echo -e "\n${BLUE}Build and push completed!${NC}"
