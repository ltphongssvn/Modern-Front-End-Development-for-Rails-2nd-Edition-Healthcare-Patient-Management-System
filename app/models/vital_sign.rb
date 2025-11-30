# app/models/vital_sign.rb
class VitalSign < ApplicationRecord
  belongs_to :patient
  
  validates :recorded_at, presence: true
end
