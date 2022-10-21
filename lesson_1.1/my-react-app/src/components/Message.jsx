// import '/App.css';

export default function Message(props) {
    return (
        <div className='App'>
            <header className='App-header'>
                <h1 className='App-link'>This is, {props.text}</h1>
            </header>
        </div>
    );
}
