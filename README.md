
# Country Info App

This is a full-stack application that provides detailed information about countries, including their borders, population data, and flag images. It consists of a backend built with Node.js and Express.js, and a frontend built with React.

## Features

- **Country List Page**: Displays a list of available countries.
- **Country Info Page**: Displays detailed information about a selected country, including:
  - Country name
  - Country flag
  - Border countries
  - Historical population data in a chart

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: React.js, Chart.js
- **API**: Date Nager API (for available countries) and Countries Now API (for country info, flag, and population data)

## Prerequisites

Before running the project, ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Project Setup

### Backend Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Navigate to the backend folder:

   ```bash
   cd backend
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Configure the environment variables:
   
   - Create a `.env` file in the `backend` folder.
   - Add the following variables:

     ```env
     API_URL=https://date.nager.at/api/v3
     ```

5. Start the backend server:

   ```bash
   npm start
   ```

   The backend will be running on [http://localhost:5000](http://localhost:5000).

### Frontend Setup

1. Navigate to the frontend folder:

   ```bash
   cd frontend
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Start the frontend server:

   ```bash
   npm start
   ```

   The frontend will be running on [http://localhost:3000](http://localhost:3000).

### Running Both Servers

- The backend server should be running on port 5000.
- The frontend server should be running on port 3000.
- The frontend will communicate with the backend to fetch data.

### Testing

To test the application:

1. Open [http://localhost:3000](http://localhost:3000) in your browser to view the country list.
2. Click on a country name to view detailed information about the country, including its borders and population chart.

## Code Quality

- **ESLint** and **Prettier** are set up to enforce code formatting and quality. To lint the project, run:

  ```bash
  npm run lint
  ```

- To auto-format the code, run:

  ```bash
  npm run format
  ```

## Directory Structure

- `backend/`: Contains the backend code (Node.js, Express.js).
  - `server.js`: The main backend server file.
  - `routes/`: API route handlers.
  - `.env`: Environment variables.
  - `package.json`: Backend dependencies.
  
- `frontend/`: Contains the frontend code (React.js).
  - `src/`: The main source folder.
  - `components/`: React components like `CountryList` and `CountryInfo`.
  - `App.js`: The main React component.
  - `package.json`: Frontend dependencies.

## Contribution

Feel free to open issues or pull requests if you'd like to contribute to the project.

## License

This project is open-source and available under the [MIT License](LICENSE).
# country-info-app
