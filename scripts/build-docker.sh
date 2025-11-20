#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

IMAGE_NAME="projecthub-frontend"
VERSION="latest"

echo -e "${BLUE}=========================================${NC}"
echo -e "${BLUE}   Building ProjectHub Frontend Image    ${NC}"
echo -e "${BLUE}=========================================${NC}"

# Check if MicroK8s registry is enabled
if ! microk8s status | grep -q "registry: enabled"; then
    echo -e "${RED}Error: MicroK8s registry is not enabled.${NC}"
    echo -e "Please run: microk8s enable registry"
    exit 1
fi

# Build Docker image
echo -e "\n${GREEN}Step 1: Building Docker image...${NC}"
# We set VITE_API_URL to /api so Nginx can proxy it to the backend service
docker build \
  --build-arg VITE_API_URL=/api \
  -t ${IMAGE_NAME}:${VERSION} .

if [ $? -ne 0 ]; then
    echo -e "${RED}✗ Docker build failed${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Docker build successful${NC}"

# Tag and Push to MicroK8s registry
echo -e "\n${GREEN}Step 2: Pushing to MicroK8s local registry...${NC}"
docker tag ${IMAGE_NAME}:${VERSION} localhost:32000/${IMAGE_NAME}:${VERSION}
docker push localhost:32000/${IMAGE_NAME}:${VERSION}

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Image pushed to localhost:32000/${IMAGE_NAME}:${VERSION}${NC}"
else
    echo -e "${RED}✗ Failed to push image to registry${NC}"
    exit 1
fi

echo -e "\n${BLUE}Build and push completed successfully!${NC}"
