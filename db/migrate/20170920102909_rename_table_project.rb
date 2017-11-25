class RenameTableProject < ActiveRecord::Migration[5.1]
  def change
    rename_table :project, :projects
  end
end
