# IceCream DevOps Deployment

This repository contains the final deliverables for the DevOps Examination.

# Project Overview
The goal of this project was to take the local IceCream Node.js web application and successfully containerize and deploy it into a local Kubernetes cluster (Minikube).

# Deliverables Included
* `Dockerfile`: Minimal, production-ready image configuration.
* `docker-compose.yaml`: Local testing environment with MongoDB.
* `mongo.yaml` & `web.yaml`: Kubernetes Deployment and Service manifests (NodePort and ClusterIP).
* `load-test.txt`: The script used to simulate 500 concurrent requests.
* `DevOps_Examination_Report_Final.docx`: The full technical documentation containing all screenshots, logs, and fault-tolerance test results.

# How to Run
1. Apply the database: `kubectl apply -f mongo.yaml`
2. Apply the web app: `kubectl apply -f web.yaml`
3. Expose the service: `kubectl port-forward service/web-service 8080:80`