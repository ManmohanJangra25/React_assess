# VectorShift Frontend Assessment -- Video Walkthrough (Storytelling Version)

## Introduction (45-60 sec)

Hi everyone, I'm **Manmohan Jangra**.

I'm a Frontend Engineer with around **5 years of experience** building
scalable React applications. Most of my experience has been in startup
environments where I've worked on reusable component architecture,
performance optimization, and integrating frontend applications with
backend services.

For this assessment, I focused on writing maintainable frontend code,
improving the overall user experience, and completing the required
backend integration.

Now I'll walk through my approach task by task.

------------------------------------------------------------------------

# Part 1 -- Reusable Node Architecture

## The Problem

The assessment required multiple nodes like Input, Output, LLM, and
Text.

Initially, every node existed as an individual React component. While
this worked for four nodes, I noticed that almost every component had
the same structure. The only differences were the node title, fields,
and handles.

As more nodes get added, this would create duplicated code and become
difficult to maintain.

## My Thought Process

Instead of solving the problem for only four nodes, I wanted to design
something that could easily support twenty or fifty node types without
rewriting components.

So I separated the common logic from the node-specific configuration.

## Solution

I created a reusable **BaseNode** component which contains the common UI
and behavior shared by every node.

Then I created **nodeConfigs.js**, where each node simply defines its
own configuration such as:

-   title
-   fields
-   input handles
-   output handles

Finally, I created a **createNodeComponent** factory which reads the
configuration and generates the corresponding React component
automatically.

(Show BaseNode → nodeConfigs → createNodeComponent)

## Result

Now adding a completely new node doesn't require creating another React
component.

I only need to add another configuration object, making the application
much more scalable and maintainable.

------------------------------------------------------------------------

# Part 2 -- Dynamic Text Node

## The Problem

The next task required the Text node to automatically generate handles
whenever the user entered variables like:

    Hello {{name}}

The challenge was detecting variables dynamically, avoiding duplicate
handles, and ensuring the node adapted as the text changed.

## My Thought Process

I wanted the node to derive its handles directly from the text instead
of manually maintaining them.

That way, the UI would always stay synchronized with user input.

## Solution

I used a regular expression to identify variables inside double curly
braces.

(Show the regex.)

Each detected variable is converted into an input handle.

To avoid duplicate handles, I used a Set before rendering.

I also added dynamic sizing so the node expands naturally as more
content is entered.

## Result

Now the Text node automatically updates itself based on the user's input
without any additional configuration.

------------------------------------------------------------------------

# Part 3 -- Frontend Architecture & UI Improvements

## The Problem

The starter project was functional but visually very basic.

It also contained several inline styles, making future maintenance more
difficult.

## My Thought Process

I wanted the application to feel closer to a modern SaaS product while
keeping the implementation clean and reusable.

Instead of styling individual components independently, I first created
a common design system and then reused it throughout the application.

## Solution

I reorganized the layout into:

-   Header
-   Sidebar
-   Canvas

I redesigned the BaseNode component using reusable styles for spacing,
typography, borders, and shadows.

I also updated the toolbar styling, improved the drag-and-drop
experience, and made the overall interface cleaner and more consistent.

(Show the application while dragging nodes.)

## Result

The UI is now significantly more polished while remaining easy to
maintain because most styling is shared instead of duplicated.

------------------------------------------------------------------------

# Part 4 -- Backend Integration

## The Problem

The final task required connecting the frontend with a FastAPI backend.

The frontend needed to send the pipeline, and the backend had to return:

-   Number of nodes
-   Number of edges
-   Whether the graph is a Directed Acyclic Graph

## My Thought Process

Since this role is primarily focused on frontend engineering, I kept the
backend implementation simple and focused on fulfilling the required API
contract.

Although my primary backend experience is with Node.js and Express, I
applied the same API design principles while working with FastAPI.

## Solution

On the frontend, clicking **Submit Pipeline** retrieves the current
nodes and edges from the Zustand store and sends them to the backend
using a POST request.

On the backend, I implemented the required endpoint, counted the nodes
and edges, and used NetworkX to determine whether the pipeline forms a
Directed Acyclic Graph.

Finally, the frontend displays the returned analysis in a simple
user-friendly alert.

(Show submit.js, then main.py, then the running application.)

## Result

The frontend and backend are now fully integrated, allowing users to
create a pipeline, submit it, and immediately receive feedback.

------------------------------------------------------------------------

# Biggest Challenge

The biggest challenge for me was designing a reusable architecture
rather than solving the problem only for the current requirements.

Taking a little extra time to refactor early helped reduce duplicated
code and made every subsequent task much easier to implement.

------------------------------------------------------------------------

# Future Improvements

If I had more time, I would:

-   Replace the browser alert with a modal or toast.
-   Add loading and error states.
-   Validate pipelines before submission.
-   Add automated tests using React Testing Library.
-   Support more configurable node types.

------------------------------------------------------------------------

# Closing

Overall, this assessment allowed me to demonstrate my approach to
frontend architecture, reusable component design, UI improvements, state
management, and backend API integration.

Thank you for taking the time to review my submission. I really enjoyed
working on this assessment, and I look forward to discussing it further.
