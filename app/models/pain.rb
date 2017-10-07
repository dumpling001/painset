class Pain < ApplicationRecord
  validates :pain_name, :pain_cause, :regret_level, :next_do,  presence: true
  belongs_to :user
  has_many :comments
end
