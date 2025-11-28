# app/models/patient.rb
class Patient < ApplicationRecord
  has_many :appointments, dependent: :destroy
  has_many :medications, dependent: :destroy
  has_many :vital_signs, dependent: :destroy
  has_many :medical_records, dependent: :destroy
  
  validates :first_name, :last_name, :medical_record_number, presence: true
  validates :medical_record_number, uniqueness: true
end
