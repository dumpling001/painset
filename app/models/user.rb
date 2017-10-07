class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :pains
  has_many :comments
  has_many :pain_marks
  has_many :participated_pains, :through => :pain_marks, :source => :pain
end
