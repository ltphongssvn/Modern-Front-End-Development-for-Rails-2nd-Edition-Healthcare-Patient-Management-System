FactoryBot.define do
  factory :appointment do
    patient { nil }
    scheduled_at { "2025-11-20 13:06:44" }
    status { 1 }
    notes { "MyText" }
  end
end
