class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :load_locale
  before_action :load_groups

  protected

  def load_locale
    I18n.locale = :ru
  end

  def not_found
    raise ActionController::RoutingError.new('Not Found')
  end

  def load_groups
    @groups = Group.all
  end
end
