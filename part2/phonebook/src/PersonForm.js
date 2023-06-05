function PersonForm({ newName, handleInputNameChange, newPhone, handleInputPhoneChange, addPhoneEntry }) {
    return (
      <form>
        <div>
          name: <input value={newName} onChange={handleInputNameChange}/>
        </div>
        <div>
          phone: <input value={newPhone} onChange={handleInputPhoneChange}/>
        </div>
        <div>
          <button type="submit" onClick={addPhoneEntry}>add</button>
        </div>
      </form>
    )
}

export default PersonForm;