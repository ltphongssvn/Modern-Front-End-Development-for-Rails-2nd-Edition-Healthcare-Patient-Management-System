FactoryBot.define do
  factory :medical_record do
    patient { nil }
    recordable { nil }
    record_type { "MyString" }
    recorded_at { "2025-11-20 13:09:19" }
    notes { "MyText" }
  end
end
