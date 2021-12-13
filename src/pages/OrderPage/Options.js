import React from 'react';

function Options({ name, updateItemCount }) {
  return (
    <form>
      <input
        type="checkbox"
        id={`${name} option`}
        onChange={(event) => {
          updateItemCount(name, event.target.value ? 1 : 0);
        }}
      />{' '}
      <label htmlFor={`${name} option`}>{name}</label>
    </form>
  );
}

export default Options;
