import React, { useState, useEffect } from 'react'
import Pet from "./Pet";

const ANIMALS = ["dog", "bird", "cat", "racoon"];
const SearchParams = () => {
	const [location, setLocation] = useState("");
	const [animal, setAnimal] = useState("");
	const [breed, setBreed] = useState("");
	const breeds = ["poodle","doodle"];
	const [pets, setPets] = useState([]);

	useEffect(() => {
		requestPets();
	},[]); // eslint-disable-line react-hooks/exhaustive-deps

	async function requestPets(){
		const res = await fetch (
				`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=$breed`
		);
			const json = await res.json();
			setPets(json.pets);
	}

	return (
		<div>
			<form>
				<label htmlFor='location'>Location
				<input id='location' value={location} placeholder='location'
					onChange={(e) => setLocation(e.target.value)}
				/>
				</label>
				<label htmlFor='animal'>
					Animal
					<select
					id='animal' value={animal}
					onChange={(e) => {
						setAnimal(e.target.value);
						setBreed("");
					}}
					onBlur={(e) => {
						setAnimal(e.target.value);
						setBreed("");
					}}
					>
					<option />
					{ANIMALS.map((animal) => (
							<option key={animal} value={animal}>
								{animal}
							</option>
							
					))}
					</select>
				</label>
				<label htmlFor='breed'>
					Breed
					<select
					id='breed' value={breed}
					onChange={(e) => {
						setBreed(e.target.value);
					}}
					onBlur={(e) => {
						setBreed(e.target.value);
					}}
					>
					<option />
					{breeds.map((allBreed) => (
							<option key={allBreed} value={allBreed}>
								{allBreed}
							</option>
							
					))}
					</select>
				</label>
				<button>Submit</button>
			</form>
			{pets.map((pet) => ( 
					<Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
				))}
		</div>
	)
}

export default SearchParams;