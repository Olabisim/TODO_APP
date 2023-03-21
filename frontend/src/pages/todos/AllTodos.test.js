import React from 'react';
import { render, waitFor, screen, findByText } from '@testing-library/react';
import { useQuery } from 'react-query';
import { AllTodos } from './AllTodos';

// Mock useQuery
jest.mock('react-query');

describe('AllTodos', () => {
  test('renders with post data', async () => { 
    // Mock useQuery to return the post data
    useQuery.mockReturnValueOnce({ isLoading: false, isError: false });
    render(<AllTodos />);
    // Wait for the post data to load and render
//     await screen.findByText(() => screen.getByText(postData.title));
//     expect(screen.getByText(postData.title)).toBeInTheDocument();
//     expect(screen.getByText(postData.completed)).toBeInTheDocument();
  });
});