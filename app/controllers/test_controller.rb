class TestController < ApplicationController

  # def reset_password
  #   u = User.last
  #   u.send_reset_password_instructions
  #   render json: u
  #   return
  # end

  def version
    render json: {
      mailer_sender: ENV["DEVISE_MAILER_SENDER"],
      secret_key: ENV["DEVISE_SECRET_KEY"],
      user_name: ENV["SEND_CLOUD_USER_NAME"],
      password: ENV["SEND_CLOUD_USER_KEY"]
    }
    return
  end
end
