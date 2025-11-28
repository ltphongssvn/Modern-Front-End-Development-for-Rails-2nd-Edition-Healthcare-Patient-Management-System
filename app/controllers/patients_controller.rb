# app/controllers/patients_controller.rb
class PatientsController < ApplicationController
  before_action :set_patient, only: [:show, :edit, :update, :destroy]

  def index
    @patients = Patient.all
  end

  def show
    @appointments = @patient.appointments
    @medications = @patient.medications
    @vital_signs = @patient.vital_signs.order(recorded_at: :desc).limit(5)
  end

  private

  def set_patient
    @patient = Patient.find(params[:id])
  end

  def patient_params
    params.require(:patient).permit(:first_name, :last_name, :date_of_birth, :email, :phone, :medical_record_number)
  end
end
