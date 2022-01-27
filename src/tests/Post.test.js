import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
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
    handleUpvote: jest.fn(),
  };

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

    expect(getByText("Author: test author")).toBeInTheDocument;
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
  });

  test("list renders correct number of items", () => {
    const { getAllByRole } = render(
      <Post
        postData={validProps.postData}
        handleUpvote={validProps.handleUpvote}
      />
    );
    const listItems = getAllByRole('listitem');

    expect(listItems.length).toBe(3);
  });

  test("register upvote button clicks", () => {
    const { getByText } = render(
      <Post
        postData={validProps.postData}
        handleUpvote={validProps.handleUpvote}
      />
    );

    fireEvent.click(getByText("Upvote this"));
    expect(validProps.handleUpvote).toBeCalledTimes(1);
  });
});
