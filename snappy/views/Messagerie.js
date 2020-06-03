import React, { useEffect, useState } from 'react';
import { getSnaps, readSnap, seenSnap } from '../../service/snap';

const AllSnaps = () => {
  const [snaps, setSnaps] = useState([]);
  const [snap, setSnap] = useState('');

  useEffect(() => {
    getSnaps(setSnaps);
  }, [snap]);

  const openSnap = ({ snap_id, duration }) => {
    readSnap(snap_id, setSnap).then(() => {
      setTimeout(() => {
        seenSnap(snap_id, setSnap);
      }, duration * 1000);
    });
  };
  return (
    <div>
      <h1>Messages</h1>
      <ul>
        {snaps.map((snap) => (
          <li key={snap.from}> {snap.from} <br />
            <span >
              <button onClick={() => openSnap(snap)} className="badge badge-pill badge-light">{snap.duration} seconde(s)</button>
            </span>
          </li>
        ))}
      </ul>

      {snap &&
        <img src={snap} alt="mon super snap" />
      }
    </div>
  );
};
export default AllSnaps;
