# FireTurbo

FireTurbo is a monorepo template that integrates Express.js, Next.js, and Firebase using Turborepo. It serves as a comprehensive example of setting up a scalable and maintainable codebase, demonstrating best practices in combining backend and frontend frameworks with shared configurations and components.

## Features

- **Backend with Express.js**: Structured for Firebase Functions, including endpoints for updating and fetching user data from Firestore, with authentication middleware.
- **Frontend with Next.js**: Utilizes React MUI for UI components, Redux for state management, and Firebase Authentication for user login.
- **Shared Packages**: Includes shared configurations for ESLint and TypeScript, as well as reusable UI components like a design system.
- **Hot Reloading**: Configured with Vite for hot reloading, allowing Express to reload concurrently with the Firebase emulator.

## Repository Structure

The monorepo is organized as follows:

```
fireturbo/
├── apps/
│   ├── backend-repo/
│   │   ├── src/
│   │   │   ├── config/
│   │   │   ├── controllers/
│   │   │   ├── middlewares/
│   │   │   ├── models/
│   │   │   ├── routes/
|   │   ├── server.ts
│   │   ├── index.ts
│   │   ├── vite.config.js
│   │   ├── tsconfig.json
│   │   ├── .firebaserc
│   │   ├── firebase.json
│   ├── frontend-repo/
│   │   ├── src/
│   │   │   ├── apis/
│   │   │   ├── components/
│   │   │   ├── store/
│   │   │   ├── theme/
│   │   │   ├── app/
│   │   ├── next.config.js
│   │   ├── tsconfig.json
├── packages/
│   ├── config-eslint/
│   ├── config-typescript/
│   ├── logger/
│   ├── types/
│   ├── ui/
├── .vscode/
├── .gitignore
├── .npmrc
├── README.md
├── eslint.config.js
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── turbo.json
```

- **`apps/`**: Contains the main applications: `backend` and `frontend`.
- **`packages/`**: Houses shared configurations and UI components.
- **`backend/`**: Structured with directories for configuration, controllers, core application setup, entities, middleware, repositories, services, and routes.
- **`frontend/`**: Organized with directories for APIs, theming, application-level components, atomic design components, and Redux store management.

## Getting Started

To get started with FireTurbo, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/agus08/fireturbo.git
   cd fireturbo
   ```

2. **Install Dependencies**:

   ```bash
   pnpm install
   ```

3. **Set Up Environment Variables**:

   - **Backend Setup**:
     - Place the `service-account-key.json` file inside `apps/backend-repo/`.
     - You can obtain this file from your Firebase project settings under **Service Accounts**.

   - **Frontend Setup**:
     - Create an `.env.local` file inside `apps/frontend-repo/` based on `.env.example`.
     - The required Firebase configuration values can be retrieved from your Firebase project settings.

4. **Run the Project**:

   ```bash
   pnpm run dev
   ```

   The command will start both backend and frontend applications with hot reloading enabled for efficient development.

## Technical Details

### Backend

- **Endpoints**:
  - `POST /update-user-data`: Updates user data in the Firestore `USERS` collection.
  - `GET /fetch-user-data`: Fetches user data from the Firestore `USERS` collection.

- **Middleware**:
  - `authMiddleware`: Validates the request token to ensure authenticated access to endpoints.

### Frontend

- **State Management**:
  - Configured with Redux to manage application state, including user authentication status and data fetching states.

- **UI Components**:
  - Utilizes React MUI for responsive and accessible UI components.
  - Includes a design system in the shared `ui` package for consistent styling across the application.

- **Routing**:
  - Employs Next.js App Router (Next.js 14+) for navigation between the login and main pages.

- **Firebase Authentication**:
  - Integrated for user login, with a responsive login form built using React MUI.

