import React, { useState, useEffect, useContext } from 'react';
import { Spinner, Container, Row, Col } from 'react-bootstrap';
import BookContext from '../context/book/bookContext';
import InfoContext from '../context/info/infoContext';
import NavHead from './NavHead';
import Book from './Book';
import Info from './Info';

const Books = () => {
    const bookState = useContext(BookContext);
    const { books, filtered_book_list, loadBooks, filterBooks, loading } = bookState;
    const [search, setSearch] = useState('');

    const { setInfo } = useContext(InfoContext);

    useEffect(() => {
        if (!books.length) loadBooks();
        if (search) filterBooks(search);
        // eslint-disable-next-line
    }, [search])

    useEffect(() => {
        if (search && !filtered_book_list.length)
            setInfo('no book matching you request, please try again !', 'warning', 1500)
        // eslint-disable-next-line
    }, [filtered_book_list])

    const handleChange = e => setSearch(e.target.value)

    return (
        <div className="book-list">
            <NavHead search={search} handleChange={handleChange} />
            <Info />
            <Container>
                <Row>
                    {loading ?
                        <Spinner style={{ margin: 'auto' }} animation="grow" /> :
                        <Container>
                            {!search ?
                                <Row style={{ rowGap: 20 }}>
                                    {books.map(book => <Col key={book.isbn} xs={12} sm={6} lg={4} xl={3}> <Book book={book} /></Col>)}
                                </Row> : null}
                            {search && filtered_book_list && filtered_book_list.length ?
                                <Row style={{ rowGap: 20 }}>
                                    {filtered_book_list.map(book => <Col key={book.isbn} xs={12} sm={6} lg={4} xl={3}> <Book book={book} /></Col>)}
                                </Row> : null}
                        </Container>
                    }
                </Row>

            </Container>

        </div>
    );
}

export default Books;