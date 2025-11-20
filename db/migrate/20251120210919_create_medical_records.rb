class CreateMedicalRecords < ActiveRecord::Migration[8.0]
  def change
    create_table :medical_records do |t|
      t.references :patient, null: false, foreign_key: true
      t.references :recordable, polymorphic: true, null: false
      t.string :record_type
      t.datetime :recorded_at
      t.text :notes

      t.timestamps
    end
  end
end
