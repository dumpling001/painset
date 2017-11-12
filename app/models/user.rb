class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :confirmable
  has_many :pains
  has_many :comments
  has_many :pain_marks
  has_many :participated_pains, :through => :pain_marks, :source => :pain

  def is_member_of?(pain)
    participated_pains.include?(pain)
  end

  def mark!(pain)
    participated_pains << pain
  end

  def discard!(pain)
    participated_pains.delete(pain)
  end


end
