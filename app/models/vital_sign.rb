# app/models/vital_sign.rb
class VitalSign < ApplicationRecord
  belongs_to :patient
  
  validates :recorded_at, presence: true
  
  broadcasts_to :patient
  
  after_create_commit -> { broadcast_prepend_to patient, target: "vital_signs_list" }
end
