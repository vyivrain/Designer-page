module Api
  module V1
    class GroupsController < BaseController
      def index
        render json: Group.all
      end
    end
  end
end

