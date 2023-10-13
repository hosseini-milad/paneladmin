import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import stylisRTLPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';

function StyleInput(props){
    const options=[{"title":"Test1"},{"title":"Test2"}]
    const [filterItems,setFilterItems] = useState([])
    
    const [loading,setLoading] = useState("1")
    const [search,setSearch] = useState('')

    const cacheRtl = createCache({
        key: "muirtl",
        stylisPlugins: [stylisRTLPlugin]
      });
    const searchItem=(searchPhrase)=>{
        setSearch(searchPhrase)
    }
    return(
        <CacheProvider value={cacheRtl}>{/*props.direction==="rtl"?cacheRtl:""}>*/  }
            <Autocomplete
            disablePortal
            getOptionLabel={(option) => option.title}
            //className={stylisRTLPlugin}
            options={filterItems||[]}
            className={props.class}
            onChange={(e,value)=>props.setItem(value)}
            renderInput={(params) => 
            <TextField {...params} label="شرح کالا" 
                InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                    <>
                        {loading ? <CircularProgress color="inherit" size={20} /> : null}
                        {params.InputProps.endAdornment}
                    </>
                    ),
                }}
                onChange={(e)=>searchItem(e.target.value)}
            />}
            />
        </CacheProvider>
    )
}
export default StyleInput