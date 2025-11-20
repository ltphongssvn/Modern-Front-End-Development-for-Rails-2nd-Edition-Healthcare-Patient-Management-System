class MedicalRecord < ApplicationRecord
  belongs_to :patient
  belongs_to :recordable, polymorphic: true
end
