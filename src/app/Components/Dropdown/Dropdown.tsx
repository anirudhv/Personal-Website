"use client"
import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';

const Dropdown = (props) => {
	const categories = props.data.map(proj => proj.category);
	const uniqueCategories = [...new Set(categories)];
	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
	  PaperProps: {
	    style: {
	      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
	      width: 250,
	    },
	  },
	};
	return (
		<div className="center-content">
			<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
		        <InputLabel id="select-standard-label">Sort By</InputLabel>
		        <Select
		          labelId="demo-simple-select-standard-label"
		          id="demo-simple-select-standard"
		          value={props.sort}
		          onChange={props.changeSort}
		          label="Age"
		        >
		        	<MenuItem value="">-</MenuItem>
		        	<MenuItem value="Project Name (A-Z)">Project Name (A-Z)</MenuItem>
		         	<MenuItem value="Project Name (Z-A)">Project Name (Z-A)</MenuItem>
		         	<MenuItem value="Project Category (A-Z)">Project Category (A-Z)</MenuItem>
		         	<MenuItem value="Project Category (Z-A)">Project Category (Z-A)</MenuItem>
		        	<MenuItem value="Random">Random</MenuItem>
		        </Select>
	    	</FormControl>
	    	<FormControl sx={{ m: 1, width: 300 }}>
		        <InputLabel id="multiple-chip-label">Filter by Category</InputLabel>
		        <Select
		          labelId="multiple-chip-label"
		          id="multiple-chip"
		          multiple
		          value={props.category}
		          onChange={props.changeCategory}
		          input={<OutlinedInput id="select-multiple-chip" label="Filter by Category" />}
		          renderValue={(selected) => (
		            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
		              {selected.map((value) => (
		                <Chip 
		                key={value} 
		                label={value}
		                onMouseDown={(event) => {
		                	event.stopPropagation();
		                }}
		                onDelete={(e) => props.deleteCategory(e, value)}
		                 />
		              ))}
		            </Box>
		          )}
		          MenuProps={MenuProps}
		        >
		          {uniqueCategories.map((proj) => (
		            <MenuItem
		              key={proj}
		              value={proj}
		            >
		              {proj}
		            </MenuItem>
		          ))}
		        </Select>
      		</FormControl>
		</div>
    );
}

export default Dropdown;