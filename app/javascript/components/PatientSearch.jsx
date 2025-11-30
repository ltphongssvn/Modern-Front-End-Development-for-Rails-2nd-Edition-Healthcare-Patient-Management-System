// app/javascript/components/PatientSearch.jsx
import React, { useState } from 'react'

const PatientSearch = ({ onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  
  const handleSearch = async (e) => {
    const term = e.target.value
    setSearchTerm(term)
    
    if (term.length >= 2) {
      setLoading(true)
      
      try {
        const response = await fetch(`/api/patients/search?q=${encodeURIComponent(term)}`)
        const data = await response.json()
        setResults(data.patients || [])
      } catch (error) {
        console.error('Search error:', error)
        setResults([])
      } finally {
        setLoading(false)
      }
    } else {
      setResults([])
    }
  }
  
  return (
    <div className="relative">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search patients by name or MRN..."
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      {loading && (
        <div className="absolute right-3 top-3">
          <div className="animate-spin h-5 w-5 border-2 border-blue-500 rounded-full border-t-transparent"></div>
        </div>
      )}
      
      {results.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {results.map(patient => (
            <button
              key={patient.id}
              onClick={() => onSelect(patient)}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 border-b last:border-b-0"
            >
              <p className="font-medium">{patient.first_name} {patient.last_name}</p>
              <p className="text-sm text-gray-600">MRN: {patient.medical_record_number}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default PatientSearch
