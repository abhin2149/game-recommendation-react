import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import {searchApi} from "../../services/search-api";

/**
 * * Component to search a game
 */
export default function SearchComponent({value, setValue, query, setQuery}) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    let active = true;
    if (!loading) {
        return undefined;
    }
    (async () => {
        searchApi(query)
            .then((response: any) =>{
                if (active) {
                    setOptions(response.data.results);
                    setLoading(false);
                }
            })
            .catch((err: any) => {
                console.log(err);
                setLoading(false);
            });
    })();

    return () => {
        active = false;
    };
  }, [loading, query]);

  React.useEffect(() =>{
    if((query !== '' && !value) || (value && query !== value.name)){
      setOpen(true);
      setLoading(true);
    }
  },[query, value]);

  return (
    <Autocomplete
        style={{ width: 300 }}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        value={value}
        onChange={(_event: any, newValue: any) => {
          setValue(newValue);
        }}
        onInputChange={(_event: any, query: any) => {
          setQuery(query);
        }}
        getOptionSelected={(option, value) => option.id === value.id}
        getOptionLabel={(option) => option.name}
        options={options}
        loading={loading}
        renderInput={(params) => (
          <TextField
              {...params}
              label="Search for a game..."
              variant="outlined"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                      {loading ? <CircularProgress color="inherit" size={20} /> : null}
                      {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
          />
        )}
    />
  );
}