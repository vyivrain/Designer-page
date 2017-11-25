class ProjectImageSerializer < ActiveModel::Serializer
  attributes :id, :image_url

  def image_url
    object.image.url(:medium)
  end
end
