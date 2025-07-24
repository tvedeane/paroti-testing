
import React, { useEffect, useState } from 'react';

const NewsLetterForm = ({ status, message, onValidated }) => {
    const [isMount, setIsMount] = useState(false)


    useEffect(() => {
        setIsMount(true)
    }, [])
    let email;

    const submit = () =>
        email &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value,
        });

    if (!isMount) {
        return null
    }

    return (
        <>

            <div className="mc-form newsletter-one__form">

                <input ref={(node) => (email = node)} type='email' placeholder='Your email' name='email' />
                <button onClick={submit} type='submit' className='newsletter-one__form__btn'>
                    Subscribe
                </button>

            </div>
            {status === "sending" && <div style={{ color: "white" }}>sending...</div>
            }
            {status === "error" && <div style={{ color: "white" }} dangerouslySetInnerHTML={{ __html: message }} />}
            {status === "success" && <div style={{ color: "white" }}>Subscribed !</div>}

        </>
    );
};

export default NewsLetterForm;