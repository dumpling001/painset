class CommentsController < ApplicationController
  before_action :authenticate_user!, :only => [:new, :create]

  def new
    @pain = Pain.find(params[:pain_id])
    @comment = Comment.new
  end

  def create
    @pain = Pain.find(params[:pain_id])
    @comment = Comment.new(comment_params)
    @comment.pain = @pain
    @comment.user = current_user

    if @comment.save
      redirect_to pain_path(@pain)
    else
      render :new
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:content)
  end
end
