import React, { useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom'
import { Navbar, Form, InputGroup, FormControl, Button } from 'react-bootstrap';

import CartLink from './CartLink';
import Info from './Info';
import BookContext from '../../context/book/bookContext';

const Nav = () => {
    const location = useLocation();
    const history = useHistory();
    const { setSearch, search } = useContext(BookContext);
    const handleChange = ({ target: { value } }) => setSearch(value);

    return <>
        < Navbar style={{ justifyContent: 'space-between' }} sticky={"top"} bg="dark" variant="dark" >
            {location.pathname === '/' ?
                <> {/* URL PATH === index => show Search bar to look through books or ELSE show button to go back to previous page */}
                    <Form inline style={{ width: '50%', }} >
                        <InputGroup style={{ width: '100%', }} className="mb-2 mr-sm-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                        <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                                    </svg>
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl type="text" placeholder="Search by title" className="mr-sm-2"
                                value={search} onChange={handleChange} />
                        </InputGroup>
                    </Form>
                    <Navbar.Brand >
                        <CartLink />
                    </Navbar.Brand>
                </> :
                <Button onClick={() => history.goBack()} variant='outline-info'>GO BACK</Button>
            }
        </ Navbar>
        <Info />
    </>


}

export default Nav;
