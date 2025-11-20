class CreatePatients < ActiveRecord::Migration[8.0]
  def change
    create_table :patients do |t|
      t.string :first_name
      t.string :last_name
      t.date :date_of_birth
      t.string :email
      t.string :phone
      t.string :medical_record_number

      t.timestamps
    end
    add_index :patients, :medical_record_number, unique: true
  end
end
