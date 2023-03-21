
import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react'
import {Button} from './Button'


describe('Button', () => {
        test('renders button component', () => {
                render(<Button></Button>)
        })
        
        test('calls onClick prop when clicked', () => {
                const onClickMock = jest.fn();
               render(<Button onClick={onClickMock}>Click me</Button>);
                const button = screen.getByRole('button');
                fireEvent.click(button);
                expect(onClickMock).toHaveBeenCalled();
        });
})








// import { render, screen } from "@testing-library/react";
// import { Button } from "./Button";


// test('renders button component', () => {
//         render(<Button />)
//         const button = screen.getByRole('button', 'blah')
//         expect(button).toHaveClass("relative")
// })