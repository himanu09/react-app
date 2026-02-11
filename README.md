# React App 🎯

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting 
- Differential Bundling -support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shacking - remove unused code
- Different Dev and Prod bundles


# Two Types of Export & Import

# Default Export/Import
- export default Component;
- import Component from "path";

# Name Export/Import
- export const Component;
- import {Component} from "path";


# React Hooks
- (Normal JS utility Functions)
- useState() : State Variable is Superpowerful variable in react.
- useEffect()

- Whenever a state variable updates or changes react rerenders the component.

# State Variable
- It is a variable who is having superpowers.
- Whenever a state variable update, react trigger a reconciliation cycle(re-render the component)

# Why react is faster
# Reconciliation Algorith (React Fiber)
- It introduce in recat 16
- The below diff and DOM classification is generally known as Reconciliation Algorith.

# Diff Algorith
- It i sgenerally finds the difference between the virtual DOM and Actual DOM
# Virtual DOM
- Virtual DOM is a represnetation of Actual DOM. It is a normal JavaScript Object.
- We can see virtual DOM by command: console.log(<Body/>)
# Actual DOM
- It is the actual code that is written in <div></div>


# Monolithic Architecture
- The entire application is built as one single unit.
- Frontend + Backend + Database logic all in one codebase and deployed together.
- A monolith is a single, tightly coupled application where everything runs together.

# Microservices Architecture
- The application is broken into small, independent services, each handling one responsibility.
- Microservices split an application into independent, loosely coupled services.
- Auth Service, Order Service, Payment Service.
- Each runs and deploys independently.

# CORS (Cross Origin Resource Shareing)
- This is the browser's job to verufy and checks that if the API request is from the same domain or not?

# Optional Chaining
- It means fetching data from a multiple nested divs.

# Shimmer UI
- The skeliton which is shown on the user scrren while loding the page data is known as Shimer UI. 

# Conditioner Rendering
- By this it mean rendering somting on the basis of conditions.