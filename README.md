## AI Bot Application

This AI Bot application allows users to interact with an AI bot by asking questions and receiving relevant answers. Additional features include feedback mechanisms, rating system, theme toggling, and chat history management.

## Features

- **Question and Answer Interaction**: Users can type questions and get answers from the AI Bot.
- **Feedback System**: Users can provide feedback through like or dislike buttons.
- **Rating**: Users can rate the bot's responses.
- **Dark and Light Mode**: Users can switch between dark and light modes for better viewing experience.
- **Save and View Chats**: Users can save their chat history and view it later.

## Technologies Used

- **React**: For building the user interface.
- **Material UI**: For styling and UI components.
- **Date-fns**: For date formatting.
- **React Icons**: For using icons in the application.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/samdeopa/BotAi
   cd ai-bot-application
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the application**:

   ```bash
   npm run dev
   ```

4. **Build the application** (for production):

   ```bash
   npm run build
   ```

## Usage

1. **Ask a Question**: Type your question in the input box and press enter. The AI Bot will respond.
2. **Provide Feedback**: Click the like or dislike button to provide feedback on the bot's response.
3. **Rate the Response**: Rate the response by clicking the rating stars if you find it helpful.
4. **Switch Modes**: Use the toggle switch to switch between dark and light modes.
5. **Save Chats**: Save your chat history by clicking the save button and view it later.

## File Structure

```plaintext
ai-bot-application/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── ChattingCard.js
│   │   ├── FeedbackModal.js
│   │   └── ...
│   ├── assets/
│   │   ├── AI.png
│   │   ├── human.png
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

## Design Decisions

### User Interface (UI) Design:

- **Material UI** was chosen for its comprehensive library of pre-designed components which allows for rapid UI development.
- A **dark and light mode** toggle was included to improve accessibility and user comfort in different lighting conditions.
- **Icons** from React Icons were used to enhance the visual appeal and usability of the application.

### Interaction Design:

- **Feedback System**: Implemented to allow users to provide instant feedback on the bot's responses, which helps in improving the AI model based on user preferences.
- **Rating System**: Provides additional user feedback and helps in understanding the quality of responses.

### Technical Design:

- **React** was chosen for its component-based architecture, which facilitates code reuse and easier management of UI state.
- **Date-fns** library was used for its lightweight and functional approach to date manipulation.
- The application was designed to be **responsive**, ensuring compatibility across various devices and screen sizes.

### Performance Considerations:

- **Lazy loading** of components and assets to ensure faster initial load times.
- Efficient state management to minimize re-renders and improve the overall responsiveness of the application.

### Scalability:

- The file structure is modular, allowing easy addition of new features and components without significant changes to the existing codebase.
- Using **environment variables** for configuration, making it easier to deploy and manage the application across different environments (development, staging, production).

By focusing on these design principles, the AI Bot application aims to deliver a seamless and engaging user experience while maintaining high performance and scalability.
