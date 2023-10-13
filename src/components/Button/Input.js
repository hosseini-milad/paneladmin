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
    const cacheltR = createCache({
        key: "muiltr",
        stylisPlugins: []
      });
    const searchItem=(searchPhrase)=>{
        setSearch(searchPhrase)
    }
    return(
        <CacheProvider value={props.direction==="rtl"?cacheRtl:cacheltR}>
            <TextField label={props.title} 
                onChange={(e)=>searchItem(e.target.value)}
            />
        </CacheProvider>
    )
}
export default StyleInput