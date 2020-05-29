import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import {sendSnap} from "../../service/snap";

export const Snap = () => {
    const [photo, setPhoto] = useState('');
    const { handleSubmit, register } = useForm();
    const durations = [ ...Array(10).keys() ].map( i => i+1);

    const onSubmit = async (values) => {
        await sendSnap({photo, duration: values.duration, email: values.email});
    };

    const handleTakePhoto = (dataUri) => {
        setPhoto(dataUri);
    }

    return (
        <div className="App">
            <Camera
                onTakePhoto={(dataUri) => handleTakePhoto(dataUri)}
            />
            {photo && <img src={photo} alt="camera"/>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <select
                    name="email"
                    ref={register({
                        required: 'Required',
                    })}
                >
                    <option value="priscilla.joly@epitech.eu">priscilla.joly@epitech.eu</option>
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
        </div>
    );
}

export default Snap;