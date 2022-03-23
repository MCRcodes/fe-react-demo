import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Post from "../components/Post";

describe("Post", () => {
  const validProps = {
    postData: {
      author: "test author",
      body: "test body",
      date: "test date",
      isPublished: true,
      tags: ["test tag1", "test tag2", "test tag3"],
      title: "test title",
    },
    handleUpvote: () => {},
  };

  // TO DO:
  // - Test list renders correct number of items
  // - Add event testing for Post (hint: use the fireEvent method from react-testing-library)
  // Create a new file to test the PostList component (Check it renders as expected with react-test-renderer)

  test("renders as expected", () => {
    const testRenderer = renderer
      .create(
        <Post
          postData={validProps.postData}
          handleUpvote={validProps.handleUpvote}
        />
      )
      .toJSON();

    expect(testRenderer).toMatchSnapshot();
  });

  test("Post author renders correctly", () => {
    const { getByText } = render(
      <Post
        postData={validProps.postData}
        handleUpvote={validProps.handleUpvote}
      />
    );

    expect(getByText("Author: test author")).toBeInTheDocument();
  });

  test("Renders upvote button with expected value", () => {
    render(
      <Post
        postData={validProps.postData}
        handleUpvote={validProps.handleUpvote}
      />
    );
    const buttonElement = screen.getByText(/upvote this/i);

    expect(buttonElement).toBeInTheDocument();
  })
})
