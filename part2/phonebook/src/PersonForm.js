function PersonForm({ newName, handleInputNameChange, newNumber, handleInputNumberChange, addPhoneEntry }) {
    return (
      <form>
        <div>
          name: <input value={newName} onChange={handleInputNameChange}/>
        </div>
        <div>
          phone: <input value={newNumber} onChange={handleInputNumberChange}/>
        </div>
        <div>
          <button type="submit" onClick={addPhoneEntry}>add</button>
        </div>
      </form>
    )
}

export default PersonForm;