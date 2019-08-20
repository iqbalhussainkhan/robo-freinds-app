import React from 'react';

const SearchField = ({onSearchChange}) => {
	return (
		<div>
			<input 
			type='text' 
			placeholder='search robot' 
			className='b--green h2 tc w5 bg-lightest-blue'
			onChange={onSearchChange}
			/> 
		</div>
		)
}

export default SearchField;