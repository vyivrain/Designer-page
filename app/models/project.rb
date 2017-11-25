class Project < ApplicationRecord
  belongs_to :group, inverse_of: :projects
  has_many :project_images, dependent: :destroy, inverse_of: :project

  validates :name, presence: true
  validates :group_id, presence: true

  accepts_nested_attributes_for :project_images

  def medium_image_url
    project_image.url(:medium)
  end
end
