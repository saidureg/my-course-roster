# Course Registration Web Application

This is a simple web application for course registration where show some Computer Science and Engineering topic.

## Project Features

- **Course Selection**: Users can browse and select from a list of available CSE courses.
- **Credit Hour Limit**: The system enforces a maximum credit hour limit for course selection.
- **Real-time Updates**: The selected courses, total credit hours, and total price are updated in real-time.
- **Toast Notifications**: Informative toast notifications are displayed for course selection validation.

## State Management

State management in this project is handled primarily using React's built-in `useState` hook. Here's how it's managed:

- **Course Data**: The course data is fetched from a JSON file using the `fetch` API and stored in the `loadData` state using `useState`.

`javascript`
const [loadData, setLoadData] = useState([]);

- **Selected Courses**: The courses selected by the user are stored in the selectedCourse state. When a user adds a course to their cart, it's added to this state.

`javascript`
const [selectedCourse, setSelectedCourse] = useState([]);

- **Total Credit Hours and Price**: The total credit hours and price are calculated dynamically based on the selected courses and stored in the totalCreditHour and totalPrice states.

`javascript`
const [totalCreditHour, setTotalCreditHour] = useState(0);
`javascript`
const [totalPrice, setTotalPrice] = useState(0);

- **Remaining Credit Hours**: The remaining credit hours are also calculated dynamically and stored in the remaining state.

`javascript`
const [remaining, setRemaining] = useState(20);

React's useEffect hook is used to fetch course data from the JSON file when the component mounts. This ensures that the data is loaded and available for display.

State updates are triggered by user actions, such as adding a course to the cart, and are reflected in the UI in real-time. Toast notifications are used to provide feedback to the user based on the state changes.
