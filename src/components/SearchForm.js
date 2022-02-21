import SearchIcon from '@mui/icons-material/Search';

const SearchForm = () => {

    const handleClick = (event) => {

        if (event.keyCode === 32) {
            event.preventDefault();
        } else {
            
        }

        console.log(event.key);
    }

    return (
        <div style={{margin: '1rem'}}>
        <input onKeyDown={handleClick}/>
        <SearchIcon style={{marginLeft: '0.5rem'}}/>
        </div>
    );
}

export default SearchForm;