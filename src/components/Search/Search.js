import React from 'react';

import './search.scss';
import { searchImg } from '../../utils/images';

const Search = (props) => {
   return(
      <div className="Search input-group col-md-4 offset-md-4">
         <span className="input-group-addon" id="basic-addon1">
            <img src={searchImg} />
         </span>
         <input 
            type="text" 
            placeholder={props.placeholder}
            value={props.search}
            className="form-control"
            onChange={props.updateSearch}
         />
      </div>
   );
}

export default Search;