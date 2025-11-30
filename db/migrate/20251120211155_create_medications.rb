class CreateMedications < ActiveRecord::Migration[8.0]
  def change
    create_table :medications do |t|
      t.references :patient, null: false, foreign_key: true
      t.string :name
      t.string :dosage
      t.string :frequency
      t.date :start_date
      t.date :end_date
      t.string :prescribed_by

      t.timestamps
    end
  end
end
