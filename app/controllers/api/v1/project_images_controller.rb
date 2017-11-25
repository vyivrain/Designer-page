module Api
  module V1
    class ProjectImagesController < BaseController
      def index
        render json: ProjectImage.all
      end
    end
  end
end

