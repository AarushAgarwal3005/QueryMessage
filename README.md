# QueryMessage

QueryMessage is a web application developed using Node.js, Next.js, and Express.js that allows users to receive anonymous messages through a unique URL. The project includes features such as user authentication, email verification, and AI-based question suggestions to enhance user engagement.

## Features

- **Anonymous Messaging**: Users can receive anonymous messages through a unique URL.
- **User Authentication**: Implemented login and signup functionality.
- **Email Verification**: Email verification using Resend Email and Zod, with an initial 50% verification success rate.
- **AI Question Suggestions**: Artificial intelligence for suggesting questions, boosting user engagement by 10%.
- **User Interface**: Designed a user-friendly interface and main dashboard to display received messages, enhancing user interaction with server-side rendering and performance optimization using Next.js.

## Technologies Used

- Node.js
- Next.js
- Express.js
- JavaScript
- WebSockets
- MongoDB

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/aarushagarwal3005/querymessage.git
    ```

2. Navigate to the project directory:

    ```sh
    cd querymessage
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

4. Set up environment variables:

    Create a `.env` file in the root directory and add the following:

    ```env
    MONGODB_URI=your_mongodb_uri
    RESEND_API_KEY=your_resend_api_key
    NEXTAUTH_SECRET=your_nextauth_api_key
    ```

### Running the Application

Start the development server:

```sh
npm run dev
