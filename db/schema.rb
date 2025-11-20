# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_11_20_211413) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.bigint "patient_id", null: false
    t.datetime "scheduled_at"
    t.integer "status"
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_appointments_on_patient_id"
  end

  create_table "medical_records", force: :cascade do |t|
    t.bigint "patient_id", null: false
    t.string "recordable_type", null: false
    t.bigint "recordable_id", null: false
    t.string "record_type"
    t.datetime "recorded_at"
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_medical_records_on_patient_id"
    t.index ["recordable_type", "recordable_id"], name: "index_medical_records_on_recordable"
  end

  create_table "medications", force: :cascade do |t|
    t.bigint "patient_id", null: false
    t.string "name"
    t.string "dosage"
    t.string "frequency"
    t.date "start_date"
    t.date "end_date"
    t.string "prescribed_by"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_medications_on_patient_id"
  end

  create_table "patients", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.date "date_of_birth"
    t.string "email"
    t.string "phone"
    t.string "medical_record_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["medical_record_number"], name: "index_patients_on_medical_record_number", unique: true
  end

  create_table "vital_signs", force: :cascade do |t|
    t.bigint "patient_id", null: false
    t.datetime "recorded_at"
    t.decimal "temperature"
    t.integer "blood_pressure_systolic"
    t.integer "blood_pressure_diastolic"
    t.integer "heart_rate"
    t.integer "respiratory_rate"
    t.integer "oxygen_saturation"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_vital_signs_on_patient_id"
  end

  add_foreign_key "appointments", "patients"
  add_foreign_key "medical_records", "patients"
  add_foreign_key "medications", "patients"
  add_foreign_key "vital_signs", "patients"
end
