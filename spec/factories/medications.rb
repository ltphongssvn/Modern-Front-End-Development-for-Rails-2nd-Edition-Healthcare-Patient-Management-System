FactoryBot.define do
  factory :medication do
    patient { nil }
    name { "MyString" }
    dosage { "MyString" }
    frequency { "MyString" }
    start_date { "2025-11-20" }
    end_date { "2025-11-20" }
    prescribed_by { "MyString" }
  end
end
