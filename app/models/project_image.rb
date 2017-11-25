class ProjectImage < ApplicationRecord
  belongs_to :project, inverse_of: :project_images

  has_attached_file :image, styles: { medium: '1200x1200>', small: '300x300>', large: '4000x4000' },
                    default_url: '/images/:style/missing.png'

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
end
