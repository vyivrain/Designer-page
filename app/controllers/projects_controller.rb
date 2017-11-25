class ProjectsController < ApplicationController
  before_action :authenticate_user!

  def index
    @projects = Project.all
  end

  def new
    @project = Project.new
    @project.project_images.build
  end

  def edit
    @project = Project.find_by(id: params[:id])
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      flash[:notice] = 'You\'ve successfully created a project'
      redirect_to projects_path
    else
      flash[:error] = 'Error was while proccessing project data'
      render :new
    end
  end

  def update
    @project = Project.find_by(id: params[:id])
    if @project.save
      flash[:notice] = 'You\'ve successfully created a project'
    else
      flash[:error] = 'Error was while proccessing project data'
    end
    redirect_to project_path(@project)
  end

  def destroy
    @project = Project.find_by(id: params[:id])
    @project.destroy
    redirect_to projects_path
  end

  private

  def project_params
    params.require(:project).permit(:name, :group_id)
  end
end
