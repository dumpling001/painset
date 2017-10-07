class Comment < ApplicationRecord
  validates :content, presence: true
  belongs_to :user
  belongs_to :pain

  scope :recent, -> { order("created_at DESC") }

end
