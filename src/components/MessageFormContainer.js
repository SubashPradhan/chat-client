import React from 'react'


export default function MessageFormContainer(props){
  const {
    onSubmit,
    value,
    onChange
  } = props

    return <div>
      <h3>New Messages</h3>
      <form onSubmit={onSubmit}>
        <input type='text'
         value={value}
          onChange={onChange}>
          </input>
        <button type='submit'>Send</button>
      </form>
    </div>

}
