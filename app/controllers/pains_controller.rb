class PainsController < ApplicationController
  before_action :authenticate_user! , only: [:new]

  def index
    @pains = Pain.all
  end

  def new
    @pain = Pain.new
  end

  def create
    @pain = Pain.new(pain_params)
    if @pain.save
      redirect_to pains_path
    else
      render :new
    end
  end


    def show
      @pain = Pain.find(params[:id])
    end

    def edit
      @pain = Pain.find(params[:id])
    end

    def update
      @pain = Pain.find(params[:id])
      if @pain.update(pain_params)
        redirect_to pains_path, notice: "修改成功啦！"
      else
        render :edit
      end
    end

   def destroy
     @pain = Pain.find(params[:id])
     @pain.destroy
     flash[:alert] = "已经删除了！"
     redirect_to pains_path
   end

  private

  def pain_params
    params.require(:pain).permit(:total, :user_id, :pain_name, :pain_cause, :regret_level, :next_do)
  end



end
