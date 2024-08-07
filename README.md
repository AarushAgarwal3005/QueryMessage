from docx import Document

# Create a new Document
doc = Document()

# Title
doc.add_heading('QueryMessage', level=1)

# Introduction
doc.add_paragraph(
    "QueryMessage is a web application developed using Node.js, Next.js, and Express.js that allows users to receive anonymous messages through a unique URL. "
    "The project includes features such as user authentication, email verification, and AI-based question suggestions to enhance user engagement."
)

# Features
doc.add_heading('Features', level=2)
features = [
    "Anonymous Messaging: Users can receive anonymous messages through a unique URL.",
    "User Authentication: Implemented login and signup functionality.",
    "Email Verification: Email verification using Resend Email and Zod, with an initial 50% verification success rate.",
    "AI Question Suggestions: Artificial intelligence for suggesting questions, boosting user engagement by 10%.",
    "User Interface: Designed a user-friendly interface and main dashboard to display received messages, enhancing user interaction with server-side rendering and performance optimization using Next.js."
]
for feature in features:
    doc.add_paragraph(feature, style='List Bullet')

# Technologies Used
doc.add_heading('Technologies Used', level=2)
technologies = ["Node.js", "Next.js", "Express.js", "JavaScript", "WebSockets", "MongoDB"]
for tech in technologies:
    doc.add_paragraph(tech, style='List Bullet')

# Getting Started
doc.add_heading('Getting Started', level=2)

# Prerequisites
doc.add_heading('Prerequisites', level=3)
prerequisites = ["Node.js", "npm (Node Package Manager)", "MongoDB"]
for item in prerequisites:
    doc.add_paragraph(item, style='List Bullet')

# Installation
doc.add_heading('Installation', level=3)
installation_steps = [
    "Clone the repository:\n\n```sh\ngit clone https://github.com/yourusername/querymessage.git\n```",
    "Navigate to the project directory:\n\n```sh\ncd querymessage\n```",
    "Install the dependencies:\n\n```sh\nnpm install\n```",
    "Set up environment variables:\n\nCreate a `.env` file in the root directory and add the following:\n\n```env\nMONGODB_URI=your_mongodb_uri\nRESEND_API_KEY=your_resend_api_key\n```"
]
for step in installation_steps:
    doc.add_paragraph(step, style='List Number')

# Running the Application
doc.add_heading('Running the Application', level=3)
doc.add_paragraph(
    "Start the development server:\n\n```sh\nnpm run dev\n```\n\nOpen your browser and navigate to `http://localhost:3000`."
)

# Usage
doc.add_heading('Usage', level=2)
usage_steps = [
    "Sign up for an account and verify your email.",
    "Log in to your account.",
    "Share your unique URL with others to receive anonymous messages.",
    "View received messages on your dashboard.",
    "Use the AI-suggested questions to boost engagement."
]
for step in usage_steps:
    doc.add_paragraph(step, style='List Bullet')

# Contributing
doc.add_heading('Contributing', level=2)
doc.add_paragraph("Contributions are welcome! Please feel free to submit a Pull Request.")

# License
doc.add_heading('License', level=2)
doc.add_paragraph("This project is licensed under the MIT License.")

# Contact
doc.add_heading('Contact', level=2)
doc.add_paragraph(
    "For any questions or inquiries, please contact [yourname@example.com](mailto:yourname@example.com)."
)

# Save the document
file_path = '/mnt/data/QueryMessage_README.docx'
doc.save(file_path)

file_path
