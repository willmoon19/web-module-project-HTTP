import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';

const initialData = {
    title:"",
    director: "",
    genre: "",
    metascore: 0,
    description: ""
}

const AddMovieForm = () => {
const [newMovie, setNewMovie] = useState(initialData);
const { push } = useHistory();
const { id } = useParams();

const handleChange = (e) => {
    setNewMovie({
        ...newMovie, [e.target.name]: e.target.value
    })
}

const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:5000/api/movies/")
    .then(res => {
        console.log(res);
    })
    .catch(err => console.log(err))
}

    return (
            
				<div className="modal-body">
                    <form>				
					<div className="form-group">
						<label>Title</label>
						<input value={newMovie.title} onChange={handleChange} name="title" type="text" className="form-control"/>
					</div>
					<div className="form-group">
						<label>Director</label>
						<input value={newMovie.director} onChange={handleChange} name="director" type="text" className="form-control"/>
					</div>
					<div className="form-group">
						<label>Genre</label>
						<input value={newMovie.genre} onChange={handleChange} name="genre" type="text" className="form-control"/>
					</div>
					<div className="form-group">
						<label>Metascore</label>
						<input value={newMovie.metascore} onChange={handleChange} name="metascore" type="number" className="form-control"/>
					</div>		
					<div className="form-group">
						<label>Description</label>
						<textarea value={newMovie.description} onChange={handleChange} name="description" className="form-control"></textarea>
					</div>
                    </form>						
				</div>
    )

}

export default AddMovieForm;