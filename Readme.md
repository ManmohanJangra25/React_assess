# VectorShift Frontend Technical Assessment

## Overview

This repository contains my implementation of the VectorShift Frontend Technical Assessment.

The assessment is based on an existing React Flow application where the objective is to extend and improve the current implementation instead of rebuilding it. The focus is on improving the application's architecture, maintainability, user experience, and backend integration while preserving the existing functionality.

The implementation follows the technologies specified in the assessment:

- Frontend: React (JavaScript)
- Backend: FastAPI (Python)

---

# Assessment Objectives

The assessment consists of four independent tasks.

## Part 1: Node Abstraction

Refactor the existing node implementation to remove duplicated code by introducing a reusable abstraction. Demonstrate the abstraction by creating five additional node types.

## Part 2: Styling

Apply a consistent visual design across the application while maintaining the existing functionality.

## Part 3: Text Node Logic

Enhance the Text Node with:

- Dynamic resizing based on user input.
- Automatic detection of variables enclosed within double curly braces (`{{variable}}`).
- Dynamic creation of input handles for detected variables.

## Part 4: Backend Integration

Connect the frontend with the provided FastAPI backend to:

- Submit the current pipeline.
- Calculate the number of nodes.
- Calculate the number of edges.
- Determine whether the pipeline forms a Directed Acyclic Graph (DAG).
- Display the backend response in a user-friendly format.

---

# Project Goals

The implementation focuses on the following goals:

- Reduce duplicated code.
- Improve maintainability.
- Keep responsibilities clearly separated.
- Preserve the existing project structure wherever possible.
- Improve the overall user experience.
- Make it easier to add new node types in the future.

---

# Engineering Decisions

Throughout the implementation, the following principles are followed:

- Reuse common functionality instead of duplicating code.
- Keep each component focused on a single responsibility.
- Separate reusable layouts from node-specific content.
- Keep styling consistent across the application.
- Minimize changes to the existing project structure.
- Build solutions that are straightforward to maintain and extend.

These decisions help keep the codebase organized while making future enhancements simpler to implement.

---

# Repository Structure

```text
frontend/
│
├── src/
│   ├── nodes/
│   ├── App.js
│   ├── toolbar.js
│   ├── draggableNode.js
│   ├── submit.js
│   ├── store.js
│   └── ui.js
│
└── package.json

backend/
│
├── main.py
└── ...
```

---

# Implementation Summary

## Part 1: Node Abstraction

### Objective

Remove duplicated logic shared across the existing node components by introducing a reusable abstraction.

### Expected Outcome

- Shared layout managed from a single location.
- Individual nodes define only their unique content.
- New node types require significantly less code.
- Consistent structure across all nodes.

---

## Part 2: Styling

### Objective

Create a consistent visual experience across the application.

### Expected Outcome

- Improved spacing.
- Better typography.
- Consistent colors.
- Clear visual hierarchy.
- Cleaner node presentation.

---

## Part 3: Text Node Logic

### Objective

Improve the editing experience inside the Text Node.

### Features

- Automatic resizing as text grows.
- Variable detection using `{{variable}}`.
- Dynamic generation of input handles based on detected variables.

---

## Part 4: Backend Integration

### Objective

Connect the frontend with the backend.

### Backend Response

The backend returns:

- Number of nodes.
- Number of edges.
- Whether the pipeline is a Directed Acyclic Graph (DAG).

The frontend displays this information after the pipeline is submitted.

---

# Technologies

## Frontend

- React
- React Flow
- Zustand
- JavaScript

## Backend

- Python
- FastAPI

---

# Running the Project

## Frontend

```bash
cd frontend
npm install
npm start
```

## Backend

```bash
cd backend
uvicorn main:app --reload
```

---

# Documentation

Additional documentation is included with the project:

- `ARCHITECTURE.md` – Project structure and design decisions.
- `IMPLEMENTATION_NOTES.md` – Task-by-task implementation details.
- `SCREEN_RECORDING_SCRIPT.md` – Walkthrough script for the assessment demonstration.

---

# Notes

This project was completed as part of the VectorShift Frontend Technical Assessment. The implementation follows the requirements provided in the assessment while emphasizing maintainability, consistency, and clarity throughout the codebase.
# React_assess
# React_assess
