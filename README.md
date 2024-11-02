# Geo Guide: Interactive Countries Encyclopedia

![Geo Guide Logo](https://raw.githubusercontent.com/alikouhfar/geo-guide/refs/heads/main/public/android-chrome-192x192.png)

## Table of Contents

1. [Description](#description)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Version History](#version-history)
5. [Getting Started](#getting-started)
6. [Contributing](#contributing)
7. [License](#license)

## Description

Geo Guide is an interactive countries encyclopedia project that provides comprehensive information about nations worldwide. This web-based application offers users a unique way to explore geographical knowledge through an engaging interface. From searching for specific countries to visualizing borders and neighboring nations on interactive maps, Geo Guide brings the world to life in vivid detail.

## Features

- **Country Search**: Quickly locate and explore any country in our vast database.
- **Interactive Maps**: Visualize borders, neighboring countries, and geographical features with our dynamic mapping system.
- **Comprehensive Country Profiles**: Access in-depth information on geography, flag, lnaguages, currencies and much more data for over 200 countries.
- **Responsive Design**: Ensures your portfolio looks great on all devices, from desktops to smartphones.

## Technologies Used

- **TypeScript**: A statically typed language that helps catch errors early and improves developer productivity.
- **React**: A JavaScript library for building user interfaces.
- **React Hooks**: Allows functional components to manage state and side effects.
- **Zustand**: A small, fast, and scalable bearbones state management solution.
- **TanStack Query**: The missing data-fetching library for web applications.
- **Leaflet**: The leading open-source JavaScript library for mobile-friendly interactive maps.
- **Tailwind CSS**: A utility-first CSS framework packed with classes.
- **Mantine**: A fullt featured React components library.
- **ESLint**: JavaScript linting utility for maintaining code quality.
- **Prettier**: Code formatter for ensuring consistent code style.

## Version History

- **Version 1.0.0** (Initial Release):
  - Implemented basic country search functionality
  - Integrated interactive map feature
  - Created comprehensive country profiles

## Challenges

### Technical Challenges

- Integrating real-time map data with static country information presented challenges in performance optimization.
- Balancing the need for rich, interactive content with fast initial loading times required careful consideration of data fetching strategies.
- Creating an intuitive user interface that handles complex geographical relationships was a significant challenge.

### Data Accuracy

- Maintaining the accuracy and up-to-date nature of country information across multiple sources proved challenging.
- Ensuring consistency in data representation across different countries and regions required careful attention to detail.

### Performance Optimization

- Optimizing the rendering of interactive maps for various screen sizes and resolutions was a recurring challenge.
- Finding the right balance between server-side rendering and client-side interactivity improved performance significantly.

### Learning Curve

- Mastering the combination of React.js and the combination of Zustand with TanStack Query presented a steep learning curve.
- Adapting to the complexities of handling geographical data and mapping libraries required ongoing learning and experimentation.

## What We Learned

During the development of Geo Guide, we gained several valuable insights:

1. **Geographical Data Complexity**: Working with geographical data revealed its intricate nature and the challenges in representing it accurately and interactively.

2. **Mapping Libraries**: We discovered the power of OpenStreetMap API for providing detailed geographical information and interactive maps.

3. **Performance Optimization**: Techniques like lazy loading and efficient data fetching were crucial for maintaining smooth performance despite the complexity of the application.

4. **State Management**: Using Zustand and custom hooks allowed for cleaner, more modular code organization, especially when dealing with complex state management.

5. **Accessibility**: Focusing on accessibility ensured that Geo Guide would be usable by everyone, regardless of their abilities or device.

6. **Data Visualization**: We learned the importance of clear and intuitive visualization techniques for geographical data.

7. **Internationalization**: Implementing support for multiple languages expanded the reach of the application globally.

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository: `git clone https://github.com/alikouhfar/geoguide.git`
2. Navigate to the project directory: `cd geoguide`
3. Install dependencies: `npm install`
4. Set up your local environment variables (API keys, etc.)
5. Run the development server: `npm run dev`
6. Open [http://localhost:5173](http://localhost:5173) in your browser to view Geo Guide.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name: `git checkout -b feature/my-new-feature`.
3. Make your changes and commit them with descriptive commit messages: `git commit -m 'Feature: New Feature' or git commit -m 'Bug Fix: Fixed Bugs'`.
4. Push your changes to your fork: `git push origin feature/my-new-feature`.
5. Submit a pull request detailing the changes you made and why they are necessary.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
