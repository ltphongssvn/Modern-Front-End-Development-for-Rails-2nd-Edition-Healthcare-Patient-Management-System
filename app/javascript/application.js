// app/javascript/application.js
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react'
import ReactDOM from 'react-dom/client'
import VitalSignsDashboard from './components/VitalSignsDashboard'
import MedicationInteractionChecker from './components/MedicationInteractionChecker'
import PatientSearch from './components/PatientSearch'

// Mount React components
document.addEventListener('turbo:load', () => {
  const vitalSignsEl = document.getElementById('vital-signs-dashboard')
  if (vitalSignsEl) {
    const root = ReactDOM.createRoot(vitalSignsEl)
    const vitalSigns = JSON.parse(vitalSignsEl.dataset.vitalSigns || '[]')
    root.render(<VitalSignsDashboard vitalSigns={vitalSigns} />)
  }
  
  const medicationEl = document.getElementById('medication-checker')
  if (medicationEl) {
    const root = ReactDOM.createRoot(medicationEl)
    const medications = JSON.parse(medicationEl.dataset.medications || '[]')
    root.render(<MedicationInteractionChecker medications={medications} />)
  }
  
  const searchEl = document.getElementById('patient-search')
  if (searchEl) {
    const root = ReactDOM.createRoot(searchEl)
    root.render(<PatientSearch onSelect={(patient) => window.location.href = `/patients/${patient.id}`} />)
  }
})
