class CreatePostsTable < ActiveRecord::Migration[7.0]
  def up
    execute File.read(Rails.root.join('db', 'create_posts_table.sql'))
  end

  def down

  end
end
