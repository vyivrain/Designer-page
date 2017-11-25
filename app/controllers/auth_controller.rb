class AuthController < ApplicationController
  def my_auth
    user = User.find_by(email: params[:email])
    not_found unless user.present? && user.valid_password?(params[:password])
    sign_in_and_redirect user
  end

  private

  def sign_in_params
    params.permit(:email, :password)
  end
end
