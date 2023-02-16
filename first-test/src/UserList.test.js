import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";
function renderComponent() {
    const users = [
        { name: 'jane', email: 'jane@jane.com' },
        { name: 'sam', email: 'sam@sam.com' },
    ]
    const {container} = render(<UserList users={users} />);
    return {
        users,
        container
    }
}
test('render one row per user', () => {
    //Render the component
    renderComponent()
    // find all the rows in the table
    //screen.logTestingPlaygroundURL();
    const rows = within(screen.getByTestId('users')).getAllByRole('row');

    //assertion: correct number of rows in the table
    expect(rows).toHaveLength(2);
});
test('render one row per user fallback', () => {
    //Render the component

    const { container } = renderComponent();
    // find all the rows in the table
    //screen.logTestingPlaygroundURL();
    const rows = container.querySelectorAll('tbody tr');

    //assertion: correct number of rows in the table
    expect(rows).toHaveLength(2);
});
test('render the email and name of each user', () => {
    const { users } = renderComponent();

    for (let user of users) {
        const name = screen.getByRole('cell', { name: user.name });
        const email = screen.getByRole('cell', { name: user.email });
        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }
});


