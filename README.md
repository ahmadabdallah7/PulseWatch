# PulseWatch

PulseWatch is a modern web application for monitoring service status, outages, and uptime in real time. Users can view the most reported services and search for specific platforms to quickly check their operational status and incident information.

## Screenshots

<img width="1365" height="878" alt="PulseWatch 1" src="https://github.com/user-attachments/assets/fa0d6731-386f-488d-8bf7-c6854bcace82" />
<img width="1386" height="649" alt="PulseWatch 2" src="https://github.com/user-attachments/assets/31535cf8-ec92-4730-a006-c631e1b721b0" />
<img width="1376" height="642" alt="PulseWatch 3" src="https://github.com/user-attachments/assets/ab5d5569-9776-4727-b6bb-3360569ce84a" />

---

## Features

- View the top searched services on the homepage.
- Search for specific services such as Discord, Netflix, Spotify, and more.
- Display real-time service status information.
- Visual status indicators for operational, degraded, and down services.
- Server-side data fetching with Next.js.
- Responsive design for desktop and mobile devices.
- Error handling for unavailable services and failed searches.

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Bootstrap
- Material UI (MUI)
- Axios

### APIs

- DownStatus API

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/ahmadabdallah7/PulseWatch
```

Navigate to the project directory:

```bash
cd pulsewatch
```

Install dependencies:

```bash
npm run dependencies
```

Start the development server:

```bash
npm run client
```

Open your browser and visit:

```text
http://localhost:3000
```

## Project Structure

```text
next-client/
├── public/         # Static assets
└── src/
    ├── app/        # Pages, layouts, routing
    └── components/ # Reusable UI components
```

## Possible Future Improvements

- Dark and light mode support
- Service search autocomplete
- Recent searches
- Favorites system
- Custom backend and data caching

---

This project is for my personal portfolio purposes.
https://github.com/ahmadabdallah7
https://www.linkedin.com/in/ahmadabdallah7
