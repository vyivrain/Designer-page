class GroupsController < ApplicationController
  before_action :authenticate_user!, except: [:show]

  def index
    @groups = Group.all
  end

  def new
    @group = Group.new
  end

  def show
    @group = Group.friendly.find(params[:id])
  end

  def edit
    @group = Group.find_by(id: params[:id])
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to groups_path, notice: 'You\'ve successfully created a group'
    else
      redirect_to new_group_path, error: 'There was an error while creating a group'
    end
  end

  def update
    @group = Group.find_by(id: params[:id])
    if @group.update(group_params)
      redirect_to groups_path, notice: 'You\'ve successfully updated a group'
    else
      redirect_to edit_group_path(@group), notice: 'There was an error while updating a group'
    end
  end

  def destroy
    @group = Group.find_by(id: params[:id])
    @group.destroy if @group.present?
    redirect_to groups_path, notice: 'Group was successfully deleted'
  end

  private

  def group_params
    params.require(:group).permit(:name)
  end
end
