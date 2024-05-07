
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    // Perform search or update state with searchTerm
    console.log('Search Term:', searchTerm);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' ,width:'450px',}}>
      <SearchIcon style={{ marginRight: '8px' }} />
      <TextField
      style={{ width: '450px',height:'' }}
        label="Type here to Search..."
        variant="outlined"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
