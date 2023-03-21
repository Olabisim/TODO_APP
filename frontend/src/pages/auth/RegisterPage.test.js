import React from 'react';
import { render, waitFor, screen, findByText } from '@testing-library/react';
import { useQuery } from 'react-query';
import { RegisterPage } from './RegisterPage';

// Mock useQuery
jest.mock('react-query');

// {email, password}

describe('RegisterPage', () => {
  test('renders with post data', async () => {
    const postData = {
      id: 1,
      name: "olabisi",
      email: 'olabisidss@gmail.com',
      password: '123456789',
    };
    // Mock useQuery to return the post data
    useQuery.mockReturnValueOnce({ data: postData, isLoading: false, isError: false });
    render(<RegisterPage />);
    // Wait for the post data to load and render
//     await screen.findByText(() => screen.getByText(postData.title));
//     expect(screen.getByText(postData.title)).toBeInTheDocument();
//     expect(screen.getByText(postData.completed)).toBeInTheDocument();
  });
});