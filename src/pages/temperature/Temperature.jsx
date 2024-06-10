import React, { useEffect, useMemo, useState } from 'react';
import './temperature.css';

function Temperature() {
  const [name, setName] = useState('');
  const [state, setState] = useState({
    name: '',
    selected: false
  });

  const user = useMemo(() => ({
    name:state.name,
    selected:state.selected
  }),
  [state.name, state.selected]
  );

  useEffect(() => {
    console.log('The state has changed, useffect runs' )
  }, [user]);

  const handleAdd = () => {
    setState(prev => ({ ...prev, name }));
  }


  const handleSelect = () => {
    setState(prev => ({ ...prev, selected: true }));
  }
  


  return (
    <div className='button'>
      <button onClick={handleAdd}>Add Name</button>
      <button onClick={handleSelect}>Select</button>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      {`name: ${state.name}, 
      selected: ${state.selected.toString()}`}
    </div>
  );
}

export default Temperature;