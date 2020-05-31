import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import {fetchEmails, sendSnap} from "../../service/snap";

const Snap = () => {
    const [photo, setPhoto] = useState('');
    const [emails, setEmails] = useState([]);
    const { handleSubmit, register } = useForm();
    const durations = [ ...Array(10).keys() ].map( i => i+1);

    useEffect(() =>{
        fetchEmails(setEmails);
    }, []);

    const onSubmit = async (values) => {
        await sendSnap({photo, duration: values.duration, email: values.email});
        setPhoto('');
    };

    const handleTakePhoto = (dataUri) => {
        setPhoto(dataUri);
    }

    return (
        <div className="App">

            {!photo &&  <Camera onTakePhoto={(dataUri) => handleTakePhoto(dataUri)} /> }

            {photo && (
                <div>
                    <img src={photo} alt="camera"/>
                    <button onClick={() => handleTakePhoto('')}>Reset</button>
                </div>
            )}



            {photo &&
            <form onSubmit={handleSubmit(onSubmit)}>
                <select
                    name="email"
                    ref={register({
                        required: 'Required',
                    })}
                >
                    {emails.map((email) => (
                        <option key={email.email} value={email.email} > {email.email}</option>
                    ))}

                </select>

                <select
                    name="duration"
                    ref={register({
                        required: 'Required',
                    })}
                >
                    {durations.map( (duration) =>(
                            <option key={duration}>{duration}</option>
                        )
                    )}

                </select>

                <button type="submit">Send</button>
            </form>
            }


        </div>
    );
}

export default Snap;