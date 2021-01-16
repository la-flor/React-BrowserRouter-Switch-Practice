import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const NewColorForm = ({ addColor }) => {
    const [formData, setFormData] = useState('');
    const history = useHistory();

    const handleChange = (e) => {
        setFormData(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData !== "" && formData !== " ") {
            addColor(formData);
            history.push('/colors');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="Color">New Color:</label>&nbsp;&nbsp;
                <input 
                    id="Color"
                    name="Color"
                    type="text"
                    onChange={handleChange}
                    value={formData}
                    placeholder="Violet"

                />
            <br/><br/>
            <button id="addColorBtn">Add Color</button>
        </form>
    )
}

export default NewColorForm;