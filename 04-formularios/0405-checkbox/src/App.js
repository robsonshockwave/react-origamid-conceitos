import React from 'react'

export default function App() {
    // const [termo, setTermo] = React.useState(false);
    const [cores, setCores] = React.useState([]);

    function handleChange({target}) {
        if (target.checked) {
            setCores([...cores, target.value]);
        } else {
            setCores(cores.filter((cor) => cor !== target.value));
        }
    }

    return (
        <form>
            <label>
                <input 
                    type="checkbox" 
                    value="azul"
                    checked={cores.includes('azul')} // se true
                    onChange={handleChange}
                />
                Azul
            </label>
            <label>
                <input 
                    type="checkbox" 
                    value="vermelho"
                    checked={cores.includes('vermelho')} // se true
                    onChange={handleChange}
                />
                Vermelho
            </label>
        </form>
    )
}
