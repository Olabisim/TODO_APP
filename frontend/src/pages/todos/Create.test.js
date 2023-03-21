import React from 'react';
import { render, waitFor, screen, findByText } from '@testing-library/react';
import { useQuery } from 'react-query';
// import CreateTodo from './CreateTodo';
import { CreateTodo } from './Create';

// Mock useQuery
jest.mock('react-query');

describe('CreateTodo', () => {
  test('renders with post data', async () => {
    const postData = {
      id: 1,
      title: 'Test Post',
      completed: 'TRUE',
    };
    // Mock useQuery to return the post data
    useQuery.mockReturnValueOnce({ data: postData, isLoading: false, isError: false });
    render(<CreateTodo />);
    // Wait for the post data to load and render
//     await screen.findByText(() => screen.getByText(postData.title));
//     expect(screen.getByText(postData.title)).toBeInTheDocument();
//     expect(screen.getByText(postData.completed)).toBeInTheDocument();
  });
});