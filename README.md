This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

# Admin Dashboard

A simple admin dashboard with role-based access control (RBAC) using Next.js and Clerk for authentication.

## Project Setup

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have Node.js and npm installed.

### Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>

   ```

2. **Navigate to the project folder:**
   cd <your-project-folder>

3. **Install dependencies:**
   npm install

Create a .env.local file in the root directory and add the following environment variables:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

Replace your_clerk_publishable_key and your_clerk_secret_key with your actual Clerk keys.

### Running the Project

To start the development server, run:
npm run dev

This will start the project locally on http://localhost:3000.
