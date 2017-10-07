class Account::PainsController < ApplicationController
  before_action :authenticate_user!

  def index
    @pains = current_user.participated_pains
  end

end
