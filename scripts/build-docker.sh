#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

IMAGE_NAME="localhost:32000/projecthub-frontend"
TAG="latest"

echo -e "${BLUE}=========================================${NC}"
echo -e "${BLUE}   Building ProjectHub Frontend Image    ${NC}"
echo -e "${BLUE}=========================================${NC}"

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo -e "\n${RED}Error: dist folder not found!${NC}"
    echo -e "${RED}Please run './scripts/build-local.sh' first to build the frontend.${NC}"
    exit 1
fi

# Build the image (no build args needed, dist is already built)
echo -e "\n${GREEN}Step 1: Building Docker image from pre-built dist...${NC}"
docker build -t ${IMAGE_NAME}:${TAG} .

# Push to registry
echo -e "\n${GREEN}Step 2: Pushing to local registry...${NC}"
docker push ${IMAGE_NAME}:${TAG}

echo -e "\n${BLUE}Build and push completed!${NC}"
