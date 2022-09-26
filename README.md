## Challenge - Keep Note

#### Context

Keep Note is a web app that allows user to maintain notes.  The app should be designed as a single page application.​

Based on SPA approach, the app should be developed by creating components.​

The app is in its final phase of development. During the initial phases, the components are created to view, add, edit, delete and search notes. The persistence has been implemented using `json-server`. Angular Material components are used to style the Keep Note app. The navigation in app has been enabled and the users are available to navigate to various views in the application.

By making HTTP calls to `json-server`, notes are fetched from and saved in `notes.json` file located in `keep-note-data` folder.​

In this final phase of development, the user should first login and get the credentials validated. Upon successful validation, the user should be allowed to access views that allow interacting with notes data.

**Note:** The changes required for developing the solution of this challenge should be implemented in the solution code of `Keep Note` developed in the `challenge` of `Sprint 4: Implement Navigation using Angular Routing` of this course.

#### Task 1 - Guard Routes with Restricted Access

- Add Authentication Service
- Define methods that allows users to login and logout and check for user’s logged in status
- Add Login Component
- Define route to navigate to Login component
- Enable programmatic navigation to Login component
- Define `CanActivate` route guard
- The route should return true for logged in users otherwise redirect users to login view and return false
- Apply route to routes with restricted access.
- Make provision to allow users to login and logout on the app
- Add login / logout links
- Refactor `App` component to handle login/logout actions

#### Task 2 - Prevent losing unsaved changes using Guard
- Add `CanDeactivate` route guard.
    - The guard should call the method of target component and return the value returned by that method.
- Refactor component that edits note to implement confirmation workflow for unsaved edit changes
    - Add method that seeks confirmation from user if changes are not saved and accordinly return boolean value
