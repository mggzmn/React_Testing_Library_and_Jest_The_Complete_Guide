import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows two inputs and a button', () => {
    //render the component
    render(<UserForm />)
    //manipulate the component
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    //assertion
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
})