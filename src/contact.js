import React, { useState } from 'react';
import './contact.css';

function Contact() {
    const [formValue, setValue] = useState({ });
    return (
      <div className="contact-container">
        <form className="flex">
          <label className="flex">
            Name
            <input type="text" onChange={event => setValue({ ...formValue, name: event.target.value})} />
          </label>
          <label className="flex">
            Contact
            <input type="text" onChange={event => setValue({ ...formValue, contact: event.target.value})} />
          </label>
          <label className="flex">Message<textarea rows="5" onChange={event => setValue({ ...formValue, message: event.target.value })}></textarea></label>
          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>
    );
}

export default Contact;