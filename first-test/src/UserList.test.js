import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

test('render one row per user', () => {
    //Render the component
    const users = [
        { name: 'jane', email: 'jane@jane.com' },
        { name: 'sam', email: 'sam@sam.com' },
    ]
    render(<UserList users={users} />)
    // find all the rows in the table
    //screen.logTestingPlaygroundURL();
    const rows = within(screen.getByTestId('users')).getAllByRole('row');

    //assertion: correct number of rows in the table
    expect(rows).toHaveLength(2);
});
test('render one row per user fallback', () => {
    //Render the component
    const users = [
        { name: 'jane', email: 'jane@jane.com' },
        { name: 'sam', email: 'sam@sam.com' },
    ]
    const { container } = render(<UserList users={users} />)
    // find all the rows in the table
    //screen.logTestingPlaygroundURL();
    const rows = container.querySelectorAll('tbody tr');

    //assertion: correct number of rows in the table
    expect(rows).toHaveLength(2);
});
test('render the email and name of each user', () => {

});


