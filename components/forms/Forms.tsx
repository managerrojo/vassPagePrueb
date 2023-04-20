import React, { useState } from 'react';

const Forms = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [requiredError, setRequiredError] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = {
            name,
            email,
            company,
            country,
            phone,
            message,
        };
        if (name.trim() === '' || email.trim() === '' || company.trim() === '' || message.trim() === '') {
            setRequiredError(true); // Establece el valor de requiredError a true si algún campo obligatorio está vacío
        } else {
            setRequiredError(false); // Establece el valor de requiredError a false si todos los campos obligatorios están llenos
            console.log(data);
        }
    };

    return (
        <div className="wrapper">
            <form className="form" onSubmit={handleSubmit}>
                <div className='box-row1'>
                    <input className="input"
                        type="text"
                        placeholder="Nombre y apellidos"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <span className="required">{(requiredError && name.trim() === '') ? 'El campo es obligatorio.' : ''}</span>
                    <input className="input" type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    <span className="required">{(requiredError && email.trim() === '') ? 'El campo es obligatorio.' : ''}</span>
                    <input className="input" type="text" placeholder="Empresa / Organismo" value={company} onChange={(event) => setCompany(event.target.value)} />
                    <span className="required">{(requiredError && company.trim() === '') ? 'El campo es obligatorio.' : ''}</span>
                    <input className="input" type="text" placeholder="País" value={country} onChange={(event) => setCountry(event.target.value)} />
                </div>
                <div className='box-row2'>
                    <input className="input" type="tel" placeholder="Teléfono" value={phone} onChange={(event) => setPhone(event.target.value)} />
                    <div className="label">
                        <label>Mensaje:</label>
                    </div>
                    <textarea className="textarea" value={message} onChange={(event) => setMessage(event.target.value)} />
                    <span className="required">{(requiredError && message.trim() === '') ? 'El campo es obligatorio.' : ''}</span>
                    <div className='box-button'>
                        <button className="button" type="submit">Enviar</button>
                    </div>
                    <div className="required-all">
                        <span>{(requiredError) ? 'Uno o más campos tienen un error. Por favor, revísalos e inténtalo de nuevo.' : ''}</span>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Forms;
