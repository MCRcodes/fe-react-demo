# Testing in React Exercise

## Installation, branch switching and commands

### Setting up the repo locally
In your chosen local directory, clone down the repo and `cd` into the newly made directory:
`git clone git@github.com:MCRcodes/fe-react-demo.git`
`cd fe-react-demo`

By default, you will be checked out on the `lecture/react-intro-1` branch. As this exercise is based on the work already in the `exercise/react-testing` branch we need to checkout this branch from the remote, which we can do with:
`git checkout -t origin/exercise/react-testing`

Now as usual we can install with
`npm i`

Start the app with
`npm start`

Run test suite with
`npm test`

## Exercises
The project starts where the lecture demo finishes.

We have a couple of tests written for the `<Post />` component, we want to cover all code paths that will change the output of the component. *You do not need to change the components to get your tests to pass*

Remember the general thought process for writing a test: **Arrange** - **Act** - **Assert**
**Arrange** the needed parts:
- Create an instance of the component under test (use the `render` method),
- Find the elements you are looking for on the page,
**Act**
- Alter the elements if needed (for example, by simulating clicking something in the component). For some of these tests we will only need to check if something has rendered successfully and this step isn't needed
**Assert**
- Verify that what you expect to be rendered actually is rendered by using an appropriate matcher (eg `toBeInTheDocument()`)

#### Checking your tests are working 
Once your test is passing, its good practice to make sure it is actually doing its job and it is not passing becasuse of an error in the test. We can do this by temporarily changing the value we expect to be rendered in the component itself (for example by adding some extra characters into the string being searched for) then re-running the test. If it fails, we can deduce that the test is working correctly

### Post component
Write tests to validate that:
- The date renders as expected. Is what is rendered on the screen on exact match for the value in `validProps`? (getByText would be a good query to use for this)
- The title renders as expected
- Changing the value of `isPublished` displays the text expected in each case (one test for each possibility). What would you expect to see in each case?
- The correct number of tags is rendered (the `getAllByRole` query - which returns an array of elements matching the given aria role - would be helpful for this). [These docs](https://www.w3.org/TR/wai-aria-1.2/) give an exhaustive list of different roles, search for the term `listitem` on this page
- Clicking the button fires an event and the handleUpvote function is called.  (hint: use the fireEvent method from react-testing-library)

### PostList component
- Create a new test file for the PostList component
- Create an appropriate `validProps` object (look at what the actual component requires and make sure your validProps is structured in the same way)
- Write a test to validate that the component renders correctly (use `react-test-renderer` for this)