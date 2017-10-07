class PainsController < ApplicationController
  before_action :authenticate_user! , only: [:new, :create, :edit, :update, :destroy]
  before_action :find_pain_and_check_permission, only: [:edit, :update, :destroy]

  def index
    @pains = Pain.all
  end

  def new
    @pain = Pain.new
  end

  def create
    @pain = Pain.new(pain_params)
    @pain.user = current_user

    if @pain.save
      redirect_to pains_path
    else
      render :new
    end
  end


    def show
      @pain = Pain.find(params[:id])
      @comments = @pain.comments.recent.paginate(:page => params[:page], :per_page => 3)
    end

    def edit
    end

    def update

      if @pain.update(pain_params)
        redirect_to pains_path, notice: "修改成功啦！"
      else
        render :edit
      end
    end

   def destroy

     @pain.destroy
    #  flash[:alert] = "已经删除了！"
     redirect_to pains_path, alert: "已经删除了！"
   end

  private

  def find_pain_and_check_permission
    @pain = Pain.find(params[:id])

      if current_user != @pain.user
        redirect_to root_path, alert: "你没有权限！"
      end
    end

  def pain_params
    params.require(:pain).permit(:total, :user_id, :pain_name, :pain_cause, :regret_level, :next_do)
  end

end
