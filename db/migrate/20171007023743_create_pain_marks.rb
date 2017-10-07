class CreatePainMarks < ActiveRecord::Migration[5.0]
  def change
    create_table :pain_marks do |t|
      t.integer :pain_id
      t.integer :user_id

      t.timestamps
    end
  end
end
