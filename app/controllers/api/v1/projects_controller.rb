module Api
  module V1
    class ProjectsController < BaseController
      def index
        render json: Project.all
      end
    end
  end
end

