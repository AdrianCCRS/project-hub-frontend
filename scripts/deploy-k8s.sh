#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

NAMESPACE="projecthub-frontend"

echo -e "${BLUE}=========================================${NC}"
echo -e "${BLUE}   Deploying ProjectHub Frontend to K8s  ${NC}"
echo -e "${BLUE}=========================================${NC}"

# Build and push the image first
echo -e "\n${GREEN}Step 0: Building and pushing Docker image...${NC}"
./scripts/build-docker.sh

# Ensure namespace exists
echo -e "\n${GREEN}Step 1: Ensuring namespace exists...${NC}"
microk8s kubectl create namespace ${NAMESPACE} --dry-run=client -o yaml | microk8s kubectl apply -f -

# Apply manifests
echo -e "\n${GREEN}Step 2: Applying manifests...${NC}"
microk8s kubectl apply -f k8s/frontend-deployment.yaml
microk8s kubectl apply -f k8s/frontend-service.yaml
microk8s kubectl apply -f k8s/ingress.yaml

# Restart deployment to pick up new image
echo -e "\n${GREEN}Step 3: Restarting deployment...${NC}"
microk8s kubectl rollout restart deployment projecthub-frontend -n ${NAMESPACE}

# Wait for rollout
echo -e "\n${GREEN}Step 4: Waiting for deployment to be ready...${NC}"
microk8s kubectl rollout status deployment/projecthub-frontend -n ${NAMESPACE}

echo -e "\n${BLUE}Deployment completed!${NC}"
echo -e "Access the frontend at: http://localhost:30000"
echo -e "Or via Ingress at: http://projecthub.local (add to /etc/hosts)"
