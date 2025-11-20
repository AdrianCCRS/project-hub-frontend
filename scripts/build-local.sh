#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}=========================================${NC}"
echo -e "${BLUE}   Building ProjectHub Frontend Locally  ${NC}"
echo -e "${BLUE}=========================================${NC}"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo -e "\n${YELLOW}node_modules not found. Installing dependencies...${NC}"
    npm install
fi

# Build with production API URL
echo -e "\n${GREEN}Building frontend with VITE_API_URL=/api...${NC}"
VITE_API_URL=/api npm run build

echo -e "\n${BLUE}Build completed!${NC}"
echo -e "The ${GREEN}dist${NC} folder is ready for deployment."
