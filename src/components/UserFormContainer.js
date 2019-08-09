import React from 'react'


export default function MessageFormContainer(props){
  const {
    onSubmit,
    value,
    onChange,
    user
  } = props

    return <div>
      <h3>Pick your name</h3>
      <form onSubmit={onSubmit}>
        <input type='text'
         value={value}
          onChange={onChange}
          placeholder={user}>
          </input>
        <button type='submit'>Send</button>
      </form>
    </div>

}
