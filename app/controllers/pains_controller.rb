class PainsController < ApplicationController
  def index
    @pains = Pain.all
  end

end
