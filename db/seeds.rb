# db/seeds.rb
puts "Creating patients..."
5.times do |i|
  Patient.create!(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    date_of_birth: Faker::Date.birthday(min_age: 18, max_age: 85),
    email: Faker::Internet.email,
    phone: Faker::PhoneNumber.phone_number,
    medical_record_number: "MRN#{1000 + i}"
  )
end

puts "Creating appointments..."
Patient.all.each do |patient|
  3.times do
    Appointment.create!(
      patient: patient,
      scheduled_at: Faker::Time.forward(days: 30),
      status: [0, 1, 2].sample,
      notes: Faker::Lorem.sentence
    )
  end
end

puts "Creating medications..."
Patient.all.each do |patient|
  2.times do
    Medication.create!(
      patient: patient,
      name: Faker::Lorem.word,
      dosage: "#{rand(10..500)}mg",
      frequency: ["Once daily", "Twice daily", "As needed"].sample,
      start_date: Faker::Date.backward(days: 30),
      end_date: Faker::Date.forward(days: 90),
      prescribed_by: "Dr. #{Faker::Name.last_name}"
    )
  end
end

puts "Creating vital signs..."
Patient.all.each do |patient|
  5.times do
    VitalSign.create!(
      patient: patient,
      recorded_at: Faker::Time.backward(days: 7),
      temperature: rand(96.0..101.0).round(1),
      blood_pressure_systolic: rand(90..140),
      blood_pressure_diastolic: rand(60..90),
      heart_rate: rand(60..100),
      respiratory_rate: rand(12..20),
      oxygen_saturation: rand(95..100)
    )
  end
end

puts "Seeding completed!"
