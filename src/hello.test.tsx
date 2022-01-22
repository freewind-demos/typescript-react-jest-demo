import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import Hello from "./hello";


describe('Hello', () => {
  test('handle onChange', () => {
    const mockOnChange = jest.fn()
    const {container} = render(<Hello name='typescript' onChange={mockOnChange}/>)
    const inputNode = container.querySelector('input')!

    fireEvent.change(inputNode, {target: {value: 'react'}});

    expect(mockOnChange).toHaveBeenCalledWith('react');
  });
})
