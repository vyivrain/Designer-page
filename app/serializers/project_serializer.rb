class ProjectSerializer < ActiveModel::Serializer
  attributes :name

  has_many :project_images
end
