import { render, screen } from "@testing-library/react";
import { useSession } from 'next-auth/client'
import { SignInButton } from ".";
import { mocked } from 'ts-jest/utils';

jest.mock("next-auth/client");

describe("SignInButton component", () => {
  it("renders correctly when user is not authenticated", () => {
    const useSessionMocked = mocked(useSession);
    // mocka apenas a primeira vez
    useSessionMocked.mockReturnValueOnce([null, false]);

    render(<SignInButton />);

    expect(screen.getByText("Sign in with GitHub")).toBeInTheDocument();
  });

  it("renders correctly when user is authenticated", () => {
    const useSessionMocked = mocked(useSession);
    useSessionMocked.mockReturnValue([{
      user: {
        name: 'John Doe',
        email: 'john.doe@example.com',
      },
      expires: 'fake-expires',
    }, true]);

    render(<SignInButton />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });
});
