module PainsHelper
  def render_pain_description(pain)
    simple_format(pain.pain_cause)
  end
end
