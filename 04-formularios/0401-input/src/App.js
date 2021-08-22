import React from 'react';

const App = () => {
    // const [nome, setNome] = React.useState('');
    // const [email, setEmail] = React.useState('');
    const [form, setForm] = React.useState({
        nome: '',
        email: ''
    });

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleChange(event) {
        // const {id, value} = event.target
        const id = event.target.id;
        const value = event.target.value;

        setForm({ ...form, [id]: value });
    }

    return <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input 
            id="nome" 
            name="nome" 
            type="text"
            // value={nome}
            value={form.nome} 
            // onChange={(event) => setNome(event.target.value)} 
            onChange={handleChange} 
        />
        {form.nome}
        <label htmlFor="email">E-mail</label>
        <input 
            id="email" 
            name="email" 
            type="email" 
            // value={email} 
            value={form.email} 
            // onChange={(event) => setEmail(event.target.value)} 
            onChange={handleChange} 
        />
        {form.email}
    </form>
};

export default App;