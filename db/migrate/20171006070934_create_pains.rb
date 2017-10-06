class CreatePains < ActiveRecord::Migration[5.0]
  def change
    create_table :pains do |t|
      t.integer :total, default: 0
      t.integer :user_id
      t.string :pain_name
      t.string :pain_cause
      t.string :regret_level
      t.string :next_do
      t.timestamps
    end
  end
end
