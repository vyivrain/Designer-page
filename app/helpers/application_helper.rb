module ApplicationHelper
  def page_name
    "#{controller_name.underscore}_#{action_name.underscore}" if response.ok?
  end

  def page_active?(link_path)
    if link_path.is_a? Array
      link_path.include? request.path
    else
      link_path == request.path
    end
  end
end
