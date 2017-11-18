class TestController < ApplicationController

  # def reset_password
  #   u = User.last
  #   u.send_reset_password_instructions
  #   render json: u
  #   return
  # end

  def version
    render plain: 'v2'
    return
  end
end
