class Pain < ApplicationRecord
  validates :pain_name, :pain_cause, :regret_level, :next_do,  presence: true
  belongs_to :user
  has_many :comments
  has_many :pain_marks
  has_many :members, through: :pain_marks, source: :user
end
