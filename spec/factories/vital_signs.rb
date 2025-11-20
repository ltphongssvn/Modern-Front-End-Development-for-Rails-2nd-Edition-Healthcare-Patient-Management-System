FactoryBot.define do
  factory :vital_sign do
    patient { nil }
    recorded_at { "2025-11-20 13:14:13" }
    temperature { "9.99" }
    blood_pressure_systolic { 1 }
    blood_pressure_diastolic { 1 }
    heart_rate { 1 }
    respiratory_rate { 1 }
    oxygen_saturation { 1 }
  end
end
