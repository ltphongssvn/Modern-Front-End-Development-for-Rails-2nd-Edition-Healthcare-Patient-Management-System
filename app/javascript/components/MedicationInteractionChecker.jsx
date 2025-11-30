// app/javascript/components/MedicationInteractionChecker.jsx
import React, { useState, useEffect } from 'react'

const MedicationInteractionChecker = ({ medications }) => {
  const [interactions, setInteractions] = useState([])
  const [selectedMeds, setSelectedMeds] = useState([])
  
  const checkInteractions = () => {
    const mockInteractions = [
      { drug1: selectedMeds[0]?.name, drug2: selectedMeds[1]?.name, severity: 'moderate', description: 'May increase drowsiness' },
    ]
    if (selectedMeds.length >= 2) {
      setInteractions(mockInteractions)
    }
  }
  
  const toggleMedication = (med) => {
    setSelectedMeds(prev => 
      prev.includes(med) 
        ? prev.filter(m => m.id !== med.id)
        : [...prev, med]
    )
  }
  
  useEffect(() => {
    checkInteractions()
  }, [selectedMeds])
  
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Check Medication Interactions</h2>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h3 className="font-medium mb-2">Current Medications</h3>
          {medications.map(med => (
            <label key={med.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                onChange={() => toggleMedication(med)}
                className="mr-2"
              />
              <span>{med.name} - {med.dosage}</span>
            </label>
          ))}
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Potential Interactions</h3>
          {interactions.length > 0 ? (
            interactions.map((interaction, i) => (
              <div key={i} className="mb-2 p-2 bg-yellow-50 border border-yellow-200 rounded">
                <p className="font-medium text-yellow-800">
                  {interaction.drug1} + {interaction.drug2}
                </p>
                <p className="text-sm text-yellow-600">{interaction.description}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Select medications to check</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default MedicationInteractionChecker
