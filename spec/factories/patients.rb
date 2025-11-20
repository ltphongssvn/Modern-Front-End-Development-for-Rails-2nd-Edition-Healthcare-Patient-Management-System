FactoryBot.define do
  factory :patient do
    first_name { "MyString" }
    last_name { "MyString" }
    date_of_birth { "2025-11-20" }
    email { "MyString" }
    phone { "MyString" }
    medical_record_number { "MyString" }
  end
end
