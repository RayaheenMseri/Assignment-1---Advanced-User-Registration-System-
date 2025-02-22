# System for User Registration

## Project Summary
Inspired by the Salamah Registration Portal, this project is a fully working **User Registration System**. With the use of contemporary web technologies, such as **HTML5, TailwindCSS, Material UI, Animate.css, and JavaScript (ES6+)**, it has an animated and responsive registration form. The solution guarantees a smooth registration process, verifies user input, and interfaces with an external API to get business data.

A responsive landing page and a registration form with input fields are two features that have been implemented.
  Company name, phone number, email address, and commercial registration number
  Password and Password Confirmation
  - Address fields (zip code, city, and region)
  The type of business (Dropdown Selection)
  Checkbox for Terms and Conditions
  The button to submit

**Form Validation:** - Verifies that every field is filled out prior to submission.
  Verifies the strength of the password and the email format.
  When input is entered incorrectly, error warnings are displayed.
**API Integration:** - Retrieves information about a company's registration from an external API.
  The website dynamically displays the retrieved data.
  Error handling for API replies is implemented.
**Animations & UI Enhancements:** - Animate.css is used to create input focus effects and seamless form transitions.
  For utility-based style, use TailwindCSS.
  To improve the user experience, employ material UI elements.
Programming in an asynchronous manner:
  For API requests, `fetch()` is used in conjunction with Async/Await.
  It carries forth JavaScript's promises for effective data management.

  ## Technologies Used - **Frontend:** HTML5, TailwindCSS, Material UI, Animate.css - **Scripting:** JavaScript (ES6+), TypeScript - **API Integration:** Fetch API, Async/Await - **Version Control:** GitHub

## Instructions for Setup
The repository may be cloned by using the following command: ``sh git clone https://github.com/your-username/user-registration-system.git ```
2. Open the project directory by navigating to ```sh cd user-registration-system ```
Install dependencies by running npm install ```sh ~``
4. Launch the development server by typing ```sh npm run dev ```.
5. Use a browser to open the project: ```sh http://localhost:3000 ```

## How You Can Help
1. Create a fork in the repository.
2. Make a new branch by running git checkout -b feature-name ```sh ```sh
3. After making your modifications, commit: ``sh ^ git commit -m "Add new feature" ``
4. Push to your branch using the following command: ```sh git push origin feature-name ```
5. Make a request to pull.

## Permit
The [MIT License](LICENSE) governs the availability of this open-source project.
