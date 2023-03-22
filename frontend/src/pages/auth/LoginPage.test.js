import React from 'react';
// import axios from 'axios';
import { render, waitFor, screen } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';
// import LoginPage from './LoginPage';
import { LoginPage } from './LoginPage';
import { useQuery } from 'react-query' 


describe('LoginPage', () => {
  it('renders the data from the API', async () => {
    const { getByTestId } = render(<LoginPage />);
    await waitFor(() => expect(screen.getByTestId('data')).toHaveTextContent('Sample Data'));
  });

  it('calls the API when the component is rendered', async () => {
    await act(async () => {
      render(<LoginPage />);
      await new Promise(resolve => setTimeout(resolve, 0));
    });
    expect(fetch.get).toHaveBeenCalledWith('/api/data');
  });

  it('returns the correct data from the useQuery hook', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useQuery('/api/data'));
    await waitForNextUpdate();
    expect(result.current.data).toEqual('Sample Data');
  });
});