// app/javascript/components/VitalSignsDashboard.jsx
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const VitalSignsDashboard = ({ vitalSigns }) => {
  const data = vitalSigns.map(vital => ({
    time: new Date(vital.recorded_at).toLocaleTimeString(),
    temperature: vital.temperature,
    heartRate: vital.heart_rate,
    systolic: vital.blood_pressure_systolic,
    diastolic: vital.blood_pressure_diastolic,
    oxygen: vital.oxygen_saturation
  }))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-4">Temperature & Heart Rate</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temperature" stroke="#ff7300" name="Temp (°F)" />
            <Line type="monotone" dataKey="heartRate" stroke="#8884d8" name="Heart Rate" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-4">Blood Pressure</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="systolic" stroke="#82ca9d" name="Systolic" />
            <Line type="monotone" dataKey="diastolic" stroke="#ffc658" name="Diastolic" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default VitalSignsDashboard
