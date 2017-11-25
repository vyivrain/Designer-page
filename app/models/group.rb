class Group < ApplicationRecord
  extend FriendlyId

  has_many :projects, inverse_of: :group

  validates :name, presence: true, uniqueness: true
  validates :slug, presence: true

  friendly_id :foo, use: [:slugged, :finders]
end