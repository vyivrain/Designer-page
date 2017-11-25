class FillDatabase < ActiveRecord::Migration[5.1]
  def change
    create_table :groups do |t|
      t.string :name
      t.timestamps
    end

    create_table :project do |t|
      t.string :name
      t.references :group, index: true
      t.timestamps
    end

    create_table :project_images do |t|
      t.references :project, index: true
      t.timestamps
    end
  end
end
