class PainsController < ApplicationController
  before_action :authenticate_user! , only: [:new, :create, :edit, :update, :destroy, :mark, :discard]
  before_action :find_pain_and_check_permission, only: [:edit, :update, :destroy]

  def index
    @pains = Pain.recent.paginate(page: params[:page], per_page: 10)
  end

  def new
    @pain = Pain.new
  end

  def create
    @pain = Pain.new(pain_params)
    @pain.user = current_user

    if @pain.save
      current_user.mark!(@pain)
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

   def mark
     @pain = Pain.find(params[:id])

     if !current_user.is_member_of?(@pain)
       current_user.mark!(@pain)
       flash[:notice] = "标记成功！"
     else
       flash[:warning] = "您之前已经标记过了！"
     end
     redirect_to pain_path(@pain)
   end

   def discard
     @pain = Pain.find(params[:id])

     if current_user.is_member_of?(@pain)
       current_user.discard!(@pain)
       flash[:alert] = "已经不再犯同样的错误啦，取消标记！"
     else
       flash[:warning] = "你本来就没有标记哦！"
      end

      redirect_to pain_path(@pain)
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
