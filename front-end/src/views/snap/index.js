import React, { useEffect, useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { fetchEmails, sendSnap } from '../../service/snap';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import {
  ListItem,
  ListItemText,
  Button,
  Icon,
} from '@material-ui/core';
import { FixedSizeList } from 'react-window';

const Snap = () => {
  const [photo, setPhoto] = useState('');
  const [emails, setEmails] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedDuration, setSelectedDuration] = useState(1);
  const durations = [...Array(10).keys()].map((i) => i + 1);

  useEffect(() => {
    fetchEmails(setEmails);
  }, []);

  const onSubmit = async () => {
    await sendSnap({ photo, duration: selectedDuration, email: selectedUser });
    setPhoto('');
  };

  const handleTakePhoto = (dataUri) => {
    setPhoto(dataUri);
  };

  const emailList = (props) => {
    const { index, style } = props;
    return (
      <ListItem
        button
        style={style}
        key={index}
        onClick={(e) => setSelectedUser(e.target.innerText)}
      >
        <ListItemText primary={emails[index].email} />
      </ListItem>
    );
  };
  const secList = (props) => {
    const { index, style } = props;

    return (
      <ListItem
        button
        style={style}
        key={index}
        onClick={(e) => setSelectedDuration(e.target.innerText)}
      >
        <ListItemText primary={durations[index]} />
      </ListItem>
    );
  };

  return (
    <div className="snap">
      {!photo && (
        <Camera
          onTakePhotoAnimationDone={(dataUri) => handleTakePhoto(dataUri)}
        />
      )}
      {photo && (
        <div className="snap-container">
          <div className="snap-photo">
            <img src={photo} alt="photo" className="photo" />
          </div>
          <div className="select">
            <div className="send-to">
              <p className="sub-title">SEND TO : </p>
              <FixedSizeList
                height={400}
                width={300}
                itemSize={46}
                itemCount={emails.length}
                itemData={setSelectedUser}
                className="email-list"
              >
                {emailList}
              </FixedSizeList>
            </div>

            <div className="duration">
              <p className="sub-title">DURATION : </p>
              <FixedSizeList
                height={400}
                width={300}
                itemSize={46}
                itemCount={durations.length}
                className="duration-list"
              >
                {secList}
              </FixedSizeList>
            </div>
          </div>
          <div className="send-reset">
            {selectedUser && (
              <div className="recap">
                <h4>
                  Send this snap to{' '}
                  <span className="rec-email">{selectedUser}</span> with{' '}
                  <span className="rec-duration">{selectedDuration}</span> sec ?
                </h4>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<Icon>send</Icon>}
                  className="send-button"
                  onClick={onSubmit}
                >
                  SEND
                </Button>
                <Button
                  variant="contained"
                  color="red"
                  endIcon={<PhotoCamera />}
                  onClick={() => handleTakePhoto('')}
                  className="reset-button"
                >
                  RESET
                </Button>
              </div>
            )}
            {!selectedUser && photo && (
              <Button
                variant="contained"
                color="red"
                endIcon={<PhotoCamera />}
                onClick={() => handleTakePhoto('')}
                className="reset-button"
              >
                RESET
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Snap;
